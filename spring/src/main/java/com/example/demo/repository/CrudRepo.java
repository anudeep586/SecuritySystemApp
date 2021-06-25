package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.BankValutModel;

public interface CrudRepo extends JpaRepository<BankValutModel,Integer> {

	 
	
}