package com.wwtx.model;

import java.io.Serializable;
import java.math.BigDecimal;

public class SysRoleMessage implements Serializable,IBaseModel {
    private Integer id;

    private String roleid;

    private BigDecimal mtype;


    @Override
    public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRoleid() {
        return roleid;
    }

    public void setRoleid(String roleid) {
        this.roleid = roleid == null ? null : roleid.trim();
    }

	public BigDecimal getMtype() {
		return mtype;
	}

	public void setMtype(BigDecimal mtype) {
		this.mtype = mtype;
	}

}