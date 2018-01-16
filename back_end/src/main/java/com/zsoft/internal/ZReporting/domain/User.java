package com.zsoft.internal.ZReporting.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.Email;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class User implements Serializable{

  private static final long serialVersionUID = 1L;

  private String id;

  @NotNull
  @Size(min = 2, max = 50)
  private String login;

  @NotNull
  private String password;


  @Size(min = 2, max = 50)
  private String firstName;

  @Size(min = 2, max = 50)
  private String lastName;

  @Email
  private String email;

  @NotNull
  private String currentProject;

  private Set<Authority> authorities = new HashSet<>();


  public void setAuthorities(Set<Authority> authorities) {
    this.authorities = authorities;
  }
  public void setId(String id) {
    this.id = id;
  }

  public void setLogin(String login) {
    this.login = login;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setCurrentProject(String currentProject) {
    this.currentProject = currentProject;
  }

  public Set<Authority> getAuthorities() {
    return authorities;
  }

  public String getId() {
    return id;
  }

  public String getLogin() {
    return login;
  }

  public String getPassword() {
    return password;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getEmail() {
    return email;
  }

  public String getCurrentProject() {
    return currentProject;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    User user = (User) o;

    if (!id.equals(user.id)) return false;
    if (!login.equals(user.login)) return false;
    if (!password.equals(user.password)) return false;
    if (!firstName.equals(user.firstName)) return false;
    if (!lastName.equals(user.lastName)) return false;
    if (!email.equals(user.email)) return false;
    return currentProject != null ? currentProject.equals(user.currentProject) : user.currentProject == null;
  }

  @Override
  public int hashCode() {
    int result = id.hashCode();
    result = 31 * result + login.hashCode();
    result = 31 * result + password.hashCode();
    result = 31 * result + firstName.hashCode();
    result = 31 * result + lastName.hashCode();
    result = 31 * result + email.hashCode();
    result = 31 * result + (currentProject != null ? currentProject.hashCode() : 0);
    return result;
  }

}
