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
            User v = new User();
            v.setUsername(name);
            v.setPassword(newpass);
            return baseDAO.update(v);
        }
       return false;
    }

}

