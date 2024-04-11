package com.example.capstone_project.services;

import com.example.capstone_project.models.Customer;
import com.example.capstone_project.models.CustomerDTO;
import com.example.capstone_project.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;


    public Customer saveCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public Optional<Customer> getCustomerById (long id){
        return customerRepository.findById(id);
    }

    public List<Customer> getAllCustomers (){
        return customerRepository.findAll();
    }

    public Customer updateCustomer(Long id, CustomerDTO customerDTO){
        Customer customerToUpdate = customerRepository.findById(id).get();
        customerToUpdate.setName(customerDTO.getName());
        customerToUpdate.setEmail(customerDTO.getEmail());
        customerRepository.save(customerToUpdate);
        return customerToUpdate;
    }




}
