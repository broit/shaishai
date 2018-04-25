package com.wwtx.model;

import java.io.Serializable;

public class SysFuncOper implements Serializable,IBaseModel {
    private Integer operUid;

    private String operCode;

    private Integer operFunc;

 

 
    public int getOperUid() {
		return operUid;
	}

	public void setOperUid(int operUid) {
		this.operUid = operUid;
	}

	public String getOperCode() {
        return operCode;
    }

    public void setOperCode(String operCode) {
        this.operCode = operCode == null ? null : operCode.trim();
    }

  



	



	public Integer getOperFunc() {
		return operFunc;
	}

	public void setOperFunc(Integer operFunc) {
		this.operFunc = operFunc;
	}

	public void setOperUid(Integer operUid) {
		this.operUid = operUid;
	}

	@Override
	public Integer getId() {
		// TODO Auto-generated method stub
		return null;
	}
}