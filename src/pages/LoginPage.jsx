import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WebRoutes } from '../constants/routes';
import Burger from '../assets/images/bbq_beef_burger.jpg'; // Example import
import CheeseBurger from '../assets/images/cheese_burger.jpg'; // Example import
import ChickenBurger from '../assets/images/chicken_burger.jpg'; // Example import
import BeefBurger from '../assets/images/beef_burger.jpg';
import BBQBeefBurgerCombo from '../assets/images/bbq_beef_burger_combo.jpg';
import DoubleBeefBurger from '../assets/images/double_beef_burger.jpg';
import VegBurger from '../assets/images/veg_burger.jpg';
import ChefSpecial from '../assets/images/img_7944.jpg';
import ChickenBurgerCombo from '../assets/images/chicken_burger_combo.jpg';

const LoginPage = () => {
    const navigate = useNavigate();
    const [showAdminLoginForm, setShowAdminLoginForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAdminLogin = () => {
        setShowAdminLoginForm(true); // Show the admin login form
    };

    const handleGuestContinue = () => {
        console.log('Guest continue clicked');
        navigate(WebRoutes.MENU); // Navigate to the menu page
    };

    const handleAdminAuthenticate = (e) => {
        e.preventDefault();
        console.log('Admin authentication attempt with:', { email, password });
        // Dummy authentication logic - replace with actual authentication
        if (email === 'admin@example.com' && password === 'password123') { // Replace with actual check
             console.log('Admin authentication successful');
             navigate(WebRoutes.ADMIN_DASHBOARD); // Navigate to admin dashboard
        } else {
             console.log('Admin authentication failed');
             alert('Invalid credentials (Dummy check). Try admin@example.com / password123');
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#091018] relative overflow-hidden font-kavoon">
            {/* Background Images with Animation */}
            <motion.img 
                src={Burger} 
                alt="Burger" 
                className="absolute top-[10%] left-[10%] w-32 h-auto opacity-30 rotate-12 hidden md:block"
                initial={{ opacity: 0, y: -50, rotate: 0 }}
                animate={{ opacity: 0.3, y: 0, rotate: 12 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.img 
                src={CheeseBurger} 
                alt="Cheese Burger" 
                className="absolute bottom-[10%] right-[10%] w-40 h-auto opacity-30 -rotate-12 hidden md:block"
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={{ opacity: 0.3, y: 0, rotate: -12 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            />
            <motion.img 
                src={ChickenBurger} 
                alt="Chicken Burger" 
                className="absolute top-[20%] right-[15%] w-36 h-auto opacity-30 rotate-6 hidden md:block"
                 initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 0.3, scale: 1, rotate: 6 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            />
             <motion.img 
                src={BeefBurger} 
                alt="Beef Burger" 
                className="absolute bottom-[20%] left-[15%] w-36 h-auto opacity-30 -rotate-6 hidden lg:block"
                 initial={{ opacity: 0, y: -50, rotate: 0 }}
                animate={{ opacity: 0.3, y: 0, rotate: -6 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            />
            <motion.img 
                src={BBQBeefBurgerCombo} 
                alt="BBQ Beef Burger Combo" 
                className="absolute top-[30%] left-[5%] w-44 h-auto opacity-30 rotate-6 hidden lg:block"
                 initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={{ opacity: 0.3, y: 0, rotate: 6 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
            />
             <motion.img 
                src={DoubleBeefBurger} 
                alt="Double Beef Burger" 
                className="absolute bottom-[30%] right-[5%] w-40 h-auto opacity-30 rotate-3 hidden xl:block"
                 initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 0.3, scale: 1, rotate: 3 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
            />
            <motion.img 
                src={VegBurger} 
                alt="Veg Burger" 
                className="absolute top-[40%] left-[25%] w-36 h-auto opacity-30 -rotate-3 hidden xl:block"
                 initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 0.3, scale: 1, rotate: -3 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
            />

            {/* Images with Continuous Animation */}
            <motion.img 
                src={ChefSpecial} 
                alt="Chef Special Burger" 
                className="absolute top-[5%] right-[25%] w-36 h-auto opacity-30 rotate-[-8deg] hidden lg:block"
                animate={{
                    y: [0, 15, 0],
                    rotate: [-8, -12, -8]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
            />
            <motion.img 
                src={ChickenBurgerCombo} 
                alt="Chicken Burger Combo" 
                className="absolute bottom-[5%] left-[25%] w-40 h-auto opacity-30 rotate-[8deg] hidden lg:block"
                 animate={{
                    y: [0, -15, 0],
                    rotate: [8, 12, 8]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-8 shadow-xl w-96 z-10"
            >
                <p className="text-center text-secondary font-bold text-4xl font-poppins">Hiiiii</p>
                <h2 className="text-3xl font-bold mb-8 text-center text-[#091018]">Welcome to Burger Town! 🍔</h2>

                {showAdminLoginForm ? (
                    <form onSubmit={handleAdminAuthenticate} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-sans">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-800 font-sans"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-sans">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-800 font-sans"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary font-sans"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowAdminLoginForm(false)}
                            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-sans"
                        >
                            Cancel
                        </button>
                    </form>
                ) : (
                    <div className="space-y-6">
                        <button
                            className="w-full py-3 bg-[#091018] text-white rounded-lg font-semibold text-lg shadow-md font-sans"
                            onClick={handleAdminLogin}
                        >
                            Login as Admin
                        </button>
                        <button
                            className="w-full py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold text-lg shadow-md font-sans"
                            onClick={handleGuestContinue}
                        >
                            Continue as Guest
                        </button>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default LoginPage; 