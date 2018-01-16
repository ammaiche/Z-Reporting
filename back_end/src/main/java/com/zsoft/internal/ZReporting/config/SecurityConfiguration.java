package com.zsoft.internal.ZReporting.config;

import com.zsoft.internal.ZReporting.security.AuthenticationFailureHandler;
import com.zsoft.internal.ZReporting.security.AuthenticationSuccessHandler;
import com.zsoft.internal.ZReporting.security.DomainUserDetailService;
import com.zsoft.internal.ZReporting.security.LogoutSuccessHandler;
import org.springframework.beans.factory.BeanInitializationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import javax.annotation.PostConstruct;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

  @Autowired
  private  AuthenticationManagerBuilder authenticationManagerBuilder;
  @Autowired
  private  SessionRegistry sessionRegistry;
  @Autowired
  private  UserDetailsService userDetailsService;

  @PostConstruct
  public void init() {
    try {
      authenticationManagerBuilder
        .userDetailsService(userDetailsService)
        .passwordEncoder(passwordEncoder());
    } catch (Exception e) {
      throw new BeanInitializationException("Security configuration failed", e);
    }
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }


  @Bean
  AuthenticationSuccessHandler authenticationSuccessHandler(){
    return new AuthenticationSuccessHandler();
  }

  @Bean
  AuthenticationFailureHandler authenticationFailureHandler(){
    return new AuthenticationFailureHandler();
  }

  @Bean
  public LogoutSuccessHandler logoutSuccessHandler() {
    return new LogoutSuccessHandler();
  }

  @Bean
  public SessionRegistry sessionRegistry(){
    return new SessionRegistryImpl();
  }
  @Bean
  public UserDetailsService userDetailsService(){
    return new DomainUserDetailService();
  }
  @Override
  public void configure(WebSecurity web) throws Exception {
    web.ignoring()
      .antMatchers("/app/**/*.{js,html}")
      .antMatchers("/content/**");
  }
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .sessionManagement()
      .maximumSessions(32) // maximum number of concurrent sessions for one user
      .sessionRegistry(sessionRegistry)
      .and().and()
      .csrf()
      .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
      .and()
      .formLogin()
      .loginProcessingUrl("/api/authentication")
      .successHandler(authenticationSuccessHandler())
      .failureHandler(authenticationFailureHandler())
      .usernameParameter("username")
      .passwordParameter("password")
      .permitAll()
      .and()
      .logout()
      .logoutUrl("/api/logout")
      .logoutSuccessHandler(logoutSuccessHandler())
      .permitAll()
      .and()
      .authorizeRequests()
      .antMatchers("/api/authenticate").permitAll()
      .antMatchers("/api/signup").permitAll()
      .antMatchers("/api/signin").permitAll();

  }
}
