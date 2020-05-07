package com.employeemanagement.employeemanagementservice.Repositories;

import com.employeemanagement.employeemanagementservice.Models.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, String> {
}
