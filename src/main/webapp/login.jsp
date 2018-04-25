<%@page import="com.wwtx.bean.LoginUserBean"%>
<%@ page language="java" import="java.util.*,org.apache.commons.lang.StringUtils" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			//+ path 
			+ "/";
	String msg = (String)request.getAttribute("msg");

%>
<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <meta charset="utf-8">
        <title>面向多商户多仓库的分布式云商城系统</title>

        <!-- CSS -->
        <link rel="stylesheet" href="<%= basePath %>assets/css/reset.css">
        <link rel="stylesheet" href="<%= basePath %>assets/css/supersized.css">
        <link rel="stylesheet" href="<%= basePath %>assets/css/style.css">
	
		
		
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

    </head>

    <body onload="loadNT();">

        <div class="page-container">
            <h1>商城登录</h1>
            <form action="#" method="post" onsubmit="return false;" >
            	<input id="pr_sqm_id" name="pr_sqm" type="hidden" value="">
				<input id="pr_digest_id" name="pr_digest" type="hidden" value="">
				
                <input type="text" id="index-login-form-name" name="name" id="pr_name" class="username"  value="" placeholder="用户名">
                <input type="password" id="index-login-form-pwd" name="pwd" id="pr_pwd" class="password" value="" placeholder="密码">
                
					<input type="text" id="index-login-form-rand" name="rand" id="pr_rand" placeholder="验证码" value="" style="width: 100px;" />
					&nbsp;
					<a href="#" onclick="document.getElementById('img').src='<%= basePath %>verification/image.action?c'+Math.random();">
						<img src="<%= basePath %>verification/image.action" border=1px id="img"  style="position:absolute; padding-top:  26px"/>
				 	</a>
												
					<button type="button"  onclick="pr.login.checklogin();">验证</button>							
                	<%-- <button type="button"  onclick="login_sub(this.form);">提交</button> --%>
               
                
                <div class="error"><span id="error_msg">+</span></div>
            </form>
            <div class="connect">
            	<%--
                <p>Or connect with:</p>
                <p>
                    <a class="facebook" href=""></a>
                    <a class="twitter" href=""></a>
                </p>
                 --%>
            </div>
        </div>
		
        <!-- Javascript -->
        <script src="<%= basePath %>assets/js/jquery-1.8.2.min.js"></script>
        <script src="<%= basePath %>assets/js/supersized.3.2.7.min.js"></script>
        <script src="<%= basePath %>assets/js/supersized-init.js"></script>
        <script src="<%= basePath %>assets/js/scripts.js"></script>
        
        <script src="<%= basePath %>common/js/jquery.namespace.js"></script>


<script type="text/javascript">
var language = '${sessionScope.language}';

<%
if(msg!=null){
	out.println("alert('"+msg+"')");
}
%>


$(document).ready(function(){
	
	//$.post('<%= basePath %>menu/getNowDate.action',function(data){
	//	$('#user-login-time').html(data.time);
	//});
	
	document.onkeydown = function(e){
        var ev = document.all ? window.event : e;//判断浏览器类型
        if(ev.keyCode==13) {
        	login();
        }
    };
});

function login_sub(obj){
	var name = $('#index-login-form-name').val();
	var pwd = $('#index-login-form-pwd').val();
	var rand = $('#index-login-form-rand').val();
	
	
	if(name==''||pwd==''||rand==''){
		alert('请填写登录信息');
		//$('#error_msg').val('请填写登录信息');
		return;
	}
	
	obj.submit();
}

function login(){
	pr.login.checklogin();
	//return false;
	//var name = $('#index-login-form-name').val();
	//var pwd = $('#index-login-form-pwd').val();
	//var rand = $('#index-login-form-rand').val();
	
	
	//if(name==''||pwd==''||rand==''){
	//	alert('请填写登录信息1');
	//	//$('#error_msg').val('请填写登录信息');
	//	return;
	//}
	
	//window.location="<%= basePath %>/toMain.action?name="+name+"&pwd="+pwd+"&rand="+rand;
	
}


$.namespace('pr.login');

pr.login.URL_INDEX = '<%= basePath %>toMain.action';
pr.login.URL_VERIFICATION = '<%= basePath %>verification/image.action?c'+Math.random();

pr.login.URL_PR_CHECKLOGIN = '<%= basePath %>pr_checklogin_user.action';
pr.login.URL_PR_LOGIN = '<%= basePath %>login.action';
pr.login.URL_PR_SENDSMS_LOGIN = '<%= basePath %>service/pr/sendsms_login?isAdmin=true';


</script>


	<script src="<%= basePath %>common/pr.js"></script>
	<script src="<%= basePath %>common/js/nt/NTClientJavascript.js"></script>
	<script src="<%= basePath %>common/js/nt/NTFunc.js"></script>
	<script src="<%= basePath %>common/user_pr.js" type="text/javascript" ></script>

	
	
    </body>

</html>


