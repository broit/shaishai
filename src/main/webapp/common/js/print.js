/**
 * 打印
 */
$(document).ready(function() {
	var ns = app.ship;
	ns.table_print = $('#print-table');
	
	//var searchParams = JSON.parse(jjj);

	var ORDER_DATA_PRINT = [];			//待打印订单
	var ORDER_DATA_COUNT_PRINT = 0;		//待打印订单数量
	var CONTINUE_PRINT = true;			//是否继续打印
	var STOP_PRINT = false;				//是否停止打印
	var ORDER_INDEX_PRINT = 0;			//当前打印订单序号
	//打印确认
	ns.confirmPrint = function() {
		ORDER_DATA_PRINT = [];
		ORDER_DATA_COUNT_PRINT = 0;
		CONTINUE_PRINT = true;
		STOP_PRINT = false;
		ORDER_INDEX_PRINT = 0;
		
		$('#button_print_start').removeClass("disabled");
		$('#button_print_pause').addClass("disabled");
		$('#button_print_stop').addClass("disabled");
		
		$('#label_printinfo_print').html('');
		
		ns.table_print.find('tbody').empty();
		ns.table_print.find('tbody').html('');
		
		$.ajax({
			url : URL_ORDERLIST_PRINT,
			data : jjj,
			type : 'POST',
			success : function(data) {
				var rows = data.rows;
				var total = data.count;
				
				ORDER_DATA_PRINT = eval(rows);
				ORDER_DATA_COUNT_PRINT = total;
				
				
				$('#label_printinfo_print').html("待打印订单数量："+total);
				
//				var confirm_content = "待打印订单数量："+total+"，确认打印？";
//				if(window.confirm(confirm_content)){
//					ORDER_DATA_PRINT = eval(rows);
//					ORDER_DATA_COUNT_PRINT = total;
//					
//					$('#label_printinfo_print').html("待打印订单数量："+total);
//					$('#print-modal-dialog').modal({
//						backdrop : 'static',
//						keyboard : false
//					});
//					$('#print-modal-dialog').modal('show');
//    			}
			}
		});
	};
	
	
	
	//从待打印订单列表获取下一订单
	ns.getOrder = function() {
		//alert(ORDER_INDEX_PRINT+"|"+ORDER_DATA_COUNT_PRINT+"|"+ORDER_DATA_PRINT[ORDER_INDEX_PRINT]+"|"+ORDER_DATA_PRINT[ORDER_INDEX_PRINT].id);
		var order = null;
		if(ORDER_INDEX_PRINT<ORDER_DATA_COUNT_PRINT)
			order = ORDER_DATA_PRINT[ORDER_INDEX_PRINT];
		return order;
	}
	//开始打印
	ns.beginPrint  = function() {
		CONTINUE_PRINT = true;
		
		$('#button_print_start').addClass("disabled");
		$('#button_print_pause').removeClass("disabled");
		$('#button_print_stop').removeClass("disabled");
		
		ns.printOrders();
	}
	
	//暂停打印
	ns.pausePrint  = function() {
		CONTINUE_PRINT = false;
		
		$('#button_print_pause').addClass("disabled");
		$('#button_print_start').removeClass("disabled");
	}
	
	//停止打印
	ns.stopPrint  = function() {
		STOP_PRINT = true;
		
		$('#button_print_pause').addClass("disabled");
		$('#button_print_start').addClass("disabled");
		$('#button_print_stop').addClass("disabled");
	}
	
	//重复打印
	ns.num_add = function(){
		var num = $('#repPrint_num').val();
		num= num/1+1;
		$('#repPrint_num').val(num);
	}
	ns.num_sub = function(){
		var num = $('#repPrint_num').val();
		num= num/1-1;
		$('#repPrint_num').val(num);
	}
	ns.repPrint = function(){
		var num = $('#repPrint_num').val();
		for(var nn=0;nn<num;nn++){
			ns.print();
		}
	}
	
	//关闭窗口
	ns.closeWindow  = function() {
		ns.stopPrint();
		$('#print-modal-dialog').modal('hide');
	}
	
	//打印订单
	ns.printOrders  = function() {
		//alert(STOP_PRINT+"|"+CONTINUE_PRINT+"|"+ORDER_INDEX_PRINT+"|"+ORDER_DATA_COUNT_PRINT);
		if(STOP_PRINT){
			return;
		}
		if(CONTINUE_PRINT){
			if(ORDER_INDEX_PRINT<ORDER_DATA_COUNT_PRINT){
				var order = ns.getOrder();
				var oid = order.id;
		
				var message = "待打印订单队列共有订单："+ORDER_DATA_COUNT_PRINT+" 条，已打印："+ORDER_INDEX_PRINT+"条！";
				$('#label_printinfo_print').html(message);
				setTimeout("app.ship.printProducts('"+oid+"')",3000);
			}
			else{
				$('#button_print_start').addClass("disabled");
				$('#button_print_pause').addClass("disabled");
				
				var message = "全部订单打印完成！！";
				//globle.MESSAGE(message);
				
				alert(message)
				$('#label_printinfo_print').html(message);
			}
		}
		else{
			setTimeout("eval(1);",1000);
		}
	}
	
	//打印产品
	ns.printProducts = function(oid) {
		//console.log(URL_PRODUCTLIST_PRINT);
		$.ajax({
			url : URL_PRODUCTLIST_PRINT,
			data : {
				id:oid//,
				//index:ORDER_INDEX_PRINT
			},
			type : 'GET',
			success : function(data) {
				//alert("=========================="+data);
//				console.log(1)
//				console.log(data)
				ns.genarateTable(data);
				ns.print();
				
				//继续下一次打印
				ORDER_INDEX_PRINT++;
				ns.printOrders();
			}
		});
	}
	ns.printProducts_once = function(oid) {
		$.ajax({
			url : URL_PRODUCTLIST_PRINT,			//app.ship.URL_PRODUCTLIST_PRINT,
			data : {
				id:oid
			},
			type : 'GET',
			success : function(data) {
				
				ns.genarateTable(data);
				ns.print();
				//window.close();
			}
		});
	}
	
	//生成表格数据
	ns.genarateTable = function(products) {
		//console.log(products);
		//console.log(products.length)
		//console.log(products[0].id)
		ns.table_print.find('tbody').empty();
		ns.table_print.find('tbody').html('');
		
		$('#printDate_print').html("打印日期："+new Date().FormatSimple(true));
		//产品行模板
		var TEMPLATE_TR_PRODUCT = "<tr>"
			+"	<td align='center'>${index}</td>"					//排序			ono
			+"	<td  colspan='4'>${pname}</td>"									//产品名称		gdsName
			//+"	<td>${skuname}</td>"								//sku名称	sku_name
			+"	<td align='center'>${pcode}</td>"					//产品编号		gno
			//+"	<td align='center'>${standard}</td>"				//规格			skuname
			+"	<td align='center'>${prtcount}</td>"				//数量			goods_num
			+"	<td align='center'>&nbsp;</td>"			
			//+"	<td align='center'>${prtprice}</td>"				//单价			typePrice
			//+"	<td align='center'>${prttotal}</td>"				//总价			subtotal
			+"</tr>";
		//合计行模板
		var TEMPLATE_TR_TOTAL = "<tr>"
			+"	<td colspan='8'><b>合计：${total}</b></td>"
			+"</tr>";
		//地址行模板
		var TEMPLATE_TR_ADDRESS = "<tr>"
			+"	<td colspan='8'><b>收货地址：${fulladdress}</b></td>"
			+"</tr>";
		//联系人行模板
		var TEMPLATE_TR_RECEIVER = "<tr>"
			+"	<td colspan='8'><b>联系人：${receiver}</b></td>"
			+"</tr>";
		//留言行模板
		var TEMPLATE_TR_REMARK = "<tr>"
			+"	<td colspan='5'><b>留言：${oremark}</b></td>"
			+"	<td colspan='3'><b>下单日期：${downDate}</b></td>"
			+"</tr>";
		
		var ono = '';
		var prtcount_order = 0;
		var prtprice_order = 0;
		var all_report = 0;
		var all_buy = 0;
		
		for(var i=0;i<products.length;i++){
			var product = products[i];
			ono = product.ono==null?'':product.ono;
			var pname = product.gdsName==null?'':product.gdsName;			//公司
			
			var tttt = product.type=='1'?'惠':'兑';
			pname = "【"+tttt+"】"+pname+"["+product.skuName+"]";
			var pcode = product.gno==null?'':product.gno;
			var prtcount = product.goodsNum==null?'0':product.goodsNum;
			var standard = product.skuname==null?'':product.skuname;
			var prtprice = product.typePrice==null?'0':product.typePrice;
			var real_report = product.realReport==null?'0':product.realReport;
			var real_buy = product.realPrice==null?'0':product.realPrice;
			var premark = product.PREMARK==null?'':product.PREMARK;
			var oremark = product.oremark==null?'':product.oremark;
			var fulladdress = product.fulladdress==null?'':product.fulladdress;
			var receiver = product.takename==null?'':product.takename;
			var mobile = product.takemobile==null?'':product.takemobile;
			var odate = product.odate==null?'':product.odate;
			
			if(Number(prtcount)){
			//小计
				prtcount_order = prtcount_order + Number(prtcount);
				prttotal = Number(prtcount) * Number(prtprice);
				prtprice_order = prtprice_order + prttotal;
				
				all_report = Number(all_report)+Number(real_report);
				all_buy = Number(all_buy)+Number(real_buy);
				
				var receiver = receiver+"，电话："+mobile;
				
				var product_tr = TEMPLATE_TR_PRODUCT;
				product_tr = ReplaceAll(product_tr,'${index}',i+1);
				product_tr = ReplaceAll(product_tr,'${pname}',pname);
				product_tr = ReplaceAll(product_tr,'${pcode}',pcode);
				product_tr = ReplaceAll(product_tr,'${standard}',standard);
				product_tr = ReplaceAll(product_tr,'${prtcount}',prtcount);
				product_tr = ReplaceAll(product_tr,'${prtprice}',real_report);		//prtprice);
				product_tr = ReplaceAll(product_tr,'${prttotal}',real_buy);			//prttotal);
				
				ns.table_print.append(product_tr);
			}	
				
			if(i == products.length-1){
				var total = "共："+prtcount_order+" 件";		//+"，共："+all_report+" 兑换券，共："+all_buy+" 购物币";
				var total_tr = TEMPLATE_TR_TOTAL;
				total_tr = ReplaceAll(total_tr,'${total}',total);
				ns.table_print.append(total_tr);
				
				var address_tr = TEMPLATE_TR_ADDRESS;
				address_tr = ReplaceAll(address_tr,'${fulladdress}',fulladdress);
				ns.table_print.append(address_tr);
				
				var receiver_tr = TEMPLATE_TR_RECEIVER;
				receiver_tr = ReplaceAll(receiver_tr,'${receiver}',receiver);
				ns.table_print.append(receiver_tr);
				
				var remark_tr = TEMPLATE_TR_REMARK;
				remark_tr = ReplaceAll(remark_tr,'${oremark}',oremark);
				remark_tr = ReplaceAll(remark_tr,'${downDate}',odate);
				ns.table_print.append(remark_tr);
				
			}
			
		}
		$('#ono_print').html("客户交易号："+ono);
		
		
//		LODOP=getLodop(document.getElementById('LODOP1'),document.getElementById('LODOP_EM1')); 	    	
//		LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_内嵌显示演示11");
//		LODOP.ADD_PRINT_BARCODE(0,0,200,150,"128A",ono);
		
		
		ns.ono = ono;
		
//		LODOP.ADD_PRINT_BARCODE(10,20,200,50,"Code39",ns.ono);
//		LODOP.SHOW_CHART();
		
	}
	
	//打印
	ns.print = function() {
		LODOP.PRINT_INIT("");
		LODOP.SET_PRINT_PAGESIZE(1,2410,1400,"241-3");
		LODOP.ADD_PRINT_TABLE(10,10,"80%","100%",document.getElementById("div_print").innerHTML);
		LODOP.SET_PRINT_STYLEA(0,"LinkedItem",-1);
		
		
		//LODOP.ADD_PRINT_BARCODE(10,20,250,50,"128Auto",ns.ono);
		//LODOP.SHOW_CHART();

		
		LODOP.PRINT();			
	}
	//预览
	ns.preview = function() {
		LODOP.PRINT_INIT("");
		LODOP.SET_PRINT_PAGESIZE(1,2410,1400,"241-3");
		LODOP.ADD_PRINT_TABLE(10,10,"80%","100%",document.getElementById("div_print").innerHTML);
		LODOP.SET_PRINT_STYLEA(0,"LinkedItem",-1);
		
		LODOP.ADD_PRINT_BARCODE(10,20,250,50,"128Auto",ns.ono);
//		LODOP.SET_PRINT_STYLEA(0,"Horient",2);//设置对象在纸张范围内水平居中,
//		LODOP.SET_PRINT_STYLEA(0,"Vorient",2);//设置对象在纸张范围内垂直居中,
		LODOP.PREVIEW();				
	}
	
	
	
	if(jjj!=null&&jjj!=''&&jjj!='null'){
		ns.confirmPrint();
	}
	if(oid!=null&&oid!=''&&oid!='null'){
		ns.printProducts_once(oid)
	}
});

//打印初始化
var LODOP;
$(window).load(function(){
	LODOP=getLodop(document.getElementById('LODOP_OB'),document.getElementById('LODOP_EM'));
});