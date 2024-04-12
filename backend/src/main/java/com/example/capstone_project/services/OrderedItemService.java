package com.example.capstone_project.services;

import com.example.capstone_project.exceptions.CantUpdateOrderException;
import com.example.capstone_project.exceptions.NotEnoughStockException;
import com.example.capstone_project.models.*;
import com.example.capstone_project.repositories.ItemRepository;
import com.example.capstone_project.repositories.OrderRepository;
import com.example.capstone_project.repositories.OrderedItemRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class OrderedItemService {

    @Autowired
    OrderedItemRepository orderedItemRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    ItemRepository itemRepository;

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

    @Transactional
    public OrderedItem saveOrderedItem(NewOrderedItemDTO newOrderedItemDTO) throws Exception {
        Item item = itemRepository.findById(newOrderedItemDTO.getItemId()).get();
        Order order = orderRepository.findById(newOrderedItemDTO.getOrderId()).get();

        if(newOrderedItemDTO.getOrderQuantity() > item.getQuantity()){
            throw new NotEnoughStockException("Not enough stock");
        }
        if(order.getOrderStatus() == OrderStatus.OUT_FOR_DELIVERY || order.getOrderStatus() == OrderStatus.DELIVERED || order.getOrderStatus() == OrderStatus.CANCELLED){
            throw new CantUpdateOrderException("Cannot change order");
        }
        OrderedItem orderedItem = new OrderedItem(orderRepository.findById(newOrderedItemDTO.getOrderId()).get(),
                item, newOrderedItemDTO.getOrderQuantity());

        item.addToOrderedItems(newOrderedItemDTO.getOrderQuantity());
        itemRepository.save(item);
        orderedItemRepository.save(orderedItem);
        return orderedItem;

    }
}

