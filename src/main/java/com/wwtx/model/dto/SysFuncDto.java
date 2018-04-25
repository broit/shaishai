package com.wwtx.model.dto;

import com.wwtx.model.SysFunc;

import java.util.List;

public class SysFuncDto extends SysFunc {

	private static final long serialVersionUID = 1917373680775843164L;

	private String funcParentName;
	
	private List<SysFuncDto> otherFuncs;

	public String getFuncParentName() {
		return funcParentName;
	}

	public void setFuncParentName(String funcParentName) {
		this.funcParentName = funcParentName;
	}

	public List<SysFuncDto> getOtherFuncs() {
		return otherFuncs;
	}

	public void setOtherFuncs(List<SysFuncDto> otherFuncs) {
		this.otherFuncs = otherFuncs;
	}
}
