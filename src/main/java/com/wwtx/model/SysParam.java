package com.wwtx.model;

import java.math.BigDecimal;

public class SysParam implements IBaseModel{
    private Integer id;

    private String name;

    private String code;

    private BigDecimal type;

    private BigDecimal subtype;
    
    private BigDecimal serial;

    private String value;

    private String isactive;

    private String flag;

    public BigDecimal getSerial() {
		return serial;
	}

	public void setSerial(BigDecimal serial) {
		this.serial = serial;
	}



    @Override
	public Integer getId() {
		// TODO Auto-generated method stub
		return id;
	}
    

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code == null ? null : code.trim();
    }

    public BigDecimal getType() {
        return type;
    }

    public void setType(BigDecimal type) {
        this.type = type;
    }

    public BigDecimal getSubtype() {
        return subtype;
    }

    public void setSubtype(BigDecimal subtype) {
        this.subtype = subtype;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value == null ? null : value.trim();
    }

    public String getIsactive() {
        return isactive;
    }

    public void setIsactive(String isactive) {
        this.isactive = isactive == null ? null : isactive.trim();
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag == null ? null : flag.trim();
    }
}