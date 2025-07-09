package com.jsp.Employee_Registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsp.Employee_Registration.entity.Admin;
import com.jsp.Employee_Registration.entity.Employee;

public interface AdminRepository extends JpaRepository<Admin, Long> {

	public Admin findAdminByName(String name);

}
