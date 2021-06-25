package com.bank.bankcrud.model;
import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
 public class BankValutModel {
	@Id
	private int valutId;
	private Long accountNumber;
	private String accountName;
	private String ifsc;
	private String userName;
	private String password;
	

	public BankValutModel( ) {
	 
	}
	
	public BankValutModel(int valutId, Long accountNumber, String accountName, String ifsc, String userName, String password) {
		super();
		this.valutId = valutId;
		this.accountNumber = accountNumber;
		this.accountName = accountName;
		this.ifsc = ifsc;
		this.userName = userName;
		this.password = password;
	}





	public int getValutId() {
		return valutId;
	}



	public void setValutId(int valutId) {
		this.valutId = valutId;
	}



	public Long getAccountNumber() {
		return accountNumber;
	}



	public void setAccountNumber(Long accountNumber) {
		this.accountNumber = accountNumber;
	}



	public String getAccountName() {
		return accountName;
	}



	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}



	public String getIfsc() {
		return ifsc;
	}



	public void setIfsc(String ifsc) {
		this.ifsc = ifsc;
	}



	public String getUserName() {
		return userName;
	}



	public void setUserName(String userName) {
		this.userName = userName;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	} 
	

}
