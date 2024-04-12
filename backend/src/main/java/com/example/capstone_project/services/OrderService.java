package com.example.capstone_project.services;

import com.example.capstone_project.models.*;
import com.example.capstone_project.repositories.CustomerRepository;
import com.example.capstone_project.repositories.OrderRepository;
import com.example.capstone_project.repositories.OrderedItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    OrderedItemRepository orderedItemRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }


    public Optional<Order> getById(Long id) {
        return orderRepository.findById(id);
    }

    public Order updateOrderStatus(NewOrderDTO newOrderDTO, Long id) {
        Order orderToUpdate = orderRepository.findById(id).get();
        OrderStatus orderStatusToUpdate = newOrderDTO.getOrderStatus();
        orderToUpdate.setOrderStatus(orderStatusToUpdate);
        orderRepository.save(orderToUpdate);
        return orderToUpdate;
    }

    public Order saveOrder(NewOrderDTO newOrderDTO) {

        Optional <Customer> customer = customerRepository.findById(newOrderDTO.getCustomerId());
        if (customer.isEmpty()){
            return null;
        }

        Order order = new Order(OrderStatus.PENDING, customer.get());
        orderRepository.save(order);
        return order;
    }

}
