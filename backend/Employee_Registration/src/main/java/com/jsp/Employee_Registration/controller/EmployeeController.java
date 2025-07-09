package com.jsp.Employee_Registration.controller;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.Employee_Registration.entity.Admin;
import com.jsp.Employee_Registration.entity.Employee;
import com.jsp.Employee_Registration.service.EmployeeService;
@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	@PostMapping
	public Employee saveEmployee(@RequestBody Employee e) {
		return employeeService.saveEmployee(e);
	}
	@GetMapping("/fetchById/{id}")
	public Employee findById(@PathVariable long id) {
		return employeeService.findById(id);
	}
	@GetMapping("/fetchAll")
	public List<Employee> findAll(){
		return employeeService.findAll();
	}
	@GetMapping("/fetchByName/{name}")
	public Employee findByEmployeeName(@PathVariable String name) {
		return employeeService.findByEmployeeName(name);
	}
	@PostMapping("/signup")
	public Employee signup(@RequestBody Employee e) {
		return this.saveEmployee(e);
	}
	@PostMapping("/login")
	public Employee login(@RequestBody Map<String, String> data) {
	    String name = data.get("name");
	    String password = data.get("password");
		Employee e = this.findByEmployeeName(name);	
		if(e != null) {
			if((e.getName().equals(name) && e.getPassword().equals(password))) {
				return e;
			}
			return null;
		}
		return null;
	}
	@PutMapping("/updateEmployee/{id}")
	public Employee updateEmployee(@PathVariable long id, @RequestBody Employee e) {
	    Employee existing = this.findById(id);
	    if (existing != null) {
	        existing.setName(e.getName());
	        existing.setPassword(e.getPassword());
	        existing.setEmail(e.getEmail());
	        existing.setPhone(e.getPhone());

	        return this.saveEmployee(existing);
	    }
	    return null;
	}
	@PutMapping("/changeName/{newName}/{id}")
	public Employee changeName(@PathVariable String newName,@PathVariable long id) {	
		Employee e = this.findById(id);
		if (e != null) {
			e.setName(newName);
		}
		this.saveEmployee(e);
		return e;
	}
	@PutMapping("/changePassword/{newPassword}/{id}")
	public Employee changePassword(@PathVariable String newPassword,@PathVariable long id) {	
		Employee e = this.findById(id);
		if (e != null) {
			e.setPassword(newPassword);
		}
		this.saveEmployee(e);
		return e;
	}
	@PutMapping("/changePhone/{newPhone}/{id}")
	public Employee changePhone(@PathVariable long newPhone,@PathVariable long id) {	
		Employee e = this.findById(id);
		if (e != null) {
			e.setPhone(newPhone);
		}
		this.saveEmployee(e);
		return e;
	}
	@PutMapping("/changeEmail/{newEmail}/{id}")
	public Employee changeEmail(@PathVariable String newEmail,@PathVariable long id) {	
		Employee e = this.findById(id);
		if (e != null) {
			e.setEmail(newEmail);
		}
		this.saveEmployee(e);
		return e;
	}
	@DeleteMapping("/deleteEmployee")
	public boolean deleteEmployee(long id) {
		return employeeService.deleteEmployee(id);
	}
	
	
}