import React from 'react';
import './CartItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from './CartSlice';

function CartItem({ onContinueShopping }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    return (
        <div className="cart-item-container">
            <div className="cart-header">
                <h1>Your Cart</h1>
                <button className="continue-shopping" onClick={onContinueShopping}>Continue Shopping</button>
            </div>
            <div className="cart-items-list">
                {cartItems.length === 0 ? (
                    <div>Your cart is empty.</div>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <div className="cart-item-name">{item.name}</div>
                                <div className="cart-item-description">{item.description}</div>
                                <div className="cart-item-cost">{item.cost}</div>
                            </div>
                            <button className="cart-item-button" onClick={() => handleRemoveItem(item)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="cart-total">
                    <h3>Total: ${cartItems.reduce((total, item) => total + parseFloat(item.cost.replace('$', '')), 0).toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
}

export default CartItem;
