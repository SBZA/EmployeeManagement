package com.employeemanagement.employeemanagementservice;

import com.employeemanagement.employeemanagementservice.Models.Employee;
import com.employeemanagement.employeemanagementservice.Repositories.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class EmployeeRunner implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeRunner.class);

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        logger.info("initializing users");

        Employee Mo = new Employee();Mo.setBpid("mo@gmail.com");Mo.setFirstName("Moses");
        employeeRepository.save(Mo);
        Employee Soy = new Employee();Soy.setBpid("soy@gmail.com");Soy.setFirstName("Soy");
        employeeRepository.save(Soy);
        Employee Echo = new Employee();Echo.setBpid("echo@gmail.com");Echo.setFirstName("Echothab");
        employeeRepository.save(Echo);
        Employee Mosaic = new Employee();Mosaic.setBpid("mosaic@gmail.com");Mosaic.setFirstName("Soymosaic");
        employeeRepository.save(Mosaic);
    }
}
