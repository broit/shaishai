package com.wwtx.common.enu;

/**数据字典枚举*/
public enum SysParamEnum {
	/**职务*/
	JOB{
		public String getName(){
			return "职务";
		}
		public Integer getType(){
			return 1;
		}
	},
	/**故障类型-模具*/
	FAULT_MOULD{
		public String getName(){
			return "模具故障类型";
		}
		public Integer getType(){
			return 21;
		}
	},
	/**故障类型-注塑机*/
	FAULT_IMM{
		public String getName(){
			return "注塑机故障类型";
		}
		public Integer getType(){
			return 22;
		}
	},
	/**故障类型-机械手*/
	FAULT_ROBOT{
		public String getName(){
			return "机械手故障类型";
		}
		public Integer getType(){
			return 23;
		}
	};
	
	public String getName(){
		return null;
	}
	/**类别*/
	public Integer getType(){
		return null;
	}
	
	/**子类别*/
	public Integer getSubtype(){
		return null;
	}
}
