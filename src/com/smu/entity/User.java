package com.smu.entity;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

/**
 * @author LeagueRT
 * @create 2019/1/21-10:54
 */
@Entity
public class User {
    private Integer ID;
    private String username;
    private String password;
    private String usertel;
    private String useremail;
    private String userrmark;
    private String userimg;
    private String userinfo;
    private String passwordadm;

    @Id
    @Column(name = "id")
    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    @Basic
    @Column(name = "username")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "usertel")
    public String getUsertel() {
        return usertel;
    }

    public void setUsertel(String usertel) {
        this.usertel = usertel;
    }

    @Basic
    @Column(name = "useremail")
    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    @Basic
    @Column(name = "userrmark")
    public String getUserrmark() {
        return userrmark;
    }

    public void setUserrmark(String userrmark) {
        this.userrmark = userrmark;
    }

    @Basic
    @Column(name = "userimg")
    public String getUserimg() {
        return userimg;
    }

    public void setUserimg(String userimg) {
        this.userimg = userimg;
    }

    @Basic
    @Column(name = "userinfo")
    public String getUserinfo() {
        return userinfo;
    }

    public void setUserinfo(String userinfo) {
        this.userinfo = userinfo;
    }

    @Basic
    @Column(name = "passwordadm")
    public String getPasswordadm() {
        return passwordadm;
    }

    public void setPasswordadm(String passwordadm) {
        this.passwordadm = passwordadm;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return  Objects.equals(ID, user.ID) &&
                Objects.equals(username, user.username) &&
                Objects.equals(password, user.password) &&
                Objects.equals(usertel, user.usertel) &&
                Objects.equals(useremail, user.useremail) &&
                Objects.equals(userrmark, user.userrmark) &&
                Objects.equals(userimg, user.userimg) &&
                Objects.equals(userinfo, user.userinfo) &&
                Objects.equals(passwordadm, user.passwordadm);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ID, username, password, usertel, useremail, userrmark, userimg, userinfo, passwordadm);
    }
}
