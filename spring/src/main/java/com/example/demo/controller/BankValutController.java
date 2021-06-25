package com.bank.bankcrud.controller;
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

import com.bank.bankcrud.model.BankValutModel;
import com.bank.bankcrud.services.CrudService;
@RestController
public class BankValutController {
	@Autowired
	private CrudService service;
  
 	@GetMapping("/bank")
 	@CrossOrigin(origins="http://localhost:8081")
	public List<BankValutModel> getBankInfo(){
		List<BankValutModel> bankdetails= new ArrayList<BankValutModel>();
		bankdetails=service.getBankInfo();
 		return bankdetails;
	
	}
	
 	@PostMapping("/bankinfosave")
 	@CrossOrigin(origins="http://localhost:8081")
	public BankValutModel bankInfoById(@RequestBody BankValutModel bankvalutmodel) {
	return service.bankInfoSaveDb(bankvalutmodel);
 	}
 	@GetMapping("/bankinfobyid/{id}")
 	@CrossOrigin(origins="http://localhost:8081")
	public BankValutModel bankInfoById(@PathVariable int id) {
		return service.bankInfoById(id).get();
 		
 	}
 	@DeleteMapping("/bankinfodelete/{id}")
 	@CrossOrigin(origins="http://localhost:8081")
   public String bankInfoDelete(@PathVariable BankValutModel id){
	return service.deleteBankById(id);
 	}
 	
	
}
