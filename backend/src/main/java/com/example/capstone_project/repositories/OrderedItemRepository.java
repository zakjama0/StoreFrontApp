package com.example.capstone_project.repositories;

import com.example.capstone_project.models.Order;
import com.example.capstone_project.models.OrderedItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderedItemRepository extends JpaRepository<OrderedItem, Long> {

//    @Query("SELECT o FROM OrderedItem o WHERE o.order.id = :orderId")
    List<OrderedItem> findOrderedItemsByOrderId(Long orderId);

//    @Query("SELECT o FROM OrderedItem o WHERE o.item.id = :itemId")
    List<OrderedItem> findOrderedItemsByItemId(Long itemId);
}
