package com.smu.action;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.smu.service.UserService;
import org.apache.struts2.ServletActionContext;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

/**
 * @author LeagueRT
 * @create 2018/12/9-14:39
 */
public class UploadAction extends ActionSupport implements Action {
    private File File;
    private String ContentType;
    private String FileName;
    private String savePath;

    @Autowired
    private UserService userService;
    //省略其他属性的set、get方法
    public String execute() throws Exception{
        setSavePath("/UploadFiles");           //将上传文件路径设置为空
        FileOutputStream fos = new FileOutputStream(getSavePath() + "\\" + getFile().getName());
                                      //以上传文件存放路径和原文件名建立一个输出流
        System.out.println(getFile().getName());
        FileInputStream fis = new FileInputStream(getFile());
                                      //以上传文件建立一个输入流
        byte [] buffer = new byte[1024];
        int len = 0;
        while ((len = fis.read(buffer))>0){
            fos.write(buffer, 0, len);   //将上传文件写入到输出流所对应的文件中
        }
        ActionContext ctx = ActionContext.getContext();
        String name = ctx.getSession().get("user").toString();
        String mark = ctx.getSession().get("rmark").toString();
        if (userService.upload(name, mark, getFile().getName())) return SUCCESS;
        return ERROR;
    }

    public void setSavePath(String savePath)
    {
        this.savePath = savePath;

    }
    //返回文件上传路径
    private  String getSavePath(){
        HttpServletRequest request = ServletActionContext.getRequest();
        return request.getRealPath(savePath);
    }

    public String getFileName() {
        return FileName;
    }

    public void setFileName(String FileName) {
        this.FileName = FileName;
    }

    public String getContentType() {
        return ContentType;
    }

    public void setContentType(String ContentType) {
        this.ContentType = ContentType;
    }

    public File getFile() {
        return File;
    }

    public void setFile(File file) {
        this.File = file;
    }

}
