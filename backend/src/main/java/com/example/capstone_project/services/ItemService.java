package com.example.capstone_project.services;

import com.example.capstone_project.models.Category;
import com.example.capstone_project.models.Item;
import com.example.capstone_project.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;


public class ItemService {
    @Autowired
    ItemRepository itemRepository;

    public List<Item> getByCategory(Category category) {
    return itemRepository.findByCategory(category);
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Optional<Item> getItemById(Long id) {
        return itemRepository.findById(id);
    }
}
