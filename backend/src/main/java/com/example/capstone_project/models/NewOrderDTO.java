package com.example.capstone_project.models;

public class NewOrderDTO {

    private Long customerId;

    private String address;

    private int totalCost;

    public NewOrderDTO() {
    }

    public NewOrderDTO(Long customerId, String address, int totalCost) {
        this.customerId = customerId;
        this.address = address;
        this.totalCost = totalCost;
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

    public int getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(int totalCost) {
        this.totalCost = totalCost;
    }
}
