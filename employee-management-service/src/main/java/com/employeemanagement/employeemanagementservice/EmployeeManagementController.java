package com.employeemanagement.employeemanagementservice;

import com.employeemanagement.employeemanagementservice.Models.Employee;
import com.employeemanagement.employeemanagementservice.Repositories.EmployeeRepository;
import com.employeemanagement.employeemanagementservice.services.EmployeeManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EmployeeManagementController {

    @Autowired
    private EmployeeManagementService employeeManagementService;

    @RequestMapping("/save")
    public void registerEmployee(@PathVariable("employee") Employee employee){
        employeeManagementService.save(employee);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeManagementService.findAll();
    }

    @GetMapping("/getEmployee/{id}")
    public Employee getEmployee(@PathVariable("id") String id){
        Employee retrievedEmployees =
                employeeManagementService.findById(id).get();
        return retrievedEmployees;
    }
    @GetMapping("/count")
    public Long GetEmployeeCount(){
        return employeeManagementService.count();
    }
    @RequestMapping("/archiveEmployee/{id}")
    public void deleteEmpoyee(@PathVariable("id") String id){
        employeeManagementService.deleteByUserId(id);
    }

    @GetMapping("/error")
    public String error(){
        return "Could not start-up application";
    }



}
