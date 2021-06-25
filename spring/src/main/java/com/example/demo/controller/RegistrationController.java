package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.User;
import com.example.demo.service.RegistrationService;

@RestController
public class RegistrationController {
	
	//when ever user submit this method is called e are using MySql
	@Autowired
	private RegistrationService service;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins="http://localhost:8081")
	public User saveUser(@RequestBody User user) throws Exception{
		String tempEmailId=user.getEmailId();
		
		if(tempEmailId!= null && !"".equals(tempEmailId)) {
			User userobj =service.fetchUserByEmailId(tempEmailId);
			if(userobj != null) {
				throw new Exception("user with"+tempEmailId+"is already exists");
			}
		}
		User userObj=null;
		userObj=service.saveUser(user);
		return userObj;
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:8081")
	public User checkUser(@RequestBody User user) throws Exception{
		String tempEmailId =user.getEmailId();
		String tempPass = user.getPassword();
		User userObj=null;
		if(tempEmailId !=null && tempPass!= null) {
			userObj = service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(userObj==null) {
			throw new Exception("bad credentials");
		}
		return userObj;
	}

}
