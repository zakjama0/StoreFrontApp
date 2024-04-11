package com.example.capstone_project.repositories;

import com.example.capstone_project.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
