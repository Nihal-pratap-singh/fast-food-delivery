import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    const handleAddToCart = () => {
        addToCart(id);
    };
    
    const handleRemoveFromCart = () => {
        removeFromCart(id);
    };
    

    return (
        <div className='fooditem'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt={name} />
                {cartItems[id] === undefined || cartItems[id] === 0 ? (
                    <img 
                        className='add' 
                        onClick={handleAddToCart} 
                        src={assets.add_icon_white} 
                        alt="Add to cart"
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img 
                            onClick={handleRemoveFromCart} 
                            src={assets.remove_icon_red} 
                            alt="Remove from cart"
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            onClick={handleAddToCart} 
                            src={assets.add_icon_green} 
                            alt="Add to cart"
                        />
                    </div>
                )}
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
