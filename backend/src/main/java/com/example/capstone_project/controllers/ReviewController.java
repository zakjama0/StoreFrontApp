package com.example.capstone_project.controllers;

import com.example.capstone_project.models.Review;
import com.example.capstone_project.models.ReviewDTO;
import com.example.capstone_project.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/reviews")
public class ReviewController {
    @Autowired
    ReviewService reviewService;

    @GetMapping
    public ResponseEntity<List<Review>> getAllReviews(){
        List<Review> reviews = reviewService.getAllReviews();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable Long id){
        Optional<Review> review = reviewService.getReviewById(id);
        if(review.isPresent()){
            return new ResponseEntity<>(review.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @GetMapping(value = "/item/{id}")
    public ResponseEntity<List<Review>> getReviewsByItemId(@PathVariable Long id){
        List<Review> reviews = reviewService.getReviewsByItemId(id);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }
    @GetMapping(value = "/customer/{id}")
    public ResponseEntity<List<Review>> getReviewsByCustomerId(@PathVariable Long id){
        List<Review> reviews = reviewService.getReviewsByCustomerId(id);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Review> addReview (@RequestBody Review review){
        Review newReview = reviewService.saveReview(review);
        return new ResponseEntity<>(newReview, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable Long id, @RequestBody ReviewDTO reviewDTO){
        Optional<Review> updatedReview = reviewService.updateReview(id, reviewDTO);
        if(updatedReview.isPresent()){
            return new ResponseEntity<>(updatedReview.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Long> deleteReview(@PathVariable Long id){
        reviewService.deleteReview(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
