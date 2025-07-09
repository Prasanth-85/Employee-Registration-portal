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
import com.jsp.Employee_Registration.service.AdminService;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;
	@Autowired
	private EmployeeController employeeController;
	@PostMapping
	public Admin saveAdmin(@RequestBody Admin a) {
		return adminService.saveAdmin(a);
	}
	@GetMapping("/FetchById/{id}")
	public Admin findById(@PathVariable long id) {
		return adminService.findById(id);
	}
	@GetMapping("/fetchByName/{name}")
	public Admin findByAdminName(@PathVariable String name) {
		return adminService.findByAdminName(name);
	}
	@GetMapping("/fetchAll")
	public List<Admin> findAll(){
		return adminService.findAll();
	}
	@PostMapping("/adminLogin")
	public Admin adminLogin(@RequestBody Map<String, String> data) {
	    String name = data.get("name");
	    String password = data.get("password");
	    Admin a = this.findByAdminName(name);
		if(a != null) {
			if((a.getName().equals(name) && a.getPassword().equals(password))) {
				return a;
			}
			return null;
		}
		return null;
	}
	@PostMapping("/adminSignup")
	public Admin signup(@RequestBody Admin a) {
		return this.saveAdmin(a);
	}
	@GetMapping("/fetchEmployees")
	public List<Employee> fetchAll(){
		return employeeController.findAll();
	}
	@DeleteMapping("/deleteEmployee/{id}")
	public boolean deleteEmployee(@PathVariable long id) {
		return employeeController.deleteEmployee(id);
	}
	@PutMapping("/updateEmployee/{id}")
	public Employee updateEmployee(@PathVariable long id, @RequestBody Employee e) {
	    Employee existing = employeeController.findById(id);
	    if (existing != null) {
	        existing.setName(e.getName());
	        existing.setPassword(e.getPassword());
	        existing.setEmail(e.getEmail());
	        existing.setPhone(e.getPhone());
	        existing.setStatus(e.getStatus());
	        existing.setSalary(e.getSalary());
	        existing.setJob(e.getJob());

	        return employeeController.saveEmployee(existing);
	    }
	    return null;
	}
}
