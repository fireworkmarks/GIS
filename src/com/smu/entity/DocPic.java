package com.smu.entity;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author LeagueRT
 * @create 2019/1/25-12:27
 */


@Entity
public class DocPic {
    private String docid;
    private String picurl;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DocPic docPic = (DocPic) o;
        return Objects.equals(docid, docPic.docid) &&
                Objects.equals(picurl, docPic.picurl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(docid, picurl);
    }
}
