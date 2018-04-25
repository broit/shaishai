
<%@page import="org.springframework.web.context.request.SessionScope"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"  isELIgnored="false" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			//+ path 
			+ "/";
%>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <base href="<%= basePath %>">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="assets/css/font-awesome.min.css">
    <title>面向多商户多仓库的分布式云商城后台</title>
    <style>
        .loadingDiv {
            margin: auto auto;
            width: 120px;
            height: 60px;
            text-align: center;
            font-size: 10px;
        }

        .loadingDiv > div {
            background-color: #67CF22;
            height: 100%;
            width: 6px;
            display: inline-block;

            -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
            animation: stretchdelay 1.2s infinite ease-in-out;
        }

        .loadingDiv .rect2 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }

        .loadingDiv .rect3 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }

        .loadingDiv .rect4 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }

        .loadingDiv .rect5 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }

        .loadingDiv .rect6 {
            -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s;
        }
        .loadingDiv .rect7 {
            -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
        }
        .loadingDiv .rect8 {
            -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
        }

        @-webkit-keyframes stretchdelay {
            0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
            20% { -webkit-transform: scaleY(1.0) }
        }

        @keyframes stretchdelay {
            0%, 40%, 100% {
                transform: scaleY(0.4);
                -webkit-transform: scaleY(0.4);
            }  20% {
                   transform: scaleY(1.0);
                   -webkit-transform: scaleY(1.0);
               }
        }
    </style>
    <%--<script src="<%= basePath %>ext/ext-all-debug.js"></script>--%>
    <%--<script src="<%= basePath %>ext/locale/locale-zh_CN.js"></script>--%>
    <script type="text/javascript">
    	var IMG_URL = "http://img.bmcsc.cn/";		//"http://127.0.0.1/";
    	var ROOT_URL = "<%= basePath %>";



        var Ext = Ext || {}; // Ext namespace won't be defined yet...

        //Ext.Ajax.disableCaching = false;
        <%----%>
        Ext.auth = ${auth};
        Ext.author = Ext.auth.operMap;

        Ext.sysparam = ${sysparam};

        Ext.userlevel = ${userlevel};

        Ext.uname = '${uname}';

        Ext.uid = '${uid}';

        Ext.mallId = '${mallId}';

        Ext.storeId = '${storeId}';

        Ext.mallId_HW = '377AE5020AD07B8AE055000000000001';
        Ext.storeId_HW='39B2E6578C5912ACE0530100007F3EEC';

        Ext.atype = '${atype}';

//        var host=(window.location.protocol == 'http:') ? 'ws://' : 'wss://' ;
//        host += window.location.host + '/messageWebsocket/'+Ext.uid;
//
//        var webSocket =
//            new WebSocket(host);
//
//        webSocket.onerror = function(event) {
//            onError(event);
//        };
//
//        webSocket.onopen = function(event) {
//            onOpen(event);
//        };
//
//        webSocket.onmessage = function(event) {
//            onMessage(event);
//        };
//
//        function onOpen(event) {
//            var task = {
//                run: function () {
//                    Ext.Ajax.request({
//                        url: '/frameWork.action',
//                        method: 'POST'
//                    });
//                },
//                interval: 3600000
//            }
//            var runner = new Ext.util.TaskRunner();
//            runner.start(task);
//        };
        /*Ext.Loader.setConfig({
            enabled:true,  
            disableCaching: false,
            paths:{  
                'Ext.ux':'<%= basePath %>ext/ux',
                'Ext.chart':'<%= basePath %>ext/chart',
                'Ext.draw':'<%= basePath %>ext/draw'
            }  
        });*/
        
        
        // Ext.Ajax.on('requestcomplete',checkSessionStatus, this);
		// function checkSessionStatus(conn,response,options){
	    	// var json = Ext.decode(response.responseText);
	    	// if(typeof json == 'object'
		// 		&& !json.success
		// 		&& json.timeout){
		// 		alert("登录超时（或用户没有此操作权限）,系统将自动跳转到登陆页面,请重新登录!");
		// 		top.window.location.href = json.redirectUri;
		// 	}
		//
		// }

        Ext.beforeLoad = function (tags) {
            var s = location.search,  // the query string (ex "?foo=1&bar")
                profile;

            // For testing look for "?classic" or "?modern" in the URL to override
            // device detection default.
            //
            if (s.match(/\bclassic\b/)) {
                profile = 'classic';
            }
            else if (s.match(/\bmodern\b/)) {
                profile = 'modern';
            }
            else {
                profile = tags.desktop ? 'classic' : 'modern';
            }
            locale = location.href.match(/locale=([\w-]+)/);
            locale = (locale && locale[1]) || 'zh_CN';
            Ext.manifest = 'classic-'+locale;
        };


    </script>

    <!-- The line below must be kept intact for Sencha Cmd to build your application -->
    <%--<script src="<%= basePath %>app/app.js"></script>--%>
    <script id="microloader" data-app="cadada9c-6930-46a6-a5ca-209c30d00af4" type="text/javascript" src="bootstrap.js"></script>
</head>
<div id="loading" class="loadingDiv">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
    <div class="rect6"></div>
    <div class="rect7"></div>
    <div class="rect8"></div>
    <p>正在载入....</p>
</div>
<body>
<script type="text/javascript" charset="utf-8" src="<%= basePath %>ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="<%= basePath %>ueditor/ueditor.all.min.js"> </script>
<!--  -->
<script language="javascript" src="<%= basePath %>common/LodopFuncs.js"></script>
<%--<link rel="stylesheet" type="text/css" href="<%= basePath %>app/resources/style.css" />--%>

</body>
</html>
