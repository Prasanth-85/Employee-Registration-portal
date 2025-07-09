package com.jsp.Employee_Registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jsp.Employee_Registration.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	public Employee findEmployeeByName(String name);
}
