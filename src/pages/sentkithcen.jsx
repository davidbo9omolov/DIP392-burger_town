import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WebRoutes } from '../constants/routes';

// We'll need a way to get the cart state here. 
// For now, let's assume it's passed as a prop, similar to CartPage.jsx.
// We'll also need setCart if we want to clear the cart after sending the order.
// The menuItems array was used in CartPage for adding items, which won't be needed here.
// We only need the cart state and the setCart function.

const SentToKitchenPage = ({ cart, setCart }) => {
    const navigate = useNavigate();
    
    // Function to handle sending the order
    const sendOrderToKitchen = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before sending the order.");
            return;
        }
        console.log("Sending order to kitchen:", cart);
        // Here you would typically send the order data to a backend API
        
        // Show success message
        alert("Order successfully sent to kitchen!");
        
        // Clear the cart
        setCart([]);

        // Navigate to order status page
        navigate(WebRoutes.ORDER_STATUS);
    };

    return (
        <div className="bg-[#0d0d0d] text-white min-h-screen font-[Kavoon] px-6 md:px-20 py-10">
            <h2 className="text-4xl text-center mb-8">Your Order Details</h2>

            {/* Cart Display */}
            <div className="mt-10">
                {cart.length === 0 ? (
                    <p className="text-center">Your cart is empty.</p>
                ) : (
                    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
                         <h3 className="text-2xl font-semibold mb-4">Items:</h3>
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-2 border-b border-gray-700 pb-2">
                                <span>{item.title} (x{item.quantity})</span>
                                <span>P{(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="flex justify-between items-center mt-4 font-bold">
                            <span>Total:</span>
                            <span>P{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                        </div>
                        {/* Button to send the order */}
                        <button 
                            onClick={sendOrderToKitchen}
                            className="w-full mt-6 px-4 py-2 bg-secondary text-primary rounded hover:bg-[#EFBB8B] transition"
                        >
                            Send to Kitchen
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SentToKitchenPage; 