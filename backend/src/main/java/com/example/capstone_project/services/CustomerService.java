package com.example.capstone_project.services;

import com.example.capstone_project.models.Customer;
import com.example.capstone_project.models.CustomerDTO;
import com.example.capstone_project.models.PasswordDTO;
import com.example.capstone_project.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> getAllCustomers (){
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById (long id){
        return customerRepository.findById(id);
    }

    public Customer saveCustomer(Customer customer){
        Customer newCustomer = new Customer(customer.getName(), customer.getEmail(), customer.getPassword());
        return customerRepository.save(newCustomer);
    }

    public Optional<Customer> updateCustomer(Long id, CustomerDTO customerDTO){

        Optional<Customer> customerToUpdate = customerRepository.findById(id);

        if(customerToUpdate.isPresent()) {
            customerToUpdate.get().setName(customerDTO.getName());
            customerToUpdate.get().setEmail(customerDTO.getEmail());
            customerToUpdate.get().setPassword(customerDTO.getPassword());
            customerRepository.save(customerToUpdate.get());
        }

        return customerToUpdate;
    }

    public Boolean checkPassword(Long id, PasswordDTO passwordDTO) {
        Customer customer = customerRepository.findById(id).get();
        return Objects.equals(customer.getPassword(), passwordDTO.getPasswordAttempt());
    }
}
