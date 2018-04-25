$(document).ready(function() {
	//模块名称空间
	$.namespace('globle');
	$.namespace('globle.select');
	$.namespace('Digit');
	
	globle.ROWNUM= 1;
	globle.LOGIC_YES = '1';
	globle.LOGIC_NO = '0';
	
	globle.ERROR = function(msg)
	{
		$.gritter.add({
			title: '错误信息',
			text: msg,
			sticky: false,
		    time: '2000',
			class_name: 'gritter-error gritter-light gritter-center' 
		});
	};
	globle.MESSAGE = function(msg)
	{
	    var isIE6 = false;
    	if ('undefined' == typeof(document.body.style.maxHeight))
        	isIE6 = true;
	    
	    if(isIE6)
	    	alert(msg);
	    else
	    {
	    	$.gritter.add({
				title: '操作提示',
				text: msg,
				sticky: false,
			    time: '2000',
				class_name: 'gritter-light gritter-center' 
			});
	    	//$.messager.alert("操作提示", msg,"info");
	    }
	};
	globle.fixWidth = function (percent)  
	{  
	    return document.body.clientWidth * percent ; //这里你可以自己做调整  
	};
	globle.fixWidth = function (excludeWidth,percent)  
	{  
		return (document.body.clientWidth - excludeWidth)  * percent ; //这里你可以自己做调整  
	};
	$.fn.serializeObject = function()
	{
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
	};
	//datetim格式验证--yyyy-mm-dd
	if($.fn.datebox)
	{
		$.extend($.fn.datebox.defaults.rules, {
		    date: {
		        validator: function (value) {
		            //格式yyyy-MM-dd或yyyy-M-d
		            return /^(?:(?!0000)[0-9]{4}([-]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-]?)0?2\2(?:29))$/i.test(value);
		        },
		        message: '请输入正确的日期格式'
		    }
		});
	}
	function isPhone(aPhone) {
        var bValidate = RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/).test(aPhone);
        if (bValidate) {
            return true;
        }
        else
            return false;
    }

	$.extend($.fn.datebox.defaults.rules, {
		mobile: {
	        validator: function (value) {
	            return isPhone(value);
	        },
	        message: '请输入正确的手机号码 '
	    }
	});
	/** 
	 * 将数值四舍五入(保留2位小数)后格式化成金额形式 
	 * 
	 * @param num 数值(Number或者String) 
	 * @return 金额格式的字符串,如'1,234,567.45' 
	 * @type String 
	 */  
	Digit.formatCurrency = function(num) {  
	    num = num.toString().replace(/\$|\,/g,'');  
	    if(isNaN(num))  
	        num = "0";  
	    sign = (num == (num = Math.abs(num)));  
	    num = Math.floor(num*100+0.50000000001);  
	    cents = num%100;  
	    num = Math.floor(num/100).toString();  
	    if(cents<10)  
	    cents = "0" + cents;  
	    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)  
	    num = num.substring(0,num.length-(4*i+3))+','+  
	    num.substring(num.length-(4*i+3));  
	    return (((sign)?'':'-') + num + '.' + cents);  
	};
	   
	/** 
	 * 将数值四舍五入(保留1位小数)后格式化成金额形式 
	 * 
	 * @param num 数值(Number或者String) 
	 * @return 金额格式的字符串,如'1,234,567.4' 
	 * @type String 
	 */  
	Digit.formatCurrencyTenThou = function(num) {  
	    num = num.toString().replace(/\$|\,/g,'');  
	    if(isNaN(num))  
	    num = "0";  
	    sign = (num == (num = Math.abs(num)));  
	    num = Math.floor(num*10+0.50000000001);  
	    cents = num%10;  
	    num = Math.floor(num/10).toString();  
	    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)  
	    num = num.substring(0,num.length-(4*i+3))+','+  
	    num.substring(num.length-(4*i+3));  
	    return (((sign)?'':'-') + num + '.' + cents);  
	};
	
	Digit.round = function(s, n) {
//		n = n > 0 && n <= 20 ? n : 2; 
		if(typeof n === 'undefined'){
			n=2;
		}
		s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""; 
		var l = s.split(".")[0].split("").reverse();
		if(n>0){
			r = "."+s.split(".")[1]; 
		}else{
			r = "";
		}
		t = ""; 
		for (i = 0; i < l.length; i++) { 
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : ""); 
		}
		return t.split("").reverse().join("")+r; 
	};
	Digit.chinese = function(n){     
	    if(n==null || n=='')return'';
		if(!/^\d*(\.\d*)?$/.test(n))return'';     

	    var fraction = ['角', '分']; 
	    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']; 
	    var unit = [ ['元', '万', '亿'], ['', '拾', '佰', '仟']  ]; 
	    var head = n < 0? '欠': ''; 
	    n = Math.abs(n); 
	   
	    var s = ''; 
	   
	    for (var i = 0; i < fraction.length; i++)  
	    { 
	        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, ''); 
	    } 
	    s = s || '整'; 
	    n = Math.floor(n); 
	   
	    for (var i = 0; i < unit[0].length && n > 0; i++)  
	    { 
	        var p = ''; 
	        for (var j = 0; j < unit[1].length && n > 0; j++)  
	        { 
	            p = digit[n % 10] + unit[1][j] + p; 
	            n = Math.floor(n / 10); 
	        } 
	        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')  + unit[0][i] + s; 
	    } 
	    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整'); 
