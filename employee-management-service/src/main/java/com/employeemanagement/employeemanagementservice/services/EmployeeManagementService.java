package com.employeemanagement.employeemanagementservice.services;

import com.employeemanagement.employeemanagementservice.Models.Employee;
import com.employeemanagement.employeemanagementservice.Repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeManagementService implements IEmployeeManagementService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> findAll() {

        Iterable<Employee> employeeIterable = employeeRepository.findAll();

        ArrayList<Employee> users = new ArrayList<Employee>();
        employeeIterable.forEach(e ->
                {
                    if(e != null) users.add(e);});
        return users;
    }

    public Optional<Employee> findById(String id) {

        return employeeRepository.findById(id);
    }

    public void save(Employee employee) {
        employeeRepository.save(employee);
    }

    public Long count() {
        return employeeRepository.count();
    }

    public void deleteAllEmployees() {
        employeeRepository.deleteAll();
    }

    public void deleteByUserId(String id) {
        employeeRepository.deleteById(id);
    }

    public void deleteEmployee(Employee employee) {
        employeeRepository.delete(employee);
    }
}
