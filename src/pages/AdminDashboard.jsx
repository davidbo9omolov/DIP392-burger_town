import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WebRoutes } from '../constants/routes';

const AdminDashboard = () => {
    const navigate = useNavigate();

    // Dummy data for demonstration
    const orders = [
        { id: 1, item: 'Burger Combo', quantity: 2, status: 'Preparing' },
        { id: 2, item: 'French Fries', quantity: 3, status: 'Ready' },
        { id: 3, item: 'Milkshake', quantity: 1, status: 'Delivered' },
    ];

    const menuItems = [
        { id: 1, name: 'Classic Burger', price: 10.99 },
        { id: 2, name: 'Cheese Fries', price: 4.99 },
        { id: 3, name: 'Chocolate Shake', price: 5.99 },
    ];

    const handleLogout = () => {
        console.log('Logging out...');
        // Perform logout logic here if needed (e.g., clear local storage, call API)
        navigate(WebRoutes.LOGIN); // Navigate to the login page
    };

    return (
        <div className="min-h-screen bg-[#091018] text-white p-8 font-sans">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-center">Admin Dashboard</h2>
                <button 
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                >
                    Logout
                </button>
            </div>

            {/* Orders Section */}
            <section className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Recent Orders</h3>
                <div className="bg-gray-800 rounded-lg p-6">
                    <ul>
                        {orders.map(order => (
                            <li key={order.id} className="border-b border-gray-700 py-2 flex justify-between items-center">
                                <div>
                                    <span className="font-semibold">Order #{order.id}:</span> {order.item} x{order.quantity}
                                </div>
                                <span className={
                                    `px-3 py-1 rounded-full text-sm ${order.status === 'Preparing' ? 'bg-yellow-500 text-black' : order.status === 'Ready' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`
                                }>
                                    {order.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Customize Menu Section */}
            <section>
                <h3 className="text-2xl font-semibold mb-4">Customize Menu</h3>
                <div className="bg-gray-800 rounded-lg p-6">
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.id} className="border-b border-gray-700 py-2 flex justify-between items-center">
                                <div>
                                    <span className="font-semibold">{item.name}</span> - ${item.price.toFixed(2)}
                                </div>
                                <div>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2">Edit</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Add New Item</button>
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard; 