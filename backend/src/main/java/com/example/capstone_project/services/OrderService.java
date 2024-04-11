package com.example.capstone_project.services;

import com.example.capstone_project.models.Customer;
import com.example.capstone_project.models.NewOrderDTO;
import com.example.capstone_project.models.Order;
import com.example.capstone_project.models.OrderedItem;
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

    public Order addOrder(NewOrderDTO newOrderDTO) {


    }

    public Optional<Order> getById(Long id) {
        return orderRepository.findById(id);
    }

    public Optional<Order> updateOrderStatus(Long orderId, Long customerId) {
        Optional<Order> order = orderRepository.findById(orderId);
        if (order.isEmpty()) {
            return Optional.empty();
        }

        Optional<Customer> customer = customerRepository.findById(customerId);
        if (customer.isEmpty()) {
            return Optional.empty();
        }

        orderRepository.save(order.get());
        return order;
    }
}
