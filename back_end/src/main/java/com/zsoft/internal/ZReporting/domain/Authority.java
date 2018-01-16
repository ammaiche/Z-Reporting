package com.zsoft.internal.ZReporting.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

public class Authority implements Serializable{

  private static final long serialVersionUID = 1L;

  public Authority(){}

  public Authority(String name){

    this.name = name;
  }

  @NotNull
  @Size(min = 1, max = 50)
  private String name;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    Authority authority = (Authority) o;

    return name.equals(authority.name);
  }

  @Override
  public int hashCode() {
    return name.hashCode();
  }

  @Override
  public String toString() {
    return "Authority{" +
      "name='" + name + '\'' +
      '}';
  }
}
