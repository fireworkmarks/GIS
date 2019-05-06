package com.smu.service.impl;

/**
 * @author LeagueRT
 * @create 2018/12/7-14:54
 */

import com.smu.dao.BaseDAO;
import com.smu.entity.User;
import com.smu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Scope("prototype")
public class UserServiceImpl implements UserService {
    @Autowired
    private BaseDAO baseDAO;

    @Override
    public User checkLogin(String name, String pass) {

        User u = new User();
        u.setUsername(name);
        u.setPassword(pass);
        List users = baseDAO.find(u);
        if (users.size() != 0) return (User)users.get(0);
        return null;
    }

    @Override
    public boolean register(String name, String pass, String tel, String email, String rmark, String info, String adm) {

        User u = new User();
        u.setUsername(name);
        u.setPassword(pass);
        u.setUsertel(tel);
        u.setUseremail(email);
        u.setUserrmark(rmark);
        u.setUserinfo(info);
        u.setPasswordadm(adm);
        List users = baseDAO.find(name);
        if (users.size() == 0){
            return baseDAO.add(u);
        }
        return false;
    }

    @Override
    public boolean modify(String name, String pass, String newpass) {

        User u = new User();
        u.setUsername(name);
        u.setPassword(pass);
        List users = baseDAO.find(u);
        if (users.size() != 0){
            User v = (User) users.get(0);
            v.setPassword(newpass);
            return baseDAO.update(v);
        }
       return false;
    }


    @Override
    public boolean modify(String name, String mark, String rmark, String tel, String info){

        User u = new User();
        u.setUsername(name);
        u.setUserrmark(mark);
        List users = baseDAO.find(u);
        if (users.size() != 0){
            User v = (User) users.get(0);
            if (rmark != null) v.setUserrmark(rmark);
            if (tel != null) v.setUsertel(tel);
            if (info != null) v.setUserinfo(info);
            return baseDAO.update(v);
        }
        return false;
    }

    @Override
    public  boolean upload(String name, String mark, String img){
        User u = new User();
        u.setUsername(name);
        u.setUserrmark(mark);
        List users = baseDAO.find(u);
        if (users.size() != 0){
            User v = (User) users.get(0);
            v.setUserimg(img);
            return baseDAO.update(v);
        }
        return false;
    }

    @Override
    public User getUserInfo(String name,String mark){
        User u = new User();
        u.setUsername(name);
        u.setUserrmark(mark);
        List users = baseDAO.find(u);
        if (users.size() != 0) return (User)users.get(0);
        return null;
    }

    @Override
    public User getAllUser(){
        User u = new User();
        List users = baseDAO.find(u);
        return (User) users;
    }

    @Override
    public boolean useradmin(String name, String mark, String pwdadm){
        User u = new User();
        u.setUsername(name);
        u.setUserrmark(mark);
        List users = baseDAO.find(u);
        if (users.size() != 0) {
            User v = (User) users.get(0);
            v.setPasswordadm(pwdadm);
            return baseDAO.update(v);
        }
        return false;
    }
}

