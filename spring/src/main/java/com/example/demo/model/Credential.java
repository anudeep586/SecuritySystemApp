package com.example.demo.model;

import javax.persistence.Entity;

import javax.persistence.Id;

@Entity
public class Credential {
	@Id
	private int id;
	private String sourcename;
	private String username;
	private String password;
	
	
	
	public Credential() {
		
	}
	
	
	
	public Credential(int id, String sourcename, String username, String password) {
		super();
		this.id = id;
		this.sourcename = sourcename;
		this.username = username;
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSourcename() {
		return sourcename;
	}
	public void setSourcename(String sourcename) {
		this.sourcename = sourcename;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
