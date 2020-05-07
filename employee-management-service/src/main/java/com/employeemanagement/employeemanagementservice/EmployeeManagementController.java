package com.employeemanagement.employeemanagementservice;

import com.employeemanagement.employeemanagementservice.Models.Employee;
import com.employeemanagement.employeemanagementservice.Repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeManagementController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @RequestMapping("/save")
    public void registerEmployee(){
        Employee employee = new Employee(
                "Sontaga", "Maluleke");
        employee.setBpid("Sontaga");
        employeeRepository.save(employee);
    }

    @GetMapping("/getstudents")
    public Employee getEmployee(){
        Employee retrievedEmployees =
                employeeRepository.findById("Sontaga").get();
        return retrievedEmployees;
    }

    @GetMapping("/error")
    public String error(){
        return "Could not start-up application";
    }



}
