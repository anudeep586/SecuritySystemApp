package com.example.demo.controller;

import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Credential;

import com.example.demo.service.CredentialService;

@RestController
public class CredentialRestController {
	
	@Autowired
	private CredentialService service;
	
	@GetMapping("/getcredentiallist")
	@CrossOrigin(origins="http://localhost:8081")
	public List<Credential> fetchCredentialList(){
		List<Credential> credentials=new ArrayList<Credential>();
		
		credentials=service.fetchCredentialList();
		return credentials;
	}
	
	@PostMapping("/addcredential")
	@CrossOrigin(origins="http://localhost:8081")
	public Credential saveCredential(@RequestBody Credential credential){
		
		return service.saveCredentialToDB(credential);
	}
	
	@GetMapping("/getcredentialbyid/{id}")
	@CrossOrigin(origins="http://localhost:8081")
	public Credential fetchCredentialById(@PathVariable int id){
		return service.fetchCredentialById(id).get();
		
	}
	@DeleteMapping("/deletecredentialbyid/{id}")
	@CrossOrigin(origins="http://localhost:8081")
	public String DeleteCredentialById(@PathVariable int id){
		
		return service.deleteCredentialById(id);
	}
	

}
