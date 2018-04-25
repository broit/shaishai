	/**
	 * 初始化NT组件
	 */
	loadNT = function(){
		 createElementNT199();
	}
	
	/**
	 * 加密狗验证
	 */
	validateNT = function(){
		var browser = DetectBrowser();
		if (browser == "Unknown") {
			alert("不支持该浏览器， 如果您在使用傲游或类似浏览器，请切换到IE模式");
			return false;
		}
        
        //DetectActiveX() 判断NT199()是否安装
        var create = DetectNT199Plugin();
       	if(create == false)
        {
            alert("加密狗插件未安装,请直接安装CD区的插件!");
            return false;
        }
       	
       	//检测NT199是否存在
		if (NT199_Find() < 1) {
			alert("未找到安全登录加密狗,请插上加密狗后再点击登录");
			return false;
		}
		
		//打开USB Key,验证用户密码  
		var retVal = NT199_CheckPassword('12345678');
		if (retVal != 0) {
		
			//NT199_GetLastError 为封装到JS文件的获取错误信息的方法,返回错误信息,根据错误信息到帮助文档查询具体错误
			alert("验证NT199用户密码失败，错误码:" + NT199_GetLastError());
			return false;
		}
		
		//获取本Key的唯一硬件ID
		var keid = NT199_GetHardwareId();
		if (keid == "") {
			alert("获取加密狗硬件ID失败，错误码：" + NT199_GetLastError());
			return false;
		}
		
		return true;
	}