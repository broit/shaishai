function getLodop(oOBJECT,oEMBED){
	//alert("lodop");
/**************************
  本函数根据浏览器类型决定采用哪个对象作为控件实例：
  IE系列、IE内核系列的浏览器采用oOBJECT，
  其它浏览器(Firefox系列、Chrome系列、Opera系列、Safari系列等)采用oEMBED,
  对于64位浏览器指向64位的安装程序install_lodop64.exe。
**************************/
	//parent.PATH_BASE+
	var path = '/app/common/upload_file/lodop/';
	var strHtmInstall="<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='"+path+"install_lodop32.exe'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
	var strHtmUpdate="<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='"+path+"install_lodop32.exe'>执行升级</a>,升级后请重新进入。</font>";
	var strHtm64_Install="<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='"+path+"install_lodop64.exe'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
	var strHtm64_Update="<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='"+path+"install_lodop64.exe'>执行升级</a>,升级后请重新进入。</font>";
	var strHtmFireFox="<br><br><font color='#FF00FF'>注意：<br>1：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它。";
	var LODOP=oEMBED;		
	var isIE=(navigator.userAgent.indexOf('MSIE')>=0) || (navigator.userAgent.indexOf('Trident')>=0);
	var is64IE  = isIE && (navigator.userAgent.indexOf('x64')>=0);
	
	//alert(LODOP+"-"+isIE+"-"+is64IE);
	
	try {
		if (isIE)
			LODOP = oOBJECT;
		if ((LODOP == null) || (typeof (LODOP.VERSION) == "undefined")) {
			if (navigator.userAgent.indexOf('Firefox') >= 0) {
				document.documentElement.innerHTML = strHtmFireFox
						+ document.documentElement.innerHTML;
			}
			;
			if (is64IE) {
				document.write(strHtm64_Install);
			} else if (isIE) {
				document.write(strHtmInstall);
			} else {
				document.documentElement.innerHTML = strHtmInstall
						+ document.documentElement.innerHTML;
			}
			;
			return LODOP;
		} else if (LODOP.VERSION < "6.1.5.8") {
			if (is64IE) {
				document.write(strHtm64_Update);
			} else if (isIE) {
				document.write(strHtmUpdate);
			} else {
				document.documentElement.innerHTML = strHtmUpdate
						+ document.documentElement.innerHTML;
			}
			;
			return LODOP;
		}
		// *****如下空白位置适合调用统一功能:*********
		LODOP.SET_LICENSES("青岛青铜器科技有限公司", "814ABA779D3B7FDCA515D2F896DA3700",
				"", "");
		// *******************************************
		return LODOP;
	} catch (err) {
		document.documentElement.innerHTML = "Error:" + strHtmInstall
				+ document.documentElement.innerHTML;
		return LODOP;
	}
}
