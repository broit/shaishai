<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="util" tagdir="/WEB-INF/tags" %>   
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			//+ path 
			+ "/";
	request.setAttribute("basePath", basePath);
	
	String jjj = request.getParameter("jjj");
	String oid = request.getParameter("oid");
%>
<!DOCTYPE html>
<html>
<head>
	
	
	<script type="text/javascript">
		var URL_ORDERLIST_PRINT = 	'<%= basePath %>shop/tradOrder/orderlist_print.action';
		var URL_PRODUCTLIST_PRINT = '<%= basePath %>shop/tradOrder/loadOrderGoodsList_by_orderId.action';
		var jjj = <%= jjj %>;
		var oid = "<%= oid %>";
		
		
	</script>
	<!-- Javascript -->
    <script src="<%= basePath %>assets/js/jquery-1.8.2.min.js"></script>
   	<%--
    <script src="<%= basePath %>assets/js/supersized.3.2.7.min.js"></script>
    <script src="<%= basePath %>assets/js/supersized-init.js"></script>
    <script src="<%= basePath %>assets/js/scripts.js"></script>
    --%>
    <script src="<%= basePath %>common/js/jquery.namespace.js"></script>
	
	
	<style type="text/css">
		/** bootstrap 修改原样式 **/
		.form-group {
		    margin-bottom: 18px;
		}
		.searchField{
			display: inline-block;
		}
	</style>
	<!-- 打印组件 -->
	<script language="javascript" src="<%= basePath %>common/LodopFuncs.js"></script>
	<object  id="LODOP_OB" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=0 height=0> 
		<embed id="LODOP_EM"  type="application/x-print-lodop" width=0 height=0 pluginspage="install_lodop32.exe"></embed>
	</object>



		
		
