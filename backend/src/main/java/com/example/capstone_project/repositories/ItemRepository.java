package com.example.capstone_project.repositories;

import com.example.capstone_project.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
