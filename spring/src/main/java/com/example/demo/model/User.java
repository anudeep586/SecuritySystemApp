package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import java.util.List;

import java.util.ArrayList;


@Entity
public class User {
	
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String emailId;
private String userName;
private String mobileNo;
private String password;

@OneToMany(cascade=CascadeType.ALL)
@JoinColumn(name="cd_fk", referencedColumnName="id")
List<Credential> credentials=new ArrayList<>();

public User() {
}


public User(int id, String emailId, String userName,String mobileNo, String password) {
	super();
	this.id = id;
	this.emailId = emailId;
	this.userName = userName;
	this.mobileNo=mobileNo;
	this.password = password;
	
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getmobileNo() {
	return mobileNo;
}
public void setmobileNo(String mobileNo) {
	this.mobileNo = mobileNo;
}

public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}


public List<Credential> getCredentials() {
	return credentials;
}


public void setCredentials(List<Credential> credentials) {
	this.credentials = credentials;
}


}
