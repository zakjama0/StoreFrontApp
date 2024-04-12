package com.example.capstone_project.controllers;


import com.example.capstone_project.exceptions.CantUpdateOrderException;
import com.example.capstone_project.exceptions.NotEnoughStockException;
import com.example.capstone_project.models.Item;
import com.example.capstone_project.models.NewOrderedItemDTO;
import com.example.capstone_project.models.Order;
import com.example.capstone_project.models.OrderedItem;
import com.example.capstone_project.services.ItemService;
import com.example.capstone_project.services.OrderService;
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
    OrderService orderService;

    @Autowired
    ItemService itemService;

    @Autowired
    OrderedItemService orderedItemService;

    @GetMapping
    public ResponseEntity<List<OrderedItem>> getAllOrderedItems(){
        List<OrderedItem> orderedItems = orderedItemService.getAllOrderedItems();
        return new ResponseEntity<>(orderedItems, HttpStatus.OK);
    }

    //    Get by orderId
    @GetMapping(value = "/order/{id}")
    public ResponseEntity<List<OrderedItem>> getOrderedItemsByOrderId(@PathVariable Long id){
        List<OrderedItem> foundOrderedItems = orderedItemService.getOrderedItemsByOrderId(id);
        return new ResponseEntity<>(foundOrderedItems, HttpStatus.OK);
    }

//     Get by itemId
    @GetMapping(value = "/item/{id}")
    public ResponseEntity<List<OrderedItem>> getOrderedItemsByItemId(@PathVariable Long id){
        List<OrderedItem> foundOrderedItemsByItem = orderedItemService.getOrderedItemsByItemId(id);
        return new ResponseEntity<>(foundOrderedItemsByItem, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<OrderedItem> postOrderedItem(@RequestBody NewOrderedItemDTO newOrderedItemDTO){
        Optional<Order> orderOptional = orderService.getById(newOrderedItemDTO.getOrderId());
        if (orderOptional.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        Optional<Item> optionalItem = itemService.getItemById(newOrderedItemDTO.getItemId());
        if(optionalItem.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        try{
            OrderedItem orderedItem = orderedItemService.saveOrderedItem(newOrderedItemDTO);
            return new ResponseEntity<>(orderedItem, HttpStatus.CREATED);
        }
        catch (CantUpdateOrderException exception){
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        }
        catch(NotEnoughStockException exception){
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        }
        catch(Exception exception){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<OrderedItem> updateOrderedItem(@RequestBody NewOrderedItemDTO newOrderedItemDTO, @PathVariable Long id){
        Optional<OrderedItem> orderedItemToUpdate = orderedItemService.getById(id);
        if (orderedItemToUpdate.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        try {
            OrderedItem newOrderedItem = orderedItemService.updateOrderedItemById(newOrderedItemDTO, id);
            return new ResponseEntity<>(newOrderedItem, HttpStatus.OK);
        } catch (CantUpdateOrderException exception) {
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        } catch (NotEnoughStockException exception) {
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        } catch (Exception exception) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
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



