package com.zsoft.internal.ZReporting.security;


import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AbstractAuthenticationTargetUrlRequestHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LogoutSuccessHandler extends AbstractAuthenticationTargetUrlRequestHandler implements org.springframework.security.web.authentication.logout.LogoutSuccessHandler {

  public LogoutSuccessHandler(){

  }
  @Override
  public void onLogoutSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
    httpServletResponse.setStatus(200);
  }
}
