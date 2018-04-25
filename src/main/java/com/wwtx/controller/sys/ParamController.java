package com.wwtx.controller.sys;

import java.util.List;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wwtx.controller.BaseController;
import com.wwtx.dao.sys.SysParamDao;
import com.wwtx.model.SysParam;

@Controller
@Scope("prototype")
@RequestMapping(value="/param")
public class ParamController extends BaseController<SysParamDao,SysParam>{

	/**根据类型查询字典*/
	@RequestMapping(value={"/selectByType"},method = RequestMethod.GET)
	@ResponseBody
	public List<SysParam> selectByType(SysParam param){
		return this.getDao().selectByType(param);
	}
}
