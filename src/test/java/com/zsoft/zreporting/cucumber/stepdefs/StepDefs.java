package com.zsoft.zreporting.cucumber.stepdefs;

import com.zsoft.zreporting.ZreportingApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = ZreportingApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
