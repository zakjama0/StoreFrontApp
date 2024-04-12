package com.example.capstone_project.components;

import com.example.capstone_project.models.*;
import com.example.capstone_project.repositories.*;
import com.example.capstone_project.services.OrderService;
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

    @Autowired
    OrderService orderService;

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

        Item item1 = new Item("Tadiwa's Cup", "", Category.HOME_AND_KITCHEN, 50, 300, "A cup");
        Item item2 = new Item("Zak's Iron", "", Category.HOME_AND_KITCHEN, 25, 20000, "An iron");
        Item item3 = new Item("Saba's Electric Scooter", "", Category.ELECTRONICS, 10, 27900, "Saba's height adjusted electric scooter");
        Item item4 = new Item("Marvellous' Eyeliner", "", Category.BEAUTY_AND_WELLNESS, 100, 1299, "Marvellous' eyeliner");
        Item item5 = new Item("Surrounded By Idiots", "", Category.BOOKS, 1, 999, "Book that described Birindar's capstone project experience.");

        itemRepository.save(item1);
        itemRepository.save(item2);
        itemRepository.save(item3);
        itemRepository.save(item4);
        itemRepository.save(item5);

        NewOrderDTO newOrderDTO1 = new NewOrderDTO(OrderStatus.PENDING, 1L);
        Order order1 = orderService.saveOrder(newOrderDTO1);
//        OrderedItem orderedItem1 = orderedItem

    }

}