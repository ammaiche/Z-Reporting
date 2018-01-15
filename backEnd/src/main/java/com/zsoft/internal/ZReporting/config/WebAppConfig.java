package com.zsoft.internal.ZReporting.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class WebAppConfig extends WebMvcConfigurerAdapter {

  @Bean
  public InternalResourceViewResolver viewResolver() {

    InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    resolver.setSuffix(".html");
    return resolver;
  }

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/notfound").setViewName("index");
  }

  /*
  @Bean
  public EmbeddedServletContainerCustomizer containerCustomizer() {

    return container -> {
      container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND,
        "/notFound"));
    };
  }*/
}
