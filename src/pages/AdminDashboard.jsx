import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WebRoutes } from '../constants/routes';
import { motion } from 'framer-motion';
import bgBurger1 from '../assets/images/bbq_beef_burger_combo.jpg'; // Reusing some burger images
import bgBurger2 from '../assets/images/cheese_burger.jpg';

const AdminDashboard = ({ orders, updateOrderStatus }) => {
    const navigate = useNavigate();

    // Add useEffect to log orders when they change
    useEffect(() => {
        console.log('Admin Dashboard orders state updated:', orders);
    }, [orders]); // Dependency array includes orders, so this runs when orders changes

    // Handle admin logout (keeping the function for now, though not triggered by a button)
    const handleLogout = () => {
        console.log('Logging out...');
        // Perform logout logic here
        navigate(WebRoutes.LOGIN);
    };

    const orderVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-[#091018] text-white p-8 font-[Kavoon] relative overflow-hidden">
            {/* Animated Background Burgers */}
            <motion.img
                src={bgBurger1}
                alt="Animated Burger 1"
                className="absolute top-10 left-20 w-32 h-auto opacity-20"
                animate={{
                    y: [0, 50, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
             <motion.img
                src={bgBurger2}
                alt="Animated Burger 2"
                className="absolute bottom-10 right-20 w-40 h-auto opacity-20"
                 animate={{
                    y: [0, -60, 0],
                    rotate: [0, -15, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex flex-col items-center justify-start">
                {/* Admin Dashboard Title and Logout */}
                <div className="flex justify-between items-center w-full max-w-2xl mb-8">
                     <h1 className="text-4xl font-bold text-center text-secondary drop-shadow-lg">Admin Dashboard</h1>
                     <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                </div>

                {/* Recent Orders Section */}
                <section className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-lg p-6 max-w-2xl w-full shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-6">Recent Orders</h2>
                    {orders.length === 0 ? (
                        <p className="text-center text-gray-400">No new orders.</p>
                    ) : (
                        console.log("Rendering orders in Admin Dashboard:", orders),
                        <motion.ul
                             initial="hidden"
                             animate="visible"
                             variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            {orders.map(order => (
                                <motion.li 
                                    key={order.id} 
                                    className="border-b border-gray-700 py-4 last:border-b-0"
                                     variants={orderVariants}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-semibold text-xl">Order #{order.id}</h3>
                                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                                            order.status === 'Pending' ? 'bg-yellow-600 text-yellow-100' :
                                            order.status === 'Accepted' ? 'bg-green-600 text-green-100' :
                                            order.status === 'Preparing' ? 'bg-blue-600 text-blue-100' :
                                            order.status === 'Ready' ? 'bg-green-700 text-green-100' :
                                            'bg-gray-600 text-gray-300'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <ul>
                                        {order.items.map((item, index) => (
                                            <li key={index} className="text-sm ml-4 text-gray-300">{item.title} x{item.quantity} - P{(item.price * item.quantity).toFixed(2)}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-4 flex items-center space-x-2">
                                        {order.status === 'Pending' && (
                                            <>
                                                <input
                                                    type="number"
                                                    placeholder="Prep Time (mins)"
                                                    className="flex-1 px-3 py-2 text-sm rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                                    id={`prep-time-${order.id}`}
                                                />
                                                <button
                                                    onClick={() => {
                                                        const prepTimeInput = document.getElementById(`prep-time-${order.id}`);
                                                        const preparationTime = prepTimeInput.value;
                                                        if (preparationTime) {
                                                            updateOrderStatus(order.id, 'Accepted', parseInt(preparationTime));
                                                        } else {
                                                            alert('Please enter preparation time.');
                                                        }
                                                    }}
                                                    className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded"
                                                >
                                                    Order Accepted
                                                </button>
                                            </>
                                        )}
                                        {order.status === 'Accepted' && order.preparationTime && (
                                            <p className="text-sm text-gray-400">Prep Time: {order.preparationTime} mins</p>
                                        )}
                                        {order.status === 'Accepted' && (
                                            <button
                                                onClick={() => updateOrderStatus(order.id, 'Preparing')}
                                                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
                                            >
                                                Order Preparing
                                            </button>
                                        )}
                                        {order.status === 'Preparing' && (
                                            <button
                                                onClick={() => updateOrderStatus(order.id, 'Ready')}
                                                className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded"
                                            >
                                                Order Ready
                                            </button>
                                        )}
                                         {order.status === 'Ready' && (
                                            <span className="text-green-500 text-sm font-semibold">Order is Ready!</span>
                                         )}
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </section>
            </div>
        </div>
    );
};

export default AdminDashboard; 