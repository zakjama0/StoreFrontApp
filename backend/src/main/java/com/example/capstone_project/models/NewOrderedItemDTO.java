package com.example.capstone_project.models;

public class NewOrderedItemDTO {

    private Long itemId;

    private Long orderId;
    private int orderQuantity;

    public NewOrderedItemDTO(Long itemId, Long orderId, int orderQuantity){
        this.itemId = itemId;
        this.orderId = orderId;
        this.orderQuantity = orderQuantity;
    }

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public int getOrderQuantity() {
        return orderQuantity;
    }

    public void setOrderQuantity(int orderQuantity) {
        this.orderQuantity = orderQuantity;
    }
}
