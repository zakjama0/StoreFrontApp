package com.example.capstone_project.controllers;

import com.example.capstone_project.models.OrderedItem;
import com.example.capstone_project.services.OrderedItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ordered-items")
public class OrderedItemController {

    @Autowired
    OrderedItemService orderedItemService;

    @GetMapping
    public ResponseEntity<List<OrderedItem>> getAllOrderedItems(){
        List<OrderedItem> orderedItems = orderedItemService.findAllOrderedItems();
        return new ResponseEntity<>(orderedItems, HttpStatus.OK);
    }

    //    Get by orderId
    @GetMapping(value = "/{id}/orders")
    public ResponseEntity<OrderedItem> getOrderedItemsByOrderId(@PathVariable Long id){
        Optional<OrderedItem> foundOrderedItems = orderedItemService.findOrderedItemsByOrderId(id);
        if(foundOrderedItems.isPresent()){
            return new ResponseEntity<>(foundOrderedItems.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

//     Get by itemId
    @GetMapping(value = "/{id}/items")
    public ResponseEntity<OrderedItem> getOrderedItemsByItemId(@PathVariable Long id){
        Optional<OrderedItem> foundOrderedItemsByItem = orderedItemService.foundOrderedItemsByItemId(id);
        if(foundOrderedItemsByItem.isPresent()){
            return new ResponseEntity<>(foundOrderedItemsByItem.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<OrderedItem> updateOrderedItem(@PathVariable Long id, @RequestBody int orderedQuantity) {
        Optional<OrderedItem> ordereditemOptional = orderedItemService.findOrderedItemsByOrderId(id);
        if (ordereditemOptional.isPresent()) {
            OrderedItem updatedOrderedItem = orderedItemService.updateOrderedItemById(id, orderedQuantity);
            return new ResponseEntity<>(updatedOrderedItem, HttpStatus.OK);

        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<OrderedItem> removeOrderedItem(@PathVariable Long id){
        Optional<OrderedItem> deletedOrderedItem = orderedItemService.removeOrderedItem(id);
        if(deletedOrderedItem.isPresent()){
            return new ResponseEntity<>(deletedOrderedItem.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}



