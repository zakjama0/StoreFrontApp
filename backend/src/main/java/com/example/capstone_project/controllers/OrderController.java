package com.example.capstone_project.controllers;

import com.example.capstone_project.models.Customer;
import com.example.capstone_project.models.NewOrderDTO;
import com.example.capstone_project.models.Order;
import com.example.capstone_project.services.CustomerService;
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

    @Autowired
    CustomerService customerService;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders(){
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id){
        Optional<Order> order = orderService.getById(id);
        if(order.isPresent()){
            return new ResponseEntity<>(order.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/customer/{id}")
    public ResponseEntity<List<Order>> getOrdersByCustomerId(@PathVariable Long id){
        Optional<Customer> customer = customerService.getCustomerById(id);
        if(customer.isPresent()){
            List<Order> orders = orderService.getOrdersByCustomerId(id);
            return new ResponseEntity<>(orders, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/order-cost/{id}")
    public ResponseEntity<Integer> calculateOrderCost(@PathVariable long id){
        Optional<Order> optionalOrder = orderService.getById(id);
        if(optionalOrder.isPresent()){
            Integer orderCost = optionalOrder.get().calculateOrderCost();
            return new ResponseEntity<>(orderCost, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Order> addOrder(@RequestBody NewOrderDTO newOrderDTO){
        Optional<Customer> customer = customerService.getCustomerById(newOrderDTO.getCustomerId());
        if(customer.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        Order newOrder = orderService.saveOrder(newOrderDTO);
        return new ResponseEntity<>(newOrder, HttpStatus.CREATED);
    }

//    @PatchMapping(value = "/admin/{id}")
//    public ResponseEntity<Order> updateOrderStatus(@RequestBody NewOrderDTO newOrderDTO, @PathVariable Long id){
//        Optional<Order> orderToUpdate = orderService.getById(id);
//        if(orderToUpdate.isPresent()) {
//            Order updatedOrder = orderService.updateOrderStatus(newOrderDTO, id);
//            return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
//        }
//        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
//    }
}

