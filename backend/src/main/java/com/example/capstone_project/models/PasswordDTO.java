package com.example.capstone_project.models;

public class PasswordDTO {

    private String passwordAttempt;

    public PasswordDTO(){

    }

    public PasswordDTO(String passwordAttempt) {
        this.passwordAttempt = passwordAttempt;
    }

    public String getPasswordAttempt() {
        return passwordAttempt;
    }

    public void setPasswordAttempt(String passwordAttempt) {
        this.passwordAttempt = passwordAttempt;
    }
}
