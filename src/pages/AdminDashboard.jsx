import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WebRoutes } from '../constants/routes';

const AdminDashboard = () => {
    const navigate = useNavigate();

    // Dummy data for demonstration (will be replaced by state)
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: 'Classic Burger', price: 10.99, imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Cheese Fries', price: 4.99, imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Chocolate Shake', price: 5.99, imageUrl: 'https://via.placeholder.com/150' },
    ]);

    const [newItem, setNewItem] = useState({ name: '', price: '', imageUrl: '' });
    const [editingItem, setEditingItem] = useState(null);

    const handleLogout = () => {
        console.log('Logging out...');
        // Perform logout logic here if needed (e.g., clear local storage, call API)
        navigate(WebRoutes.LOGIN); // Navigate to the login page
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editingItem) {
            setEditingItem({ ...editingItem, [name]: value });
        } else {
            setNewItem({ ...newItem, [name]: value });
        }
    };

    const handleAddItem = () => {
        if (newItem.name && newItem.price && newItem.imageUrl) {
            setMenuItems([...menuItems, { ...newItem, id: menuItems.length + 1 }]);
            setNewItem({ name: '', price: '', imageUrl: '' });
        }
    };

    const handleUpdateItem = () => {
        if (editingItem) {
            const updatedItems = menuItems.map(item =>
                item.id === editingItem.id ? editingItem : item
            );
            setMenuItems(updatedItems);
            setEditingItem(null);
        }
    };

    const handleCancelEdit = () => {
        setEditingItem(null);
    };

    const handleDeleteItem = (id) => {
        const filteredItems = menuItems.filter(item => item.id !== id);
        setMenuItems(filteredItems);
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
                        {menuItems.map(item => (
                            <li key={item.id} className="border-b border-gray-700 py-2 flex justify-between items-center">
                                <div>
                                    <span className="font-semibold">{item.name}</span> - ${item.price.toFixed(2)}
                                </div>
                                <div>
                                    <button 
                                        onClick={() => setEditingItem(item)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDeleteItem(item.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
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
                                    <button 
                                        onClick={() => setEditingItem(item)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => handleDeleteItem(item.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Form to Add/Edit Item */}
                    <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                        <h4 className="text-xl font-semibold mb-4">{editingItem ? 'Edit Item' : 'Add New Item'}</h4>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={editingItem ? editingItem.name : newItem.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-300">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={editingItem ? editingItem.price : newItem.price}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                        </div>
                         <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-300">Image URL</label>
                            <input
                                type="text"
                                name="imageUrl"
                                value={editingItem ? editingItem.imageUrl : newItem.imageUrl}
                                onChange={handleInputChange}
                                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="flex justify-end">
                            {editingItem && (
                                <button 
                                    onClick={handleCancelEdit}
                                    className="mr-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            )}
                            <button 
                                onClick={editingItem ? handleUpdateItem : handleAddItem}
                                className={`px-4 py-2 rounded ${editingItem ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                            >
                                {editingItem ? 'Update Item' : 'Add Item'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard; 