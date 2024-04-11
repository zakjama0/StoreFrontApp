package com.example.capstone_project.components;

import com.example.capstone_project.models.Customer;
import com.example.capstone_project.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.xml.crypto.Data;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    OrderedItemRepository orderedItemRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ReviewRepository reviewRepository;

    public DataLoader(){

    }

    @Override
    public void run(ApplicationArguments arguments) throws Exception {

        Customer customer1 = new Customer("Marvellous", "marvellous@schrutefarms.com");
        Customer customer2 = new Customer("Saba", "saba@schrutefarms.com");
        Customer customer3 = new Customer("Zakaria", "zakaria@schrutefarms.com");
        Customer customer4 = new Customer("Birindar", "birindar@schrutefarms.com");
        Customer customer5 = new Customer("Tadiwanashe", "tadiwanashe@schrutefarms.com");

        customerRepository.save(customer1);
        customerRepository.save(customer2);
        customerRepository.save(customer3);
        customerRepository.save(customer4);
        customerRepository.save(customer5);
    }

}
