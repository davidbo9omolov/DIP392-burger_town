import React from 'react';
import { useState } from "react";
import beginner1 from "../assets/images/BBQ BEEF BURGER COMBO.jpg";
import beginner2 from "../assets/images/BBQ BEEF BURGER.jpg";
import beginner3 from "../assets/images/VEG BURGER.jpg";
import pro1 from "../assets/images/BEEF BURGER COMBO.jpg";
import pro2 from "../assets/images/BEEF BURGER.jpg";
import pro3 from "../assets/images/VEG BURGER COMBO.jpg";
import pro4 from "../assets/images/CHEESE BURGER COMBO.jpg";
import pro5 from "../assets/images/CHEESE BURGER.jpg";
import sauces3 from "../assets/images/GARLIC SAUCE.jpg";
import sauces4 from "../assets/images/KETCHUP.jpg";
import sauces5 from "../assets/images/SPICY SAUCE.jpg";
import sauces6 from "../assets/images/BBQ SAUCE.jpg";
import sauces7 from "../assets/images/BURGER SAUCE.jpg";
import drinks1 from "../assets/images/COCA COLA.jpg";
import drinks2 from "../assets/images/FANTA.jpg";
import drinks3 from "../assets/images/SPRITE.jpg";
import drinks4 from "../assets/images/STRAWBERRY LASSI.png";
import drinks5 from "../assets/images/SWEET LASSI.png";
import drinks6 from "../assets/images/MANGO LASSI.png";
import others1 from "../assets/images/CHICKEN 65.jpg";
import others2 from "../assets/images/CHICKEN BURGER  COMBO.jpg";
import others3 from "../assets/images/CHICKEN BURGER.jpg";
import others4 from "../assets/images/CHICKEN LOLLIPOS.jpg";
import others5 from "../assets/images/CHICKEN WINGS.jpg";
import others6 from "../assets/images/DOUBLE BEEF BURGER COMBO.jpg";
import others7 from "../assets/images/DOUBLE BEEF BURGER.jpg";
import others8 from "../assets/images/FRENCH FRIES.jpg";
import others9 from "../assets/images/IMG_7944.jpg";
import others10 from "../assets/images/ONION PAKODA.jpg";

const Menu = () => {
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
                <BurgerItem img={beginner1} title="Beer-Cheese Bacon" price="P160" />
                <BurgerItem img={beginner2} title="Steak Burger" price="P140" />
                <BurgerItem img={beginner3} title="Cheese Mushroom" price="P150" />
            </div>

            {/* PRO Section */}
            <h2 className="text-4xl text-center mt-16 mb-8">— PRO —</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <BurgerItem img={pro1} title="Steak Burger" price="P200" />
                <BurgerItem img={pro2} title="Beer-Cheese Bacon" price="P220" />
                <BurgerItem img={pro3} title="Cheese Mushroom" price="P210" />
                <BurgerItem img={pro4} title="Cheese Burger Combo" price="P150" />
                <BurgerItem img={pro5} title="Cheese Burger" price="P130" />
            </div>

            {/* SAUCES Section */}
            <h2 className="text-4xl text-center mt-16 mb-8">— SAUCES —</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <BurgerItem img={sauces3} title="Garlic Sauce" price="P50" />
                <BurgerItem img={sauces4} title="Ketchup" price="P40" />
                <BurgerItem img={sauces5} title="Spicy Sauce" price="P60" />
                <BurgerItem img={sauces6} title="BBQ SAUCE" price="P60" />
                <BurgerItem img={sauces7} title="BURGER SAUCE" price="P60" />
            </div>

            {/* DRINKS Section */}
            <h2 className="text-4xl text-center mt-16 mb-8">— DRINKS —</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <BurgerItem img={drinks1} title="Coca-Cola" price="P80" />
                <BurgerItem img={drinks2} title="Fanta" price="P80" />
                <BurgerItem img={drinks3} title="Sprite" price="P80" />
                <BurgerItem img={drinks4} title="Strawberry Lassi" price="P100" />
                <BurgerItem img={drinks5} title="Sweet Lassi" price="P90" />
                <BurgerItem img={drinks6} title="MANGO LASSI" price="P80" />
            </div>

            {/* OTHERS (Snacks & Sides) Section */}
            <h2 className="text-4xl text-center mt-16 mb-8">— OTHERS —</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <BurgerItem img={others1} title="Chicken 65" price="P150" />
                <BurgerItem img={others2} title="Chicken Burger Combo" price="P200" />
                <BurgerItem img={others3} title="Chicken Burger" price="P180" />
                <BurgerItem img={others4} title="Chicken Lollipops" price="P160" />
                <BurgerItem img={others5} title="Chicken Wings" price="P170" />
                <BurgerItem img={others6} title="Double Beef Burger Combo" price="P250" />
                <BurgerItem img={others7} title="Double Beef Burger" price="P230" />
                <BurgerItem img={others8} title="French Fries" price="P100" />
                <BurgerItem img={others9} title="Chef Special" price="P200" />
                <BurgerItem img={others10} title="Onion Pakoda" price="P90" />
            </div>

            {/* Bottom Text */}
            <h2 className="text-2xl text-center mt-16">EXPERIENCE A NEW KIND OF BURGER</h2>
        </div>
    );
};

const BurgerItem = ({ img, title, price }) => (
    <div className="flex flex-col items-center text-center">
        <img src={img} alt={title} className="w-[400px] h-[400px] object-cover rounded-lg shadow-md mb-4" />
        <p className="text-xl">{title} <br /> <span className="text-lg font-light">{price}</span></p>
    </div>
);

export default Menu;
