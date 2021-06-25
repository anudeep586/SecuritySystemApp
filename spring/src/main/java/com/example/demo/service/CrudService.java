package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
 
import com.example.demo.model.BankValutModel;
import com.example.demo.repository.CrudRepo;
 @Service
public class CrudService {
	@Autowired
	private CrudRepo repo;
  	
	public List<BankValutModel> getBankInfo(){
		return repo.findAll();
	}
	

	 public java.util.Optional<BankValutModel> bankInfoById(int id) {
		 return repo.findById(id);
	 }
 
 public BankValutModel bankInfoSaveDb(BankValutModel bankvalutmodel) {
	 return repo.save(bankvalutmodel);
 }
 
 
 public String deleteBankById(BankValutModel id) {
	 String result;
	 try {
		  repo.delete(id);
		  result="bank successfully deleted";
 }
	 catch(Exception e) {
		 result="bank with id is not found to delete";
	 }
	 return result;
 }
 
}