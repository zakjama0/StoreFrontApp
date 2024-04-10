package com.example.capstone_project.models;

import jakarta.persistence.*;

@Entity
@Table(name="ordereditem")
public class OrderedItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;



}