</head>
<body class="no-skin" style="background-color:white;margin:0px;padding:0px;">
	<!-- 打印窗口 -->
	<div id="print-modal-dialog" class="modal fade">
		<div class="modal-dialog" style="width: auto;margin-left:80px;margin-right:80px;" tabindex="-1">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="blue bigger">订单送货清单打印</h4>
			</div>
				<div class="modal-body">
					<div class="row">
						<div id="div_print">
							<style>table,th{border:none;height:18px} td{border: 1px solid #000;height:18px}</style>
							<table id="print-table" border="0" cellspacing="0" cellpadding="0"  width="100%" bordercolor="#000000" style="border-collapse:collapse">
								<caption><b><font face="黑体" size="4">宏旺宜家送货清单（第____箱 共____箱）<br></font></b><br/><br/></caption>
								<thead>
								  <tr>
								    <th colspan="4" id="ono_print" align="left">客户交易号：</th>
								    <th colspan="4" align="right">全国统一电话:4008003708</th>
								  </tr>
								  <tr>
								    <td width="5%" align="center"><b>NO</b></td>
								    <td width="55%" align="center" colspan="4"><b>产品</b></td>
								    <td width="20%" align="center"><b>编号</b></td>
								    <td width="10%" align="center"><b>数量</b></td>
								    <td width="10%" align="center"><b>所在箱</b></td>
								    <%-- <td width="10%" align="center"><b>花费兑换币</b></td>
								    <td width="10%" align="center"><b>花费购物币</b></td>--%>
								  </tr>
								</thead>
								<tbody>
								</tbody>
								<tfoot>
								  <tr>
								    <th width="30%" colspan="2" align="left"><b>仓管：</b></th>
								    <th width="30%" colspan="2" align="left"><b>检验员：</b></th>
								    <th width="30%" colspan="3" align="right"><b id="printDate_print"></b></th>
								  </tr>
								  <tr>
								  <th>
								  	<table id='table001'></table>
									<!--  <object id="LODOP1" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width=200 height=150> 
									  <param name="Caption" value="显示区">
									  <param name="Border" value="0">
									  <param name="Color" value="white"> 
									  <embed id="LODOP_EM1" TYPE="application/x-print-lodop" width=200 height=150 border=0 Color="white" PLUGINSPAGE="install_lodop.exe">
									</object> 
									-->
									</th>
								</tr>
								</tfoot>
								
							</table>
							
						</div>
						
					</div>
					<div class="space-4"></div>
					<div class="row">
						<font style="color: red;">
							<label id="label_printinfo_print"></label>
						</font>
					</div>
					<div class="row">
						<button id="button_print_start" type="button" class="btn btn-sm btn-white btn-primary btn-round" onclick="app.ship.beginPrint();">
							开始打印
							<i class="ace-icon fa fa-play icon-on-right"></i>
						</button>
						<button id="button_print_pause" type="button" class="btn btn-sm btn-white btn-primary btn-round" onclick="app.ship.pausePrint();">
							暂停
							<i class="ace-icon fa fa-pause icon-on-right"></i>
						</button>
						<button id="button_print_stop" type="button" class="btn btn-sm btn-white btn-primary btn-round" onclick="app.ship.stopPrint();">
							停止
							<i class="ace-icon fa fa-stop icon-on-right"></i>
						</button>
					 
					 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					 
						<button id="button_print_stop" type="button" class="btn btn-sm btn-white btn-primary btn-round" onclick="app.ship.repPrint();">
							再次打印
							<i class="ace-icon fa fa-stop icon-on-right"></i>
						</button>
						<input id="repPrint_num" value="1" style="width: 25px">
						<button type="button"  onclick="app.ship.num_add();">加	</button>
						<button type="button"  onclick="app.ship.num_sub();">减	</button>
					</div>
					
				</div>
				<div class="modal-footer">
				<button class="btn btn-sm" onclick="app.ship.preview();">
					打印预览
				</button>
				<button class="btn btn-sm" onclick="app.ship.closeWindow();">
					<i class="ace-icon fa fa-times"></i>
					关闭
				</button>
				
			</div>
		</div>
		</div>
	</div>
	<!-- 打印窗口 -->
				
</body>
<%-- 
<!--[if !IE]> -->
<script type="text/javascript">
	window.jQuery || document.write("<script src='${pageContext.request.contextPath}/broit/ace/assets/js/jquery-2.1.3.js'>"+"<"+"/script>");
</script>
<!-- <![endif]-->
<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='${pageContext.request.contextPath}/broit/ace/assets/js/jquery1x.min.js'>"+"<"+"/script>");
</script>
<![endif]-->
<script type="text/javascript">
	if('ontouchstart' in document.documentElement) document.write("<script src='${pageContext.request.contextPath}/broit/ace/assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
</script>
<script src="${pageContext.request.contextPath}/broit/ace/assets/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/broit/ace/plugin/jquery.namespace.js"></script>

<!-- page specific plugin scripts -->
<script src="${pageContext.request.contextPath}/broit/ace/assets/js/bootbox.min.js"></script>
<script src="${pageContext.request.contextPath}/broit/ace/assets/js/jquery.gritter.min.js"></script>
<script src="${pageContext.request.contextPath}/broit/ace/assets/js/jquery.validate.min.js"></script>
<!-- ace scripts -->
<script src="${pageContext.request.contextPath}/broit/ace/assets/js/ace-elements.min.js"></script>
<script src="${pageContext.request.contextPath}/broit/ace/assets/js/ace.min.js"></script>
--%>
<!-- 自添加 -->
<script type="text/javascript">
	//声明每个模块唯一的命名空间
	$.namespace('app.ship');
	
	/*
	app.ship.URL_ORDER_LIST = '${pageContext.request.contextPath}/service/ec/manage/order/orderlist';
	app.ship.URL_PRODUCT_LIST = "${pageContext.request.contextPath}/service/ec/manage/order/productlist";
	app.ship.URL_SUPPLYER_LIST = "${pageContext.request.contextPath}/service/ec/manage/supplyer/listself";
	app.ship.URL_WAREHOUSE_LIST = "${pageContext.request.contextPath}/service/sys/ec/warehouse/listall";
	app.ship.URL_SAVE = "${pageContext.request.contextPath}/service/ec/manage/order/save";
	app.ship.URL_PREPARE = "${pageContext.request.contextPath}/service/ec/manage/order/prepare";
	app.ship.URL_CANCEL = "${pageContext.request.contextPath}/service/ec/manage/order/cancel";
	
	app.ship.URL_GENARATEREPORT = "${pageContext.request.contextPath}/service/ec/manage/order/genarateReport";
	app.ship.URL_DOWNLOADREPORT = '${pageContext.request.contextPath}/service/ec/manage/order/downloadReport';
	
	app.ship.URL_ORDERLIST_PRINT = "${pageContext.request.contextPath}/service/ec/manage/order/orderlist_print";
	app.ship.URL_PRODUCTLIST_PRINT = '${pageContext.request.contextPath}/service/ec/manage/order/productlist_print';
	
	app.ship.URL_LOADPRINTTEMPLATE = '${pageContext.request.contextPath}/service/sys/djsj/loadByLb/';
	app.ship.URL_ORDER_DETAIL = '${pageContext.request.contextPath}/service/ec/order/';
	*/
	app.ship.BASEPATH = "${basePath}";
</script>
<%-- 
<script src="${pageContext.request.contextPath}/broit/easyui/jquery.easyui.min.js"></script>
<script src="${pageContext.request.contextPath}/broit/easyui/datagrid-detailview.js"></script>
<script src="${pageContext.request.contextPath}/broit/easyui/locale/easyui-lang-zh_CN.js"></script>
<script src="${pageContext.request.contextPath}/broit/ace/plugin/jquery.serializeObject.js"></script>
<script src="${pageContext.request.contextPath}/broit/ace/plugin/jquery.json-2.4.js"></script>
<script src="${pageContext.request.contextPath}/ec/manage/order/orderlist.js"></script>
<script src="${pageContext.request.contextPath}/ec/manage/ship/print_express.js"></script>
--%>

<script src="<%= basePath %>common/js/common.js"></script>
<script src="<%= basePath %>common/js/dateUtil.js"></script>
<script src="<%= basePath %>common/js/print.js?v=1.1"></script>
<script>



</script>
</html>