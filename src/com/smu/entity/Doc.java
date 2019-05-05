package com.smu.entity;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author LeagueRT
 * @create 2019/1/25-12:27
 */


@Entity
public class Doc {
    private String docid;
    private String picurl;
    private String docInfo;

    @Id
    @Column(name = "docid")
    public String getDocid() {
        return docid;
    }

    public void setDocid(String docid) {
        this.docid = docid;
    }

    @Basic
    @Column(name = "picurl")
    public String getPicurl() {
        return picurl;
    }

    public void setPicurl(String picurl) {
        this.picurl = picurl;
    }

    @Basic
    @Column(name = "docInfo")
    public String getDocInfo() {
        return docInfo;
    }

    public void setDocInfo(String docInfo) {
        this.docInfo = docInfo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Doc doc = (Doc) o;
        return Objects.equals(docid, doc.docid) &&
                Objects.equals(picurl, doc.picurl) &&
                Objects.equals(docInfo, docInfo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(docid, picurl,docInfo);
    }
}
