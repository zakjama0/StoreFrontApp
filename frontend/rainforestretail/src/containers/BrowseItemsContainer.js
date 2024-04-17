import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemThumbnail from "../components/ItemThumbnail";

const BrowseItemsContainer = ({ items }) => {
    
    const categories = Array.from(new Set(items.map(item => item.category)));

   
    const [selectedCategory, setSelectedCategory] = useState('All');

    
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

   
    const filteredItems = selectedCategory === 'All' ? items : items.filter(item => item.category === selectedCategory);

    return (
        <div>
           
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="All">All Categories</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>

            
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>
                       
                        <Link to={`/items/${item.id}`}><ItemThumbnail item={item} /></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseItemsContainer;
