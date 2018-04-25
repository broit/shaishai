package com.wwtx.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.wwtx.bean.FormResultBean;
import com.wwtx.bean.LoginUserBean;
import com.wwtx.bean.PageBean;
import com.wwtx.dao.ICurdService;
import com.wwtx.model.IBaseModel;
import com.wwtx.util.DateEditor;
import com.wwtx.util.SessionUserIdEditor;

public class BaseController<D extends ICurdService<E>,E extends IBaseModel> {
	
	Logger log = Logger.getLogger(this.getClass());
	
	/**模块DAO*/
	private D dao;
	
	/**用户登录信息*/
	protected LoginUserBean loginBean;
	
	/**用户ID填充器*/
	private SessionUserIdEditor userIdEditor;
	
	@InitBinder  
	protected void initBinder(HttpServletRequest request,  
	                              ServletRequestDataBinder binder) throws Exception {  
	    //对于需要转换为Date类型的属性，使用DateEditor进行处理  
	    binder.registerCustomEditor(Date.class, new DateEditor());
	    if(userIdEditor!=null){
	    	binder.registerCustomEditor(String.class, "creater", userIdEditor);
	    }
	}
	
	@Autowired
	private void setLoginUserBean(HttpServletRequest request){
		HttpSession session = request.getSession();
		LoginUserBean loginBean = (LoginUserBean)session.getAttribute("loginUser");
		this.loginBean = loginBean;
		if(loginBean!=null){
			userIdEditor = new SessionUserIdEditor(loginBean.getUserId().toString());
		}
	}
	
	/**列表方法*/
	@RequestMapping(value={"/list"},method = RequestMethod.GET)
	@ResponseBody
	protected PageBean<E> queryList(HttpServletRequest request,PageBean<E> page,E requestParamBean){
		page.setParam(requestParamBean);
		page.setUser(this.loginBean);
		return this.dao.listPage(page);
	}
	
	/**保存方法*/
	@RequestMapping(value={"/save"},method = RequestMethod.POST)
	@ResponseBody
	protected Map<String,Object> save(E entity){
		Map<String,Object> result = new HashMap<String,Object>();
		result.put("success", false);
		try{
			this.dao.saveOrUpdate(entity);
			result.put("success", true);
		}catch(Exception e){
			log.error(e);
			e.printStackTrace();
			result.put("msg", e.getMessage());
		}
		return result;
	}
	
	/**根据ID查询*/
	@RequestMapping(value={"/{id}"},method = RequestMethod.GET)
	@ResponseBody
	protected FormResultBean<E> loadInfo(@PathVariable Integer id){
		FormResultBean<E> result = new FormResultBean<E>();
		try{
			result.setData(this.dao.selectByPrimaryKey(id));
			result.setSuccess(true);
		}catch(Exception e){
			result.setErrorMessage(e.getMessage());
			log.error(e);
		}
		return result;
	}
	
	/**根据ID删除*/
	@RequestMapping(value={"/remove/{id}"},method = RequestMethod.POST)
	@ResponseBody
	protected Map<String,Object> remove(@PathVariable Integer id){
		Map<String,Object> result = new HashMap<String,Object>();
		try{
			this.dao.deleteByPrimaryKey(id);
			result.put("success", true);
		}catch(Exception e){
			result.put("success", false);
			result.put("errorMessage",e.getMessage());
			log.error(e);
			e.printStackTrace();
		}
		return result;
	}
	
	@Autowired
	private void setDao(D dao){
		this.dao = dao;
	}
	
	protected D getDao(){
		return dao;
	}
}
