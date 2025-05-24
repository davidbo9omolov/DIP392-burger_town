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
    const [orders, setOrders] = useState([]);
    const [lastOrder, setLastOrder] = useState(null);

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

    const addOrder = (orderItems) => {
        // Create a new order object with a unique ID and the current cart items
        const newOrder = { id: orders.length + 1, items: orderItems, status: 'Pending', preparationTime: null };
        setOrders(prevOrders => {
            const updatedOrders = [...prevOrders, newOrder];
            console.log('Orders after adding:', updatedOrders);
            return updatedOrders;
        });
        setLastOrder(newOrder); // Set the last placed order
        return newOrder; // Return the newly created order
    };

    const updateOrderStatus = (orderId, status, preparationTime = null) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order.id === orderId ? { ...order, status, preparationTime } : order
            )
        );
         // If the updated order is the last order, update lastOrder state as well
        setLastOrder(prevLastOrder =>
            prevLastOrder && prevLastOrder.id === orderId ? { ...prevLastOrder, status, preparationTime } : prevLastOrder
        );
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

     // Add useEffect to log orders state in App.jsx
    useEffect(() => {
        console.log('App.jsx orders state updated:', orders);
    }, [orders]);

    return (
        <div className={'min-h-screen w-auto flex flex-col overflow-hidden relative'}>
            {showHeaderAndFooter && <Header cart={cart} />}
            <main className={'flex-1 relative'}>
                <Routes>
                    {/* Set Login page as the initial route */}
                    <Route path={WebRoutes.LOGIN} element={<LoginPage/>}/>
                    
                    {/* Admin dashboard route - pass orders and updateOrderStatus */}
                    <Route path={WebRoutes.ADMIN_DASHBOARD} element={<AdminDashboard orders={orders} updateOrderStatus={updateOrderStatus} />}/>

                    {/* Route for the new Sent To Kitchen page - pass addOrder and cart */}
                    <Route path={WebRoutes.CART_DETAILS} element={<SentToKitchenPage cart={cart} setCart={setCart} addOrder={addOrder} />}/>

                    {/* Cart Page route (previous) - still keep if needed for other links */}
                    <Route path={WebRoutes.ORDER} element={<CartPage cart={cart} addToCart={addToCart} setCart={setCart} />}/>

                    {/* New Order Status route - pass lastOrder */}
                    <Route path={WebRoutes.ORDER_STATUS} element={<OrderStatusPage lastOrder={lastOrder} />}/>
                    
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