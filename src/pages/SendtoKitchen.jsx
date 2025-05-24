import React, { useState } from 'react';
import beginner1 from "../assets/images/bbq_beef_burger_combo.jpg";
import beginner2 from "../assets/images/bbq_beef_burger.jpg";
import beginner3 from "../assets/images/veg_burger.jpg";
import pro1 from "../assets/images/beef_burger_combo.jpg";
import pro2 from "../assets/images/beef_burger.jpg";
import pro3 from "../assets/images/veg_burger_combo.jpg";
import pro4 from "../assets/images/cheese_burger_combo.jpg";
import pro5 from "../assets/images/cheese_burger.jpg";
import sauces3 from "../assets/images/garlic_sauce.jpg";
import sauces4 from "../assets/images/ketchup.jpg";
import sauces5 from "../assets/images/spicy_sauce.jpg";
import sauces6 from "../assets/images/bbq_sauce.jpg";
import sauces7 from "../assets/images/burger_sauce.jpg";
import drinks1 from "../assets/images/coca_cola.jpg";
import drinks2 from "../assets/images/fanta.jpg";
import drinks3 from "../assets/images/sprite.jpg";
import drinks4 from "../assets/images/strawberry_lassi.png";
import drinks5 from "../assets/images/sweet_lassi.png";
import drinks6 from "../assets/images/mango_lassi.png";
import others1 from "../assets/images/chicken_65.jpg";
import others2 from "../assets/images/chicken_burger_combo.jpg";
import others3 from "../assets/images/chicken_burger.jpg";
import others4 from "../assets/images/chicken_lollipops.jpg";
import others5 from "../assets/images/chicken_wings.jpg";
import others6 from "../assets/images/double_beef_burger_combo.jpg";
import others7 from "../assets/images/double_beef_burger.jpg";
import others8 from "../assets/images/french_fries.jpg";
import others9 from "../assets/images/img_7944.jpg";
import others10 from "../assets/images/onion_pakoda.jpg";
import others11 from "../assets/images/chef_special_spicy_beef_burger_combo.jpg";
import others12 from "../assets/images/chef_special_spicy_beef_burger.jpg";
import others13 from "../assets/images/chef_special_spicy_chicken_burger_combo.jpg";
import others14 from "../assets/images/chef_special_spicy_chicken_burger.jpg";
import others15 from "../assets/images/chef_special_spicy_veg_burger_combo.jpg";
import others16 from "../assets/images/chef_special_spicy_veg_burger.jpg";
import { useNavigate } from 'react-router-dom';
import { WebRoutes } from '../constants/routes';

const menuItems = [
    { id: 1, img: beginner1, title: "Beer-Cheese Bacon", price: 160, section: "BEGINNER" },
    { id: 2, img: beginner2, title: "Steak Burger", price: 140, section: "BEGINNER" },
    { id: 3, img: beginner3, title: "Cheese Mushroom", price: 150, section: "BEGINNER" },
    { id: 4, img: pro1, title: "Steak Burger", price: 200, section: "PRO" },
    { id: 5, img: pro2, title: "Beer-Cheese Bacon", price: 220, section: "PRO" },
    { id: 6, img: pro3, title: "Cheese Mushroom", price: 210, section: "PRO" },
    { id: 7, img: pro4, title: "Cheese Burger Combo", price: 150, section: "PRO" },
    { id: 8, img: pro5, title: "Cheese Burger", price: 130, section: "PRO" },
    { id: 9, img: sauces3, title: "Garlic Sauce", price: 50, section: "SAUCES" },
    { id: 10, img: sauces4, title: "Ketchup", price: 40, section: "SAUCES" },
    { id: 11, img: sauces5, title: "Spicy Sauce", price: 60, section: "SAUCES" },
    { id: 12, img: sauces6, title: "BBQ SAUCE", price: 60, section: "SAUCES" },
    { id: 13, img: sauces7, title: "BURGER SAUCE", price: 60, section: "SAUCES" },
    { id: 14, img: drinks1, title: "Coca-Cola", price: 80, section: "DRINKS" },
    { id: 15, img: drinks2, title: "Fanta", price: 80, section: "DRINKS" },
    { id: 16, img: drinks3, title: "Sprite", price: 80, section: "DRINKS" },
    { id: 17, img: drinks4, title: "Strawberry Lassi", price: 100, section: "DRINKS" },
    { id: 18, img: drinks5, title: "Sweet Lassi", price: 90, section: "DRINKS" },
    { id: 19, img: drinks6, title: "MANGO LASSI", price: 80, section: "DRINKS" },
    { id: 20, img: others1, title: "Chicken 65", price: 150, section: "OTHERS" },
    { id: 21, img: others2, title: "Chicken Burger Combo", price: 200, section: "OTHERS" },
    { id: 22, img: others3, title: "Chicken Burger", price: 180, section: "OTHERS" },
    { id: 23, img: others4, title: "Chicken Lollipops", price: 160, section: "OTHERS" },
    { id: 24, img: others5, title: "Chicken Wings", price: 170, section: "OTHERS" },
    { id: 25, img: others6, title: "Double Beef Burger Combo", price: 250, section: "OTHERS" },
    { id: 26, img: others7, title: "Double Beef Burger", price: 230, section: "OTHERS" },
    { id: 27, img: others8, title: "French Fries", price: 100, section: "OTHERS" },
    { id: 28, img: others9, title: "Chef Special", price: 200, section: "OTHERS" },
    { id: 29, img: others10, title: "Onion Pakoda", price: 90, section: "OTHERS" },
    { id: 30, img: others11, title: "CHEF SPECIAL SPICY BEEF BURGER COMBO", price: 90, section: "OTHERS" },
    { id: 31, img: others12, title: "CHEF SPECIAL SPICY BEEF BURGER", price: 90, section: "OTHERS" },
    { id: 32, img: others13, title: "CHEF SPECIAL SPICY CHICKEN BURGER COMBO", price: 90, section: "OTHERS" },
    { id: 33, img: others14, title: "CHEF SPECIAL SPICY CHICKEN BURGER", price: 90, section: "OTHERS" },
    { id: 34, img: others15, title: "CHEF SPECIAL SPICY VEG BURGER COMBO", price: 90, section: "OTHERS" },
    { id: 35, img: others16, title: "CHEF SPECIAL SPICY VEG BURGER", price: 90, section: "OTHERS" },
];

const SendtoKitchen = ({ cart, addToCart, setCart }) => {
    const navigate = useNavigate();
    
    const groupedMenuItems = menuItems.reduce((acc, item) => {
        if (!acc[item.section]) {
            acc[item.section] = [];
        }
        acc[item.section].push(item);
        return acc;
    }, {});

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
            <h2 className="text-4xl text-center mb-8">Place Your Order</h2>

            {Object.entries(groupedMenuItems).map(([section, items]) => (
                <div key={section} className="mb-12">
                    <h3 className="text-3xl text-center mb-6">— {section} —</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {items.map(item => (
                            <div key={item.id} className="flex flex-col items-center text-center">
                                <img src={item.img} alt={item.title} className="w-[400px] h-[400px] object-cover rounded-lg shadow-md mb-4" />
                                <p className="text-xl">{item.title} <br /> <span className="text-lg font-light">P{item.price}</span></p>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Simple Cart Display */}
            <div className="mt-20">
                <h3 className="text-3xl text-center mb-6">Your Order</h3>
                {cart.length === 0 ? (
                    <p className="text-center">Your cart is empty.</p>
                ) : (
                    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-2">
                                <span>{item.title} (x{item.quantity})</span>
                                <span>P{(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="flex justify-between items-center mt-4 font-bold">
                            <span>Total:</span>
                            <span>P{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                        </div>
                        {/* Add a button to send the order later */}
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

export default SendtoKitchen; 