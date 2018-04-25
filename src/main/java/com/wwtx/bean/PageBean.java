package com.wwtx.bean;

import java.util.List;

import com.wwtx.model.IBaseModel;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;


public class PageBean<T extends IBaseModel> implements java.io.Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 4043642059481944233L;

	private T param;

	private List<T> rows;

	private int start;

	private int limit;

	private int count;

	private int end;

	private LoginUserBean user;

	public PageBean(){};

	public PageBean(T param){
		this.param = param;
	}

	public T getParam() {
		return param;
	}

	public void setParam(T param) {
		this.param = param;
	}

	public List<T> getRows() {
		return rows;
	}

	public void setRows(List<T> rows) {
		this.rows = rows;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public LoginUserBean getUser() {
		return user;
	}

	public void setUser(LoginUserBean user) {
		this.user = user;
	}

	public int getEnd() {
		return this.end = this.start+this.limit;
	}



}
