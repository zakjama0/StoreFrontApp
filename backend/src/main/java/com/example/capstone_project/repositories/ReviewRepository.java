package com.example.capstone_project.repositories;

import com.example.capstone_project.models.Customer;
import com.example.capstone_project.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByItemId(long id);
    List<Review> findByCustomerId(long id);
}
