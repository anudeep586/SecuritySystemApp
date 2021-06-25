package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.example.demo.model.Credential;

import com.example.demo.repository.CredentialRepo;

@Service
public class CredentialService {
	
	@Autowired
	private CredentialRepo repo;
	
	public List<Credential> fetchCredentialList(){
		
		return repo.findAll();
	}
	
	public Credential saveCredentialToDB(Credential credential) {
		return repo.save(credential);
	}
	public Optional<Credential> fetchCredentialById(int id) {
		return repo.findById(id);
	}
	public String deleteCredentialById(int id) {
		String result;
		try {
			repo.deleteById(id);
			result="credential has been successfully delete it";
		}
		catch(Exception e) {
			result="credential is not present";
		}
		return result;
	}
	

}
