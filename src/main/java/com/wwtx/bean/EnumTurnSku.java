package com.wwtx.bean;

public enum EnumTurnSku {

	STORE_IN("IN","IN_STORE","STR_IN"),			//进货
	STORE_AJUST_IN("IN","IN_STORE_AJUST","STR_ADJUST"),		//库存调整进货
	STORE_AJUST_OUT("OUT","OUT_STORE_AJUST","STR_ADJUST"),	//库存调整 出货			
	STORE_RELAY_GOODS("OUT","OUT_RELAY_GOODS","SHOP_TRAD_ORDER_INFO");		//商品备货
	
	private String ttype;
	private String tsubtype;
	private String relaTable; 
	
	private EnumTurnSku(String ttype,String tsubtype,String relaTable){
		this.ttype = ttype;
		this.tsubtype = tsubtype;
		this.relaTable = relaTable;
	}
	
	public String getTtype(){
		return ttype;
	}
	public String getTsubtype(){
		return tsubtype;
	}
	public String getRelaTable(){
		return relaTable;
	}
}
