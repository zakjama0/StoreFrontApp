package com.example.capstone_project.components;

import com.example.capstone_project.models.*;
import com.example.capstone_project.repositories.*;
import com.example.capstone_project.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


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
        Item item6 = new Item("Tadiwa's Wig", "", Category.BEAUTY_AND_WELLNESS, 50, 999, "Wigs that will make you look beautiful");
        Item item7 = new Item("Time of my Life", "", Category.BOOKS, 1, 1229, "Book that described Saba's capstone project experience.");
        Item item8 = new Item("Birimdar's second screen", "", Category.ELECTRONICS, 1, 9999, "To help with your programming problems");
        Item item9 = new Item("Zakaria's Leather Jacket", "", Category.FASHION, 1, 799, "Ready for NY fashion week");
        Item item10 = new Item("Fifa 2025", "", Category.VIDEO_GAMES, 1, 3999, "No different from the past year");

        itemRepository.save(item1);
        itemRepository.save(item2);
        itemRepository.save(item3);
        itemRepository.save(item4);
        itemRepository.save(item5);
        itemRepository.save(item6);
        itemRepository.save(item7);
        itemRepository.save(item8);
        itemRepository.save(item9);
        itemRepository.save(item10);

        Review review1 = new Review(4, "Great cup.", customer2, item1);
        Review review2 = new Review(4, "Amazing Wig, feels really authentic", customer1, item6);
        Review review3 = new Review(3, "Great game!", customer4, item10);
        Review review4 = new Review(5, "Looks great on the eyes", customer5, item4);
        Review review5 = new Review(5, "Very sturdy cup.", customer5, item1);

        reviewRepository.save(review1);
        reviewRepository.save(review2);
        reviewRepository.save(review3);
        reviewRepository.save(review4);
        reviewRepository.save(review5);

        NewOrderDTO newOrderDTO1 = new NewOrderDTO(OrderStatus.PENDING, 1L);
        Order order1 = orderService.saveOrder(newOrderDTO1);

    }

}
