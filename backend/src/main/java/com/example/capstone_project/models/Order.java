package com.example.capstone_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @Column
    private String address;

    @OneToMany(mappedBy = "order")
    private List<OrderedItem> orderedItems;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    @JsonIgnoreProperties({"orders"})
    private Customer customer;

    @Column
    private OrderStatus orderStatus;

    public Order(){
    }

    public Order(String address, List<OrderedItem> orderedItems, Customer customer, OrderStatus orderStatus) {
        this.address = address;
        this.orderedItems = orderedItems;
        this.customer = customer;
        this.orderStatus = orderStatus;
    }

    public Order(OrderStatus orderStatus, Customer customer) {
        this.orderStatus = orderStatus;
        this.customer = customer;
        this.orderedItems = new ArrayList<>();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<OrderedItem> getOrderedItems() {
        return orderedItems;
    }

    public void setOrderedItems(List<OrderedItem> orderedItems) {
        this.orderedItems = orderedItems;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }
}
