package com.zsoft.internal.ZReporting.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {


  @RequestMapping("test")
  public String getMainPage(){
    return "index2";
  }

}
