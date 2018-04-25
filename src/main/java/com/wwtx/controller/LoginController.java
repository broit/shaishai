package com.wwtx.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import com.wwtx.bean.AuthBean;
import com.wwtx.bean.LoginUserBean;
import com.wwtx.dao.sys.SysRoleDao;
import com.wwtx.dao.sys.SysUserDao;
import com.wwtx.dao.sys.SysUserroleDao;
import com.wwtx.mapper.SysUserroleMapper;
import com.wwtx.model.SysUser;
import com.wwtx.model.dto.SysUserroleDto;
import net.sf.json.JSON;
import net.sf.json.JSONSerializer;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.SessionScope;
import org.springframework.web.servlet.ModelAndView;


@Controller
@Scope("prototype")
@RequestMapping(value="/")
public class LoginController {

	Logger log = Logger.getLogger(this.getClass());

	@Resource
	private SysUserDao userDao;

	@Resource
	private SysUserroleDao sysUserroleDao;

	@Resource
	private SysRoleDao sysRoleDao;

	@Autowired
	private SysUserroleMapper userroleMapper;

	/**转到主界面*/
	@RequestMapping(value={"/toMain"},method = RequestMethod.GET)
	@ResponseBody
	public ModelAndView toMain(HttpServletRequest request,String code,String password,SessionScope scope){
		ModelAndView mav = new ModelAndView("main.jsp");
		AuthBean auth = null;
		try{
			HttpSession session = request.getSession();

			LoginUserBean loginUserBean =(LoginUserBean)session.getAttribute("loginUser");
			auth =  userDao.selecUserAuth(loginUserBean.getUserId());
			auth.setSuccess(true);
			JSON json = JSONSerializer.toJSON(auth);

			mav.addObject("auth",json);

		}catch(Exception e){
			log.error(e);
			e.printStackTrace();
			auth = new AuthBean();
			auth.setSuccess(false);
			auth.setErrorMessage(e.getMessage());
		}
		return mav;
	}

	/**登陆页面 */
	@RequestMapping(value={"/welcome"},method = RequestMethod.GET)
	public ModelAndView toMai(HttpServletRequest request){
		ModelAndView mav = new ModelAndView("login.jsp");

		return mav;
	}

	/**
	 * 登陆页面提交验证
	 */
	@RequestMapping(value={"/login"},method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> toView(HttpServletRequest request,String code,String password,SessionScope scope){
		HttpSession session = request.getSession();
		Map<String,Object> result = new HashMap<String, Object>();
		session.setMaxInactiveInterval(60*60*10);
		try{
			SysUser sysUser= userDao.adminLogin(code,password);	//验证用户名密码
			List<SysUserroleDto> foList = userroleMapper.userRoleList(sysUser.getId());//查询用户角色
			LoginUserBean user = new LoginUserBean();
			user.setUserId(sysUser.getId());
			user.setCode(sysUser.getCode());
			user.setRole_uid(foList);
			user.setUserName(sysUser.getName());

			session.setAttribute("loginUser",user);
//			session.setMaxInactiveInterval(1);

			result.put("success", true);
			log.info("登陆信息:name:::"+code);
		}catch(Exception e){
			result.put("success", false);
			result.put("msg",e.getMessage());
		}
		return result;
	}
	/**获取用户权限*/
	@RequestMapping(value={"/auth"},method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> userAuth(HttpServletRequest request){
		Map<String,Object> result = new HashMap<String,Object>();
		String key = request.getSession().getId();
		LoginUserBean user = null;
		if(user==null){

			result.put("auth",user.getAuth());
	/*		result.put("id",user.getId());
			result.put("admin",user.getAdmin());
			result.put("userid",user.getUserid());
			result.put("unname",user.getUserCode());
			result.put("areaId",user.getAreaid());*/
		}
		return result;
	}
	/**
	 * 退出登陆
	 */
	@RequestMapping(value={"/exit"},method = RequestMethod.GET)
	@ResponseBody
	public ModelAndView exit(HttpServletRequest request){
		HttpSession session = request.getSession();

		session.removeAttribute("loginUser");
		ModelAndView mav = new ModelAndView("login.jsp");
		return mav;
	}

	@RequestMapping(value={"/modify"},method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> modify(HttpServletRequest request,String oldpassword,String password,SessionScope scope){
		HttpSession session = request.getSession();
		Map<String,Object> result = new HashMap<String, Object>();

		LoginUserBean user = (LoginUserBean)session.getAttribute("loginUser");

		try{
			userDao.adminLogin(user.getCode(),oldpassword);	//验证用户名密码
			userDao.modify(user.getUserId(), password);//修改密码

			result.put("success", true);
			log.info("修改成功:name:::"+user.getCode());
		}catch(Exception e){
			result.put("success", false);
			result.put("msg",e.getMessage());
		}
		return result;
	}


}
