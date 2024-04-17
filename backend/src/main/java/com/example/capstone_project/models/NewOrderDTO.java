package com.example.capstone_project.models;

public class NewOrderDTO {

    private Long customerId;

    private String address;

    public NewOrderDTO() {
    }

    public NewOrderDTO(Long customerId, String address) {
        this.customerId = customerId;
        this.address = address;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
