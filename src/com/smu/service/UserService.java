package com.smu.service;

import com.smu.entity.User;

/**
 * @author LeagueRT
 * @create 2018/12/7-14:53
 */

public interface UserService {

    User checkLogin(String name, String pass);

    boolean register(String name, String pass, String tel, String email, String rmark, String info, String adm);

    boolean modify(String name, String pass, String newpass);

    User modify(String name, String mark, String rmark, String tel, String info);

    boolean upload(String name, String mark, String img);

    User getUserInfo(String name,String mark);

    User getAllUser();

    boolean useradmin(String name, String mark, String pwdadm);

}

