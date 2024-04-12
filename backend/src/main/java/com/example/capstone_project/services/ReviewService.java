package com.example.capstone_project.services;

import com.example.capstone_project.models.*;
import com.example.capstone_project.repositories.CustomerRepository;
import com.example.capstone_project.repositories.ItemRepository;
import com.example.capstone_project.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {
    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    ItemRepository itemRepository;
    public List<Review> getAllReviews(){
        return reviewRepository.findAll();
    }
    public Optional<Review> getReviewById (Long id){
        return reviewRepository.findById(id);
    }
    public List<Review> getReviewsByItemId (Long id){
        return reviewRepository.findByItemId(id);
    }
    public List<Review> getReviewsByCustomerId (Long id){
        return reviewRepository.findByCustomerId(id);
    }
    public Review saveReview (NewReviewDTO newReviewDTO){
        Optional<Customer> customer = customerRepository.findById(newReviewDTO.getCustomerId());
        if(customer.isEmpty()){
            return null;
        }

        Optional<Item> item = itemRepository.findById(newReviewDTO.getItemId());
        if(item.isEmpty()){
            return null;
        }

        Review newReview = new Review(newReviewDTO.getRating(), newReviewDTO.getComment(), customer.get(), item.get());
        return reviewRepository.save(newReview);
    }

    public Optional<Review> updateReview(Long id, UpdateReviewDTO reviewDTO){
        Optional<Review> reviewToUpdate = reviewRepository.findById(id);
        if(reviewToUpdate.isPresent()) {
            reviewToUpdate.get().setRating(reviewDTO.getRating());
            reviewToUpdate.get().setComment(reviewDTO.getComment());
            reviewRepository.save(reviewToUpdate.get());
        }
        return reviewToUpdate;
    }
    public void deleteReview(Long id){
        reviewRepository.deleteById(id);
    }

    public Double getAvgRatingByItemId (Long itemId) {
        return reviewRepository.findAvgRatingByItemId(itemId);
    }
}
