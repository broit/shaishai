package com.wwtx.common.enu;

/**用户级别枚举*/
public enum UserLevelEnum {
	/**系统管理级别*/
	SYS{
		@Override
		public String getName() {
			return "系统管理";
		}

		@Override
		public Integer getLevel() {
			return 0;
		}
	},
	/**总公司级别*/
	COMPANY{
		@Override
		public String getName() {
			return "总公司";
		}

		@Override
		public Integer getLevel() {
			return 1;
		}
	},
	/**分公司级别*/
	BRANCH{
		@Override
		public String getName() {
			return "分公司";
		}

		@Override
		public Integer getLevel() {
			return 2;
		}
	},
	/**车间级别*/
	WORKSHOP{
		@Override
		public String getName() {
			return "车间";
		}

		@Override
		public Integer getLevel() {
			return 3;
		}
	},
	/**班组级别*/
	TEAM{
		@Override
		public String getName() {
			return "班组";
		}

		@Override
		public Integer getLevel() {
			return 4;
		}
	},
	/**员工级别*/
	MEMBER{
		@Override
		public String getName() {
			return "员工";
		}

		@Override
		public Integer getLevel() {
			return 5;
		}
	};
	
	public String getName(){
		return null;
	}
	
	public Integer getLevel(){
		return null;
	}
}
