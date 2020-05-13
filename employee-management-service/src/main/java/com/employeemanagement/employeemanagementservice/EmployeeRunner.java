package com.employeemanagement.employeemanagementservice;

import com.employeemanagement.employeemanagementservice.Models.Employee;
import com.employeemanagement.employeemanagementservice.Repositories.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.text.SimpleDateFormat;

@Component
public class EmployeeRunner implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeRunner.class);
    private static final String simmonds_address = "5 Simmonds St, Selby, Johannesburg, 2001";
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        logger.info("initializing users");

        Employee Mo = new Employee();
        Mo.setBpid("mo@gmail.com");Mo.setFirstName("Moses");Mo.setLastName("Maluleke");Mo.setPosition("Graduate Trainee");
        Mo.setLocation("Simmonds");
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        Mo.setDate_Joined(formatter.format(date));Mo.setPhoneNumber(Integer.parseInt("0876652232"));
        employeeRepository.save(Mo);

        Employee Kelly = new Employee();
        Kelly.setBpid("kelly@gmail.com");Kelly.setFirstName("Kelly");Kelly.setLastName("Timire");Kelly.setPosition("Graduate Trainee");
        Kelly.setLocation("Simmonds");Kelly.setPhoneNumber(Integer.parseInt("0768823365"));
        Kelly.setDate_Joined(formatter.format(date));
        employeeRepository.save(Kelly);

        Employee Sli = new Employee();
        Sli.setBpid("Sli@gmail.com");Sli.setFirstName("Slindile");Sli.setLastName("Dlomo");Sli.setPosition("Graduate Trainee");
        Sli.setLocation("Simmonds");Sli.setPhoneNumber(Integer.parseInt("0813324456"));
        Sli.setDate_Joined(formatter.format(date));
        employeeRepository.save(Sli);

        Employee Chris = new Employee();
        Chris.setBpid("Chris@gmail.com");Chris.setFirstName("Chris");Chris.setLastName("Thoo");Chris.setPosition("Graduate Trainee");
        Chris.setLocation("Rosebank");Chris.setPhoneNumber(Integer.parseInt("0822345567"));
        Chris.setDate_Joined(formatter.format(date));
        employeeRepository.save(Chris);
    }
}
