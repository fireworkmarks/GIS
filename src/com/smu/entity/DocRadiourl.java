package com.smu.entity;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author LeagueRT
 * @create 2019/1/25-12:27
 */
@Entity
public class DocRadiourl {
    private int id;
    private String docid;
    private String docfloorid;
    private String docradiourl;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "docid")
    public String getDocid() {
        return docid;
    }

    public void setDocid(String docid) {
        this.docid = docid;
    }

    @Basic
    @Column(name = "docfloorid")
    public String getDocfloorid() {
        return docfloorid;
    }

    public void setDocfloorid(String docfloorid) {
        this.docfloorid = docfloorid;
    }

    @Basic
    @Column(name = "docradiourl")
    public String getDocradiourl() {
        return docradiourl;
    }

    public void setDocradiourl(String docradiourl) {
        this.docradiourl = docradiourl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DocRadiourl that = (DocRadiourl) o;
        return id == that.id &&
                Objects.equals(docid, that.docid) &&
                Objects.equals(docfloorid, that.docfloorid) &&
                Objects.equals(docradiourl, that.docradiourl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, docid, docfloorid, docradiourl);
    }
}
