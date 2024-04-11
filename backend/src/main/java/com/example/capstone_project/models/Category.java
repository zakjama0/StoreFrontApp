package com.example.capstone_project.models;
public enum Category {

    ELECTRONICS("Electronics"),
    FASHION("Fashion"),
    PAPER("Paper"),
    BEAUTY_AND_WELLNESS("Beauty and Wellness"),
    HOME_AND_KITCHEN("Home and Kitchen"),
    VIDEO_GAMES("Video Games"),
    BOOKS("Books");

    final String displayName;

    Category(String displayName) {
        this.displayName = displayName;
    }

    public static Category valueOfDisplayName(String itemCategory) {
        for (Category category : Category.values()) {
            if (category.displayName.equals(itemCategory)) {
                return category;
            }
        }
        return null;
    }
}