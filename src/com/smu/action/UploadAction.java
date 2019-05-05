package com.smu.action;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

/**
 * @author LeagueRT
 * @create 2018/12/9-14:39
 */
public class UploadAction extends ActionSupport {
<<<<<<< HEAD
    private String title;
    private File pic;
    private String picContentType;
=======
    private File pic;
>>>>>>> 修改代码仓库数据,清理无用数据
    private String picFileName;
    private String savePath;
    public void setSavePath(String savePath){
        this.savePath = savePath;
    }
    //返回文件上传路径
    private  String getSavePath(){
        HttpServletRequest request = ServletActionContext.getRequest();
        return request.getRealPath(savePath);
    }
    //省略其他属性的set、get方法
    public String execute() throws Exception{
        setSavePath("/UploadFiles");           //将上传文件路径设置为空
        FileOutputStream fos = new FileOutputStream(getSavePath() + "\\" + getPicFileName());
                                      //以上传文件存放路径和原文件名建立一个输出流
        FileInputStream fis = new FileInputStream(getPic());
                                      //以上传文件建立一个输入流
        byte [] buffer = new byte[1024];
        int len = 0;
        while ((len = fis.read(buffer))>0){
            fos.write(buffer, 0, len);   //将上传文件写入到输出流所对应的文件中
        }
        return SUCCESS;
    }

    public String getPicFileName() {
        return picFileName;
    }

    public void setPicFileName(String picFileName) {
        this.picFileName = picFileName;
    }

<<<<<<< HEAD
    public String getPicContentType() {
        return picContentType;
    }

    public void setPicContentType(String picContentType) {
        this.picContentType = picContentType;
    }

=======
>>>>>>> 修改代码仓库数据,清理无用数据
    public File getPic() {
        return pic;
    }

    public void setPic(File pic) {
        this.pic = pic;
    }

<<<<<<< HEAD
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
=======
>>>>>>> 修改代码仓库数据,清理无用数据
}
