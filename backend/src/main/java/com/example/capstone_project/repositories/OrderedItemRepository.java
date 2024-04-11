package com.example.capstone_project.repositories;

import com.example.capstone_project.models.OrderedItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderedItemRepository extends JpaRepository<OrderedItem, Long> {
}
