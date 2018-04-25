package com.wwtx.model;

import java.io.Serializable;

public class SysOper implements Serializable,IBaseModel {
	
	private Integer id;
	
    private String operCode;

    private String operName;

    public String getOperCode() {
        return operCode;
    }

    public void setOperCode(String operCode) {
        this.operCode = operCode == null ? null : operCode.trim();
    }

	public String getOperName() {
		return operName;
	}

	public void setOperName(String operName) {
		this.operName = operName;
	}

	@Override
	public Integer getId() {
		// TODO Auto-generated method stub
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
}