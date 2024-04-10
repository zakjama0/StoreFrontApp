package com.example.capstone_project.models;

import java.util.ArrayList;

public class NewOrderDTO {
    private OrderStatus orderStatus;
    private Long customerId;
    private ArrayList<OrderedItem> orderedItems;

    public NewOrderDTO(OrderStatus orderStatus, Long customerId, ArrayList<OrderedItem> orderedItems){
        this.orderStatus = orderStatus;
        this.orderedItems= new ArrayList<>();
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
}
