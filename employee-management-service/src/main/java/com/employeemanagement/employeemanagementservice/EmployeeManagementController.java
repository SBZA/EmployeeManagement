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

    @PostMapping("/save")
    public void registerEmployee(@RequestBody Employee employee){
        employeeManagementService.save(employee);
    }
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

    @GetMapping("/error")
    public String error(){
        return "Could not start-up application";
    }

    @PostMapping("/archiveEmployeeById")
    public void deleteEmpoyee(@RequestBody String id){
        employeeManagementService.deleteByUserId(id);
    }

    @PostMapping("/archiveEmployeeByObject")
    public void deleteEmployee(@RequestBody Employee employee){
        employeeManagementService.deleteEmployee(employee);
    }

    @PostMapping("/archiveAllEmployees")
    public void deleteAllEmployees() {
        employeeManagementService.deleteAllEmployees();
    }
}
