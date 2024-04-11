package com.example.capstone_project.models;

import jakarta.persistence.*;

@Entity
@Table(name="ordered_item")
public class OrderedItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @OneToMany(mappedBy = "orders")
    private long orderId;

    @OneToMany(mappedBy = "items")
    private long itemId;

    public OrderedItem() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }
}
