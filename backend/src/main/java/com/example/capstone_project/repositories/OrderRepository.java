package com.example.capstone_project.repositories;

import com.example.capstone_project.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    @Query("SELECT * FROM orders o WHERE o.customer_id = :customerId")
    List<Order> findOrdersByCustomerId(Long customerId);
}
