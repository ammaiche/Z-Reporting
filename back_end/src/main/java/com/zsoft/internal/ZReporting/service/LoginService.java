package com.zsoft.internal.ZReporting.service;

import com.zsoft.internal.ZReporting.domain.Authority;
import com.zsoft.internal.ZReporting.domain.User;
import com.zsoft.internal.ZReporting.security.AuthoritiesConstants;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class LoginService {


  static List<User> userList = new ArrayList<>();

  public LoginService(){

    User user = new User();

    user.setId(String.valueOf(new Random().nextDouble()));
    user.setFirstName("Mahdi");
    user.setLastName("Maiche");
    user.setPassword(new BCryptPasswordEncoder().encode("Akwa222222"));
    user.setCurrentProject("Z-CRA");
    user.setEmail("ammaiche@gmail.com");
    user.setLogin("ammaiche@gmail.com");
    user.getAuthorities().add(new Authority(AuthoritiesConstants.USER));

    userList.add(user);

    User user2 = new User();

    user2.setId(String.valueOf(new Random().nextDouble()));
    user2.setFirstName("Belkacem");
    user2.setLastName("Rebbouh");
    user2.setPassword(new BCryptPasswordEncoder().encode("Akwa333333"));
    user2.setCurrentProject("Z-CRA2");
    user2.setEmail("belkacem@zsoft.com");
    user2.setLogin("belkacem@zsoft.com");
    user2.getAuthorities().add(new Authority(AuthoritiesConstants.ADMIN));
    userList.add(user2);

  }

  public Optional<User> getUserByLogin(String login){

    return userList.stream().filter(user->user.getLogin().equals(login)).findFirst();
  }

}