//	    return re;     
	}
	
	/**莱芜定制的显示格式,小数四舍五入后换为.00*/
	Digit.lwFormat = function(value){
		value = (value-0).toFixed(0);
		return Digit.round(value,0)+".00";
	}
	
	/**抽取字符中的数字(2位小数)*/
	Digit.extractNumbers = function(value){
		var num = value.match(/^[0-9]+([.]{0,1}[0-9]{0,2})?$/);
		if(num!=null){
			value = num[0];
		}else{
			if(""==value){
				value = '';
			}else{
				var reg = /[0-9]+([.]{0,1}[0-9]{0,2})?/g;
				var n = value.match(reg);
				if(n!=null){
					var v = "";
					for(var i=0;i<n.length;i++){
						v += ""+n[i];
					}
					value = v;
				}else{
					value = '';
				}
			}
		}
		return value;
	}
	
	/**   
	 * datagrid 消息提示
	 */    
	$.extend($.fn.datagrid.methods, {     
	    /** 
	     * 开打提示功能
	     * @param {} jq   
	     * @param {} params 提示消息框的样式   
	     * @return {}   
	     */    
	    doCellTip : function(jq, params) {     
	        function showTip(data, td, e) {     
	            if ($(td).text() == "")     
	                return;     
	            data.tooltip.text($(td).text()).css({     
	                        top : (e.pageY + 10) + 'px',     
	                        left : (e.pageX + 20) + 'px',     
	                        'z-index' : $.fn.window.defaults.zIndex,     
	                        display : 'block'     
	                    });     
	        };     
	        return jq.each(function() {     
	            var grid = $(this);     
	            var options = $(this).data('datagrid'); //获取 datagrid 数据  
	              
	            if (!options.tooltip) {     
	                var panel = grid.datagrid('getPanel').panel('panel');     
	                var defaultCls = {     
	                    'border' : '1px solid #333',     
	                    'padding' : '5px',     
	                    'color' : '#333',     
	                    'background' : '#f7f5d1',     
	                    'position' : 'absolute',     
	                    'max-width' : '300px',     
	                    'border-radius' : '2px',     
	                    '-moz-border-radius' : '4px',     
	                    '-webkit-border-radius' : '4px',     
	                    'display' : 'none'     
	                }     
	                var tooltip = $("<div id='celltip'></div>").appendTo('body');     
	                tooltip.css($.extend({}, defaultCls, params.cls));     
	                options.tooltip = tooltip;     
	                panel.find('.datagrid-body').each(function() {     
	                    var delegateEle = $(this).find('> div.datagrid-body-inner').length     
	                            ? $(this).find('> div.datagrid-body-inner')[0]     
	                            : this;     
	                    $(delegateEle).undelegate('td', 'mouseover').undelegate(     
	                            'td', 'mouseout').undelegate('td', 'mousemove')     
	                            .delegate('td', {     
	                                'mouseover' : function(e) {     
	                                    if (params.delay) {     
	                                        if (options.tipDelayTime)     
	                                            clearTimeout(options.tipDelayTime);     
	                                        var that = this;     
	                                        options.tipDelayTime = setTimeout(     
	                                                function() {     
	                                                    showTip(options, that, e);     
	                                                }, params.delay);     
	                                    } else {     
	                                        showTip(options, this, e);     
	                                    }     
	    
	                                },     
	                                'mouseout' : function(e) {     
	                                    if (options.tipDelayTime)     
	                                        clearTimeout(options.tipDelayTime);     
	                                    options.tooltip.css({     
	                                                'display' : 'none'     
	                                            });     
	                                },     
	                                'mousemove' : function(e) {     
	                                    var that = this;     
	                                    if (options.tipDelayTime) {     
	                                        clearTimeout(options.tipDelayTime);     
	                                        options.tipDelayTime = setTimeout(     
	                                                function() {     
	                                                    showTip(options, that, e);     
	                                                }, params.delay);     
	                                    } else {     
	                                        showTip(options, that, e);     
	                                    }     
	                                }     
	                            });     
	                });     
	    
	            }     
	    
	        });     
	    },     
	    /** 
	     * 关闭消息提示功能   
	     * @param {} jq   
	     * @return {}   
	     */    
	    cancelCellTip : function(jq) {     
	        return jq.each(function() {     
	                    var data = $(this).data('datagrid');     
	                    if (data.tooltip) {     
	                        data.tooltip.remove();     
	                        data.tooltip = null;     
	                        var panel = $(this).datagrid('getPanel').panel('panel');     
	                        panel.find('.datagrid-body').undelegate('td',     
	                                'mouseover').undelegate('td', 'mouseout')     
	                                .undelegate('td', 'mousemove')     
	                    }     
	                    if (data.tipDelayTime) {     
	                        clearTimeout(data.tipDelayTime);     
	                        data.tipDelayTime = null;     
	                    }     
	                });     
	    }     
	});  
	
});
function updatePagerIcons(table) {
	var replacement = 
	{
		'ui-icon-seek-first' : 'ace-icon fa fa-angle-double-left bigger-140',
		'ui-icon-seek-prev' : 'ace-icon fa fa-angle-left bigger-140',
		'ui-icon-seek-next' : 'ace-icon fa fa-angle-right bigger-140',
		'ui-icon-seek-end' : 'ace-icon fa fa-angle-double-right bigger-140'
	};
	$('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
		var icon = $(this);
		var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
		
		if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
	});
}

function ReplaceAll(str, sptr, sptr1){
    while (str.indexOf(sptr) >= 0){
       str = str.replace(sptr, sptr1);
    }
    return str;
}