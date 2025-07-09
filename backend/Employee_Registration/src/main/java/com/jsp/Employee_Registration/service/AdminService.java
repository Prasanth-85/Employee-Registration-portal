package com.jsp.Employee_Registration.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.Employee_Registration.entity.Admin;
import com.jsp.Employee_Registration.entity.Employee;
import com.jsp.Employee_Registration.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	public Admin saveAdmin(Admin a) {
		return adminRepository.save(a);
	}
	
	public Admin findByAdminName(String name) {
		Admin a = adminRepository.findAdminByName(name);
		if (a != null) {
			return a;
		}
		return null;
	}
	
	public Admin findById(long id) {
		return adminRepository.findById(id).orElse(null);
	}
	
	public List<Admin> findAll(){
		return adminRepository.findAll();
	}
}
