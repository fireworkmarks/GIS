package com.smu.action;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;
import com.smu.service.DocService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author LeagueRT
 * @create 2019/1/12-14:56
 */

public class DocAction extends ActionSupport implements Action {

    @Autowired
    private DocService docService;

    private String name;
    private String floornum;
    private String namechange;
    private String floornumchange;
    private String picurl;

    public String Video() throws Exception{
        return SUCCESS;
    }
    public String execute() throws Exception {
        return SUCCESS;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

