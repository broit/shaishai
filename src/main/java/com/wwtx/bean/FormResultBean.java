package com.wwtx.bean;

public class FormResultBean<T> implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -741132986728642083L;

	private T data;
	
	private boolean success;
	
	private String errorMessage;

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
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
