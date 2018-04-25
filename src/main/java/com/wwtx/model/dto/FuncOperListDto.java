package com.wwtx.model.dto;

import com.wwtx.model.SysFuncOper;

import java.io.Serializable;
import java.util.List;

public class FuncOperListDto implements Serializable{

	private Integer funcUid;
	
	private List<SysFuncOper> list;

	public Integer getFuncUid() {
		return funcUid;
	}

	public void setFuncUid(Integer funcUid) {
		this.funcUid = funcUid;
	}

	public List<SysFuncOper> getList() {
		return list;
	}

	public void setList(List<SysFuncOper> list) {
		this.list = list;
	}
}
