package com.example.capstone_project.models;

import java.util.ArrayList;

public class NewOrderDTO {

    private OrderStatus orderStatus;

    private Long customerId;

    private String address;

    private ArrayList<OrderedItem> orderedItems;

    public NewOrderDTO() {
    }

    public NewOrderDTO(Long customerId, String address) {
        this.customerId = customerId;
        this.address = address;
    }

    public NewOrderDTO(OrderStatus orderStatus, Long customerId, String address){
        this.orderStatus = orderStatus;
        this.customerId = customerId;
        this.orderedItems = new ArrayList<>();
        this.address = address;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public ArrayList<OrderedItem> getOrderedItems() {
        return orderedItems;
    }

    public void setOrderedItems(ArrayList<OrderedItem> orderedItems) {
        this.orderedItems = orderedItems;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
