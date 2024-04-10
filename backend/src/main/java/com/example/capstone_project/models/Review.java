package com.example.capstone_project.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "rating")
    private int rating;

    @Column(name = "comment")
    private String comment;

    @Column
    private Customer customer;

    @OneToMany(mappedBy = "review")
    @JoinColumn(name = "item_id")
    private Item item;

    @JoinColumn(name = "customer_id")
//    @JsonIgnoreProperties({"review", "comment", "rating"})
    private int review;

    public Review() {
    }

    public Review(int rating, String comment, Item item, Customer customer) {
        this.rating = rating;
        this.comment = comment;
        this.item = item;
        this.customer =customer;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public int getReview() {
        return review;
    }

    public void setReview(int review) {
        this.review = review;
    }
}

//SETTER AND GETTERS




