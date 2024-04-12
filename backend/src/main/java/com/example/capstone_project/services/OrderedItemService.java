package com.example.capstone_project.services;

import com.example.capstone_project.models.OrderedItem;
import com.example.capstone_project.repositories.OrderedItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class OrderedItemService {

    @Autowired
    OrderedItemRepository orderedItemRepository;

    public List<OrderedItem> findAllOrderedItems() {
        return orderedItemRepository.findAll();
    }

    public Optional<OrderedItem> findOrderedItemsbyOrderId(Long id) {
            return orderedItemRepository.findById(id);
        }

    public Optional<OrderedItem> foundOrderedItemsbyItemId(Long id) {
        return orderedItemRepository.findById(id);
    }

    public OrderedItem updateOrderedItemById(Long id, int orderedQuantity) {

        OrderedItem orderedItemToUpdate = orderedItemRepository.findById(id).orElse(null);

        if (orderedItemToUpdate != null) {
            orderedItemToUpdate.setOrderedQuantity(orderedQuantity);
            return orderedItemRepository.save(orderedItemToUpdate);
        }

        return null;
    }

    public Optional<OrderedItem> removeOrderedItem (Long id) {
        Optional<OrderedItem> message = orderedItemRepository.findById(id);
        orderedItemRepository.deleteById(id);
        return message;
    }
}

