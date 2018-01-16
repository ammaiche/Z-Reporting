package com.zsoft.internal.ZReporting.web.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestRessource {

  @RequestMapping(value = "mehdi", method = RequestMethod.GET)
  public String printTest(){

    return "Mehdi";
  }
}
