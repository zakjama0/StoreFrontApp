package com.example.capstone_project.repositories;

import com.example.capstone_project.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
