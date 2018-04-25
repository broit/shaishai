package com.wwtx.controller.sys;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wwtx.bean.FormResultBean;
import com.wwtx.bean.TreeNodeBean;
import com.wwtx.controller.BaseController;
import com.wwtx.dao.sys.SysRoleDao;
import com.wwtx.dao.sys.SysRolefuncDao;
import com.wwtx.model.SysRole;
import com.wwtx.model.dto.RoleFuncOperListDto;
import com.wwtx.util.annotation.AnnMS;

@Controller
@Scope("prototype")
@RequestMapping(value="/role")
public class RoleController extends BaseController<SysRoleDao,SysRole>{

	Logger log = Logger.getLogger(this.getClass());
	
	@Resource
	private SysRolefuncDao roleFuncDao;
	
	
	/**角色功能*/
	@RequestMapping(value={"/roleFunc/{id}"},method = RequestMethod.GET)
	@ResponseBody
	@AnnMS(S=false,M=false)
	public FormResultBean<List<TreeNodeBean>> roleFuncList(@PathVariable Integer id){
		return roleFuncDao.roleFuncList(id);
	}
	
	/**保存角色功能操作*/
	@RequestMapping(value={"/roleFuncOper"},method = RequestMethod.POST)
	@ResponseBody
	@AnnMS(S=false,M=false)
	public Map<String,Object> saveRoleFuncOper(RoleFuncOperListDto rfo){
		Map<String, Object> result = new HashMap<String, Object>();
		try{
			roleFuncDao.saveRoleFuncOper(rfo);
			result.put("success", true);
		}catch(Exception e){
			log.error(e);
			result.put("success", false);
			result.put("errorMsg", e.getMessage());
		}
		return result;
	}
	
}
