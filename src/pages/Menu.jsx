import React from 'react';
import { useState } from "react";
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

const Menu = ({ onAddToCart }) => {
    const [showPDF, setShowPDF] = useState(false);
    return (
        <div className="bg-[#0d0d0d] text-white min-h-screen font-[Kavoon] px-6 md:px-20 py-10">
            <div className="flex justify-center mb-10">
                <button
                    onClick={() => setShowPDF(true)}
                    className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition"
                >
                    View Full Menu .PDF
                </button>
            </div>
            {showPDF && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg overflow-hidden max-w-5xl w-full h-[80vh] relative">
                        <button
                            onClick={() => setShowPDF(false)}
                            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        >
                            Close
                        </button>
                        <iframe
                            src="https://barents.lv/uploads/files/BARENTS_MENU_0104/Barents_Menu_ENG.pdf"
                            className="w-full h-full"
                            title="Menu PDF"
                        ></iframe>
                    </div>
                </div>
            )}
            {/* BEGINNER Section */}
            <h2 className="text-4xl text-center mb-8">— BEGINNER —</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <BurgerItem img={beginner1} title="Beer-Cheese Bacon" price="P160" onAddToCart={onAddToCart} />
                <BurgerItem img={beginner2} title="Steak Burger" price="P140" onAddToCart={onAddToCart} />
                <BurgerItem img={beginner3} title="Cheese Mushroom" price="P150" onAddToCart={onAddToCart} />
            </div>

            {/* PRO Section */}
            <h2 className="text-4xl text-center mt-16 mb-8">— PRO —</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <BurgerItem img={pro1} title="Steak Burger" price="P200" onAddToCart={onAddToCart} />
                <BurgerItem img={pro2} title="Beer-Cheese Bacon" price="P220" onAddToCart={onAddToCart} />
                <BurgerItem img={pro3} title="Cheese Mushroom" price="P210" onAddToCart={onAddToCart} />
                <BurgerItem img={pro4} title="Cheese Burger Combo" price="P150" onAddToCart={onAddToCart} />
                <BurgerItem img={pro5} title="Cheese Burger" price="P130" onAddToCart={onAddToCart} />
            </div>

            {/* SAUCES Section */}
            <h2 className="text-4xl text-center mt-16 mb-8">— SAUCES —</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <BurgerItem img={sauces3} title="Garlic Sauce" price="P50" onAddToCart={onAddToCart} />
                <BurgerItem img={sauces4} title="Ketchup" price="P40" onAddToCart={onAddToCart} />
                <BurgerItem img={sauces5} title="Spicy Sauce" price="P60" onAddToCart={onAddToCart} />
                <BurgerItem img={sauces6} title="BBQ SAUCE" price="P60" onAddToCart={onAddToCart} />
                <BurgerItem img={sauces7} title="BURGER SAUCE" price="P60" onAddToCart={onAddToCart} />
            </div>

            {/* DRINKS Section */}
            <h2 className="text-4xl text-center mt-16 mb-8">— DRINKS —</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <BurgerItem img={drinks1} title="Coca-Cola" price="P80" onAddToCart={onAddToCart} />
                <BurgerItem img={drinks2} title="Fanta" price="P80" onAddToCart={onAddToCart} />
                <BurgerItem img={drinks3} title="Sprite" price="P80" onAddToCart={onAddToCart} />
                <BurgerItem img={drinks4} title="Strawberry Lassi" price="P100" onAddToCart={onAddToCart} />
                <BurgerItem img={drinks5} title="Sweet Lassi" price="P90" onAddToCart={onAddToCart} />
                <BurgerItem img={drinks6} title="MANGO LASSI" price="P80" onAddToCart={onAddToCart} />
            </div>

            {/* OTHERS (Snacks & Sides) Section */}
            <h2 className="text-4xl text-center mt-16 mb-8">— OTHERS —</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <BurgerItem img={others1} title="Chicken 65" price="P150" onAddToCart={onAddToCart} />
                <BurgerItem img={others2} title="Chicken Burger Combo" price="P200" onAddToCart={onAddToCart} />
                <BurgerItem img={others3} title="Chicken Burger" price="P180" onAddToCart={onAddToCart} />
                <BurgerItem img={others4} title="Chicken Lollipops" price="P160" onAddToCart={onAddToCart} />
                <BurgerItem img={others5} title="Chicken Wings" price="P170" onAddToCart={onAddToCart} />
                <BurgerItem img={others6} title="Double Beef Burger Combo" price="P250" onAddToCart={onAddToCart} />
                <BurgerItem img={others7} title="Double Beef Burger" price="P230" onAddToCart={onAddToCart} />
                <BurgerItem img={others8} title="French Fries" price="P100" onAddToCart={onAddToCart} />
                <BurgerItem img={others9} title="Chef Special" price="P200" onAddToCart={onAddToCart} />
                <BurgerItem img={others10} title="Onion Pakoda" price="P90" onAddToCart={onAddToCart} />
                <BurgerItem img={others11} title="CHEF SPECIAL SPICY BEEF BURGER COMBO" price="P90" onAddToCart={onAddToCart} />
                <BurgerItem img={others12} title="CHEF SPECIAL SPICY BEEF BURGER" price="P90" onAddToCart={onAddToCart} />
                <BurgerItem img={others13} title="CHEF SPECIAL SPICY CHICKEN BURGER COMBO" price="P90" onAddToCart={onAddToCart} />
                <BurgerItem img={others14} title="CHEF SPECIAL SPICY CHICKEN BURGER" price="P90" onAddToCart={onAddToCart} />
                <BurgerItem img={others15} title="CHEF SPECIAL SPICY VEG BURGER COMBO" price="P90" onAddToCart={onAddToCart} />
                <BurgerItem img={others16} title="CHEF SPECIAL SPICY VEG BURGER" price="P90" onAddToCart={onAddToCart} />
            </div>

            {/* Bottom Text */}
            <h2 className="text-2xl text-center mt-16">EXPERIENCE A NEW KIND OF BURGER</h2>
        </div>
    );
};

const BurgerItem = ({ img, title, price, onAddToCart }) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            onAddToCart({ title, price, quantity });
            setQuantity(0); // Reset quantity after adding to cart
        }
    };

    return (
        <div className="flex flex-col items-center text-center bg-gray-800 rounded-lg p-4">
            <img src={img} alt={title} className="w-full h-48 object-cover rounded-md shadow-md mb-4" />
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-lg font-light mb-4">{price}</p>
            <div className="flex items-center mb-4">
                <button 
                    onClick={handleDecrement} 
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-l"
                >
                    -
                </button>
                <span className="px-4 py-1 bg-gray-700 text-white">{quantity}</span>
                <button 
                    onClick={handleIncrement} 
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-r"
                >
                    +
                </button>
            </div>
            <button 
                onClick={handleAddToCart}
                className="bg-secondary hover:bg-orange-600 text-primary font-bold px-6 py-2 rounded"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Menu;
