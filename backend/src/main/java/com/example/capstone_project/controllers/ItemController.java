package com.example.capstone_project.controllers;

import com.example.capstone_project.models.Category;
import com.example.capstone_project.models.Item;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.capstone_project.services.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/items")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping
    public ResponseEntity<List<Item>> getAllItems(
            @RequestParam(required = false, name = "category")Category category
            ){
        if (category != null){
            return new ResponseEntity<>(itemService.getByCategory(category), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(itemService.getAllItems(), HttpStatus.OK);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable Long id){
        Optional<Item> gotItemById = itemService.getItemById(id);
        if(gotItemById.isPresent()){
            return new ResponseEntity<>(gotItemById.get(),HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}
