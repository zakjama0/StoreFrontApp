package com.example.capstone_project.repositories;

import com.example.capstone_project.models.Category;
import com.example.capstone_project.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByCategory(Category category);
}
