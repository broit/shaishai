package com.wwtx.model;

public class WwtxUser {
    private Integer id;

    private String nicknae;

    private String openid;

    private String timg;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNicknae() {
        return nicknae;
    }

    public void setNicknae(String nicknae) {
        this.nicknae = nicknae == null ? null : nicknae.trim();
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid == null ? null : openid.trim();
    }

    public String getTimg() {
        return timg;
    }

    public void setTimg(String timg) {
        this.timg = timg == null ? null : timg.trim();
    }
}