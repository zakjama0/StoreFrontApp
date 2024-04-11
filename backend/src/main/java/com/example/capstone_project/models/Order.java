package com.example.capstone_project.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @Column
    private String address;

    @Column
    private List<OrderedItem> orderedItems;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    public Order(){
    }

    public Order (String address, List<OrderedItem> orderedItems, Customer customer){
        this.address = address;
        this.orderedItems = orderedItems;
        this.customer = customer;
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
}
