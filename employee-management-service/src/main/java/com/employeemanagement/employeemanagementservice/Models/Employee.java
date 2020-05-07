package com.employeemanagement.employeemanagementservice.Models;

import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import java.io.Serializable;
import java.util.Date;

@RedisHash("employee")
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String FirstName;
    private String LastName;
    private String Location;
    private String Date_Joined;
    private String profile_pic_address;
    private String Position;
    private int grade;


    public Employee(String FirstName, String LastName){
        this.setFirstName(FirstName);
        this.setLastName(LastName);
    }

    public Employee(){}
    public String getBpid() {
        return id;
    }

    public void setBpid(String bpid) {
        this.id = bpid;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public String getDate_Joined() {
        return Date_Joined;
    }

    public void setDate_Joined(String date_Joined) {
        Date_Joined = date_Joined;
    }

    public String getProfile_pic_address() {
        return profile_pic_address;
    }

    public void setProfile_pic_address(String profile_pic_address) {
        this.profile_pic_address = profile_pic_address;
    }

    public String getPosition() {
        return Position;
    }

    public void setPosition(String position) {
        Position = position;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    // ...
}
