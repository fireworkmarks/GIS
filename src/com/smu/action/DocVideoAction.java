package com.smu.action;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.smu.entity.DocRadiourl;
import com.smu.service.DocVideoService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author LeagueRT
 * @create 2019/5/7-10:41
 */
public class DocVideoAction implements Action {
    @Autowired
    private DocVideoService docVideoService;

    private String docid;
    private String docfloorid;
    private String docradiourl;


    @Override
    public String execute() throws Exception {
        ActionContext ctx = ActionContext.getContext();
        DocRadiourl docRadiourl = docVideoService.getVideoAPI(docid,docfloorid);
        if (docRadiourl != null){
            ctx.getSession().put("url", docRadiourl.getDocradiourl());
            return SUCCESS;
        }
        return ERROR;
    }

    public String getDocid() {
        return docid;
    }

    public void setDocid(String docid) {
        this.docid = docid;
    }

    public String getDocfloorid() {
        return docfloorid;
    }

    public void setDocfloorid(String docfloorid) {
        this.docfloorid = docfloorid;
    }

    public String getDocradiourl() {
        return docradiourl;
    }

    public void setDocradiourl(String docradiourl) {
        this.docradiourl = docradiourl;
    }
}
