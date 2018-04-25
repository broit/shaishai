$(document).ready(function(){
	var ns = pr.login;
	ns.form = $('#form-login');
	
	$('#index-login-div-login').hide();
	/**
	 * 密码登录，取得安全加固方式
	 */
	ns.checklogin = function(){
		var name = $('#index-login-form-name').val();
		var pwd = $('#index-login-form-pwd').val();
		var rand = $('#index-login-form-rand').val();
		if(name==''||pwd==''||rand==''){
			alert('请填写登录信息');
			return;
		}
		$.ajax({
            type: "POST",
            url:pr.login.URL_PR_CHECKLOGIN,
            data:{
            	name:name,
            	pwd:pwd,
            	rand:rand
        	},
            async: false,
            error: function(data) {
            	
            },
            success: function(data) {
	           	 if(data.success){
	           		ns.parseOpt(data);
	           	 }else{
	           		alert(data.msg);
//	           		$('#loginError').empty();
//					$('#loginError').append('登陆失败!');
//					$('#loginMsg').empty();
//					$('#loginMsg').append(data.msg);
//					$('#showMsg').show();
					
					document.getElementById('img').src=pr.login.URL_VERIFICATION;
	           	 }
            }
        });
	}
	/**
	 * 解析安全加固方式，并提交安全加固信息
	 */
	ns.parseOpt = function(data){
		var flag = data.pr_opt_login;
		
		if(flag == true){
			var security_code = data.pr_security_code_login;
			var validate = ns.validateKey(security_code);
			if(!validate)
				return false;
			
			ns.login();
		}else{
			ns.login();
		}
	}
	
	/**
	 * 发送短信验证码 
	 */
	ns.sendSMS = function(button){
		$('#index-login-btn-sms').removeClass("disabled");
		ns.settime(button);
		
		var name = $('#index-login-form-name').val();
		$.ajax({
            type: "GET",
            url:pr.login.URL_PR_SENDSMS_LOGIN,
            data:{
            	uname:name
        	},
            async: false,
            error: function(data) {
            	
            },
            success: function(data) {
	           	 if(data.success){
	           		$('#loginError').empty();
	           		$('#loginMsg').empty();
					$('#loginMsg').append("登录验证短信发送成功！");
					$('#showMsg').show();
	           	 }else{
	           		$('#loginError').empty();
					$('#loginError').append('登陆失败!');
					$('#loginMsg').empty();
					$('#loginMsg').append(data.msg);
					$('#showMsg').show();
					
					document.getElementById('img').src=pr.login.URL_VERIFICATION;
	           	 }
            }
        });
	}
	/**
	 * 短信发送按钮倒计时
	 */
	ns.countdown=60; 
	ns.settime =function(button) { 
		button = $(button);
		if (ns.countdown == 0) { 
			button.removeClass("disabled");    
			$('#index-login-span-sms').html('发送短信'); 
			ns.countdown = 60; 
			return;
		} else { 
			button.addClass("disabled");
			$('#index-login-span-sms').html('重新发送(' + ns.countdown + ')'); 
			ns.countdown--; 
			
			setTimeout(function() { 
				ns.settime(button) 
			},1000) 
		} 
	} 
	
	/**
	 * 安全加固登录
	 */
	ns.login = function(data){
		
		var name = $('#index-login-form-name').val();
		var pwd = $('#index-login-form-pwd').val();
		var rand = $('#index-login-form-rand').val();
		var pr_sqm = $('#pr_sqm_id').val();	//ns.form.find("input[name='pr_sqm']").val();
		var pr_digest = $('#pr_digest_id').val();	//ns.form.find("input[name='pr_digest']").val();
		var pr_aqm = "";	//ns.form.find("input[name='pr_aqm']").val();
		
		//alert(pr_sqm+"------"+pr_digest)
		
		$.ajax({
            type: "POST",
            url:pr.login.URL_PR_LOGIN,
            data:{
            	name:name,
            	pwd:pwd,
            	rand:rand,
            	pr_sqm:pr_sqm,
            	pr_digest:pr_digest,
            	pr_aqm:pr_aqm
        	},
            async: false,
            error: function(data) {
            	 
            },
            success: function(data) {
	           	 if(data.success){
	           		window.top.location=pr.login.URL_INDEX;
	           	 }else{
	           		 alert(data.msg);
//	           		$('#loginError').empty();
//					$('#loginError').append('登陆失败!');
//					$('#loginMsg').empty();
//					$('#loginMsg').append(data.msg);
//					$('#showMsg').show();
					
					document.getElementById('img').src=pr.login.URL_VERIFICATION;
	           	 }
            }
        });
	}
	
	
	
	/**
	 * U盾验证
	 */
	ns.validateKey = function(security_code) {
		var nt_key = '';
		var validate = validateNT();
		if(validate){
			nt_key = NT199_GetHardwareId();
			//ns.form.find("input[name='pr_sqm']").val(nt_key);
			$('#pr_sqm_id').val(nt_key);
			//进行客户端摘要的计算，randomMessageFromServer为随机数，可随机长度
			var digest_client = NT199_Sha1WithSeed(security_code);
			if (digest_client != "") {
				//ns.form.find("input[name='pr_digest']").val(digest_client);
				$('#pr_digest_id').val(digest_client);
			} else {
				alert("NT199计算摘要失败，错误码：" + NT199_GetLastError());
				return false;
			}
			return true;
		}else{
			return false;
		}
		
		
	}
	
	
});