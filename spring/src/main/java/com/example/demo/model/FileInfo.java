package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class FileInfo {
	  @Id
	  private String name;
	  private String url;

	 

	  public FileInfo() {
		  
	  }

	  
	  
	  
	  public FileInfo(String name, String url) {
		  super();
	    this.name = name;
	    this.url = url;
	  }

	  public String getName() {
	    return this.name;
	  }

	  public void setName(String name) {
	    this.name = name;
	  }
	public String getUrl() {
	    return this.url;
	  }

	  public void setUrl(String url) {
	    this.url = url;
	  }
	}

