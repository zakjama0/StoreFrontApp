package com.example.capstone_project.services;

import com.example.capstone_project.models.Review;
import com.example.capstone_project.models.ReviewDTO;
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
    public Review saveReview (Review review){
        return reviewRepository.save(review);
    }

    public Optional<Review> updateReview(Long id, ReviewDTO reviewDTO){
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
}
