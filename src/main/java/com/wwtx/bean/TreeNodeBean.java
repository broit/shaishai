package com.wwtx.bean;

import java.util.ArrayList;
import java.util.List;

public class TreeNodeBean {

	private String text;
	
	private String iconCls;
	
	private boolean expanded;
	
	private boolean checked;
	
	@SuppressWarnings("unused")
	private boolean selectable;
	
	private String value;
	
	private String code;
	
	private String type;
	
	private String view;
	
	private String routeId;
	
	private List<TreeNodeBean> children;

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isExpanded() {
		return expanded;
	}

	public void setExpanded(boolean expanded) {
		this.expanded = expanded;
	}

	public boolean isChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}

	public List<TreeNodeBean> getChildren() {
		return children;
	}

	public void setChildren(List<TreeNodeBean> children) {
		this.children = children;
	}
	
	public void addChildren(TreeNodeBean children){
		if(this.children==null){
			this.children = new ArrayList<TreeNodeBean>();
			this.expanded = this.routeId==null;
		}
		this.children.add(children);
	}
	
	public boolean getLeaf(){
		return this.children==null;
	}

	public String getIconCls() {
		return iconCls;
	}

	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getRouteId() {
		return routeId;
	}

	public void setRouteId(String routeId) {
		this.routeId = routeId;
	}

	public String getView() {
		return view;
	}

	public void setView(String view) {
		this.view = view;
	}

	public boolean isSelectable() {
		return this.children==null;
	}

	public void setSelectable(boolean selectable) {
		this.selectable = selectable;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	
}
