package com.zsoft.internal.ZReporting.security;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthenticationSuccessHandler  extends SimpleUrlAuthenticationSuccessHandler {

  public AuthenticationSuccessHandler() {
  }

  public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
    response.setStatus(200);
  }
}
