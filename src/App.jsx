import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import {Home, About, PageNotFound, Menu} from './pages'
import {WebRoutes} from './constants/routes.js'
import Header from './components/header/Header.jsx'
import Footer from "./components/footer/Footer.jsx";
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import CartPage from './pages/CartPage.jsx';
import OrderStatusPage from './pages/OrderStatusPage.jsx';
import SentToKitchenPage from './pages/sentkithcen.jsx';
import React, { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {
    const location = useLocation();
    const showHeaderAndFooter = location.pathname !== WebRoutes.LOGIN && location.pathname !== WebRoutes.ADMIN_DASHBOARD;

    const [cart, setCart] = useState([]);
    const [notification, setNotification] = useState(null);

    const addToCart = (itemToAdd) => {
        setCart(prevCart => {
            // Find if the item already exists in the cart based on title
            const existingItemIndex = prevCart.findIndex(item => item.title === itemToAdd.title);

            // Clean and convert price to a number
            const numericPrice = parseFloat(itemToAdd.price.replace('P', ''));
            
            if (isNaN(numericPrice)) {
                console.error('Invalid price for item:', itemToAdd);
                // Optionally show an error notification to the user
                return prevCart; // Don't add item with invalid price
            }

            if (existingItemIndex > -1) {
                // If item exists, create a new array with updated quantity
                const newCart = [...prevCart];
                // Use the parsed numeric price for calculation
                newCart[existingItemIndex].quantity += itemToAdd.quantity; 
                 // Update price in case it changed (though in this case it won't)
                newCart[existingItemIndex].price = numericPrice;
                // Set notification for existing item
                setNotification({ ...itemToAdd, quantity: newCart[existingItemIndex].quantity });
                return newCart;
            } else {
                // If item does not exist, add it to the cart with the specified quantity
                // Use the parsed numeric price for the new item
                const newItem = { ...itemToAdd, price: numericPrice, quantity: itemToAdd.quantity };
                // Set notification for new item
                setNotification(newItem);
                return [...prevCart, newItem];
            }
        });
    };

    // Effect to clear notification after a few seconds
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 3000); // Notification visible for 3 seconds
            return () => clearTimeout(timer);
        }
    }, [notification]);

    return (
        <div className={'min-h-screen w-auto flex flex-col overflow-hidden relative'}>
            {showHeaderAndFooter && <Header cart={cart} />}
            <main className={'flex-1 relative'}>
                <Routes>
                    {/* Set Login page as the initial route */}
                    <Route path={WebRoutes.LOGIN} element={<LoginPage/>}/>
                    
                    {/* Admin dashboard route */}
                    <Route path={WebRoutes.ADMIN_DASHBOARD} element={<AdminDashboard/>}/>

                    {/* Route for the new Sent To Kitchen page */}
                    <Route path={WebRoutes.CART_DETAILS} element={<SentToKitchenPage cart={cart} setCart={setCart} />}/>

                    {/* Cart Page route (previous) - still keep if needed for other links */}
                    <Route path={WebRoutes.ORDER} element={<CartPage cart={cart} addToCart={addToCart} setCart={setCart} />}/>

                    {/* New Order Status route */}
                    <Route path={WebRoutes.ORDER_STATUS} element={<OrderStatusPage/>}/>
                    
                    {/* Standard routes that show header/footer (accessible after guest login) */}
                    <Route path={WebRoutes.HOME} element={<Home/>}/>
                    <Route path={WebRoutes.MENU} element={<Menu onAddToCart={addToCart} />}/>
                    <Route path={WebRoutes.ABOUT} element={<About/>}/>
                    <Route path={WebRoutes.NOT_FOUND} element={<PageNotFound/>}/>
                </Routes>
            </main>
            {showHeaderAndFooter && <Footer/>}
            {/* Notification Card */}
            {notification && (
                <div className="fixed top-4 right-4 bg-green-600 text-white p-4 rounded shadow-lg z-50">
                    <p className="font-bold">Item Added to Cart:</p>
                    <p>{notification.title} (x{notification.quantity})</p>
                </div>
            )}
        </div>
    );
};

export default App;