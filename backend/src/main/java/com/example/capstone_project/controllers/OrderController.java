package com.example.capstone_project.controllers;

import com.example.capstone_project.models.NewOrderDTO;
import com.example.capstone_project.models.Order;
import com.example.capstone_project.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders(){
        List<Order> blogs = orderService.getAllOrders();
        return new ResponseEntity<>(blogs, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id){
        Optional<Order> order = orderService.getById(id);
        if(order.isPresent()){
            return new ResponseEntity<>(order.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Order> addOrder(@RequestBody NewOrderDTO newOrderDTO){
        Order newOrder = orderService.addOrder(newOrderDTO);
        return new ResponseEntity<>(newOrder, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{orderId}/{customerId}/address")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long orderId, @PathVariable Long customerId){
        //Looks for specific post
        Optional<Order> order = orderService.updateOrderStatus(orderId, customerId);
        if(order.isPresent()){
            return new ResponseEntity<>(order.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}

