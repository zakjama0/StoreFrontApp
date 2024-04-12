package com.example.capstone_project.repositories;

import com.example.capstone_project.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
