package com.wwtx.model;

import java.io.Serializable;

public class SysUser implements Serializable,IBaseModel {
    private Integer id;

    private String code;

    private String name;

    private String password;

    private String mobile;

    
    
    private String status;

	private static final long serialVersionUID = 1L;

 

	@Override
	public Integer getId() {
		// TODO Auto-generated method stub
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}
	

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}