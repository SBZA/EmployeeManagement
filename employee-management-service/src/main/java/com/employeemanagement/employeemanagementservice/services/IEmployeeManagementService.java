package com.employeemanagement.employeemanagementservice.services;

import com.employeemanagement.employeemanagementservice.Models.Employee;

import java.util.Optional;

public interface IEmployeeManagementService {
    // UPDATE & CREATE
    void save(Employee employee);
    // READ
    Iterable<Employee> findAll();
    Optional<Employee> findById(String id);
    Long count();
    // DELETE
    void deleteAllEmployees();
    void deleteByUserId(String id);
    void deleteEmployee(Employee employee);
}
