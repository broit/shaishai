package com.wwtx.controller.sys;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wwtx.bean.FormResultBean;
import com.wwtx.bean.PageBean;
import com.wwtx.bean.TreeNodeBean;
import com.wwtx.controller.BaseController;
import com.wwtx.dao.sys.SysFuncDao;
import com.wwtx.dao.sys.SysFuncOperDao;
import com.wwtx.dao.sys.SysRoleDao;
import com.wwtx.model.SysFunc;
import com.wwtx.model.dto.FuncOperListDto;
import com.wwtx.model.dto.SysFuncDto;
import com.wwtx.util.annotation.AnnMS;

@Controller
@Scope("prototype")
@RequestMapping(value="/func")
public class FuncController extends BaseController<SysFuncDao, SysFuncDto> {
	
	Log log = LogFactory.getLog(SysRoleDao.class);
	
	@Resource
	private SysFuncOperDao funcOperDao;
	
	/**功能列表*/
	@RequestMapping(value={"/parentList"},method = RequestMethod.GET)
	@ResponseBody
	@AnnMS(S=false,M=false)
	public PageBean<SysFunc> parentList(PageBean<SysFunc> page, SysFunc param) {
		page.setParam(param);
		return super.getDao().parentList(page);
	}

	/**查询功能操作*/
	@RequestMapping(value={"/funcOper/{id}"},method = RequestMethod.GET)
	@ResponseBody
	@AnnMS(S=false,M=false)
	public FormResultBean<List<TreeNodeBean>> funcOperList(@PathVariable Integer id){
		return funcOperDao.funcOperList(id);
	}
	
	/**保存功能操作*/
	@RequestMapping(value={"/funcOper"},method = RequestMethod.POST)
	@ResponseBody
	@AnnMS(S=false,M=false)
	public Map<String, Object> saveFuncOper(FuncOperListDto fo){
		Map<String, Object> result = new HashMap<String, Object>();
		try{
			funcOperDao.saveFuncOper(fo);
			result.put("success", true);
		}catch(Exception e){
			log.error(e);
			result.put("success", false);
			result.put("errorMsg", e.getMessage());
		}
		return result;
	}
}
