package com.wwtx.model;

import java.util.Date;

public class WwtxArcicle {
    private Integer id;

    private String content;

    private Date cdate;

    private String openid;

    private Date sorttime;

    private Integer istop;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public Date getCdate() {
        return cdate;
    }

    public void setCdate(Date cdate) {
        this.cdate = cdate;
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid == null ? null : openid.trim();
    }

    public Date getSorttime() {
        return sorttime;
    }

    public void setSorttime(Date sorttime) {
        this.sorttime = sorttime;
    }

    public Integer getIstop() {
        return istop;
    }

    public void setIstop(Integer istop) {
        this.istop = istop;
    }
}