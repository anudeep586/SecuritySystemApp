package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Credential;

public interface CredentialRepo extends JpaRepository<Credential, Integer>{

}
