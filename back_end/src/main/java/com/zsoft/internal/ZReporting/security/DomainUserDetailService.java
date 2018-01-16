package com.zsoft.internal.ZReporting.security;

import com.zsoft.internal.ZReporting.domain.User;
import com.zsoft.internal.ZReporting.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.stream.Collectors;

public class DomainUserDetailService implements UserDetailsService{

  @Autowired
  LoginService loginService;


  @Override
  public UserDetails loadUserByUsername(final String login) {

    String lowercaseLogin = login.toLowerCase(Locale.ENGLISH);
    Optional<User> userFromDatabase = loginService.getUserByLogin(lowercaseLogin);

    System.out.println("Login "+login);
    System.out.println(userFromDatabase);

    return userFromDatabase.map(user -> {

      List<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
        .map(authority -> new SimpleGrantedAuthority(authority.getName()))
        .collect(Collectors.toList());
      return new org.springframework.security.core.userdetails.User(lowercaseLogin,
        user.getPassword(),
        grantedAuthorities);
    }).orElseThrow(() -> new UsernameNotFoundException("User " + lowercaseLogin + " was not found in the " +
      "database"));
  }

}
