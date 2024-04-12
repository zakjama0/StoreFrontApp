package com.example.capstone_project.repositories;

import com.example.capstone_project.models.Customer;
import com.example.capstone_project.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByItemId(long id);
    List<Review> findByCustomerId(long id);

    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.item.id = :itemId")
    Double findAvgRatingByItemId(Long itemId);

    List<Review> findByCustomerId(Long customerId);
}
