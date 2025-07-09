package com.jsp.Employee_Registration.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.Employee_Registration.entity.Employee;
import com.jsp.Employee_Registration.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepo;
	
	public Employee saveEmployee(Employee e) {
		return employeeRepo.save(e);
	}
	
	public Employee findById(Long id) {
		return employeeRepo.findById(id).orElse(null);
	}
	
	public Employee findByEmployeeName(String name) {
		Employee e = employeeRepo.findEmployeeByName(name);
		if (e != null) {
			return e;
		}
		return null;
	}
	
	public List<Employee> findAll(){
		return employeeRepo.findAll();
	}
	
	public boolean deleteEmployee(long id) {
		employeeRepo.deleteById(id);
		return true;
	}
}
