package com.wwtx.bean;

import java.util.List;
import java.util.Map;

public class AuthBean {

	private List<TreeNodeBean> funcTree;
	
	private Map<String,List<String>> operMap;
	
	private boolean success;
	
	private String errorMessage;

	public List<TreeNodeBean> getFuncTree() {
		return funcTree;
	}

	public void setFuncTree(List<TreeNodeBean> funcTree) {
		this.funcTree = funcTree;
	}

	public Map<String, List<String>> getOperMap() {
		return operMap;
	}

	public void setOperMap(Map<String, List<String>> operMap) {
		this.operMap = operMap;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
	
}
