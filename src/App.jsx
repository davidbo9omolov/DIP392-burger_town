import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import {Home, About, PageNotFound, Menu} from './pages'
import {WebRoutes} from './constants/routes.js'
import Header from './components/header/Header.jsx'
import Footer from "./components/footer/Footer.jsx";
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import SendtoKitchen from './pages/SendtoKitchen.jsx';
import OrderStatusPage from './pages/OrderStatusPage.jsx';
import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
    const location = useLocation();
    const showHeaderAndFooter = location.pathname !== WebRoutes.LOGIN && location.pathname !== WebRoutes.ADMIN_DASHBOARD;

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex > -1) {
                const newCart = [...prevCart];
                newCart[existingItemIndex].quantity += 1;
                return newCart;
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    return (
        <div className={'min-h-screen w-auto flex flex-col overflow-hidden relative'}>
            {showHeaderAndFooter && <Header cart={cart} />}
            <main className={'flex-1 relative'}>
                <Routes>
                    {/* Set Login page as the initial route */}
                    <Route path={WebRoutes.LOGIN} element={<LoginPage/>}/>
                    
                    {/* Admin dashboard route */}
                    <Route path={WebRoutes.ADMIN_DASHBOARD} element={<AdminDashboard/>}/>

                    {/* New Send to Kitchen route - pass cart, addToCart, and setCart as props */}
                    <Route path={WebRoutes.ORDER} element={<SendtoKitchen cart={cart} addToCart={addToCart} setCart={setCart} />}/>

                    {/* New Order Status route */}
                    <Route path={WebRoutes.ORDER_STATUS} element={<OrderStatusPage/>}/>
                    
                    {/* Standard routes that show header/footer (accessible after guest login) */}
                    <Route path={WebRoutes.HOME} element={<Home/>}/>
                    <Route path={WebRoutes.MENU} element={<Menu/>}/>
                    <Route path={WebRoutes.ABOUT} element={<About/>}/>
                    <Route path={WebRoutes.NOT_FOUND} element={<PageNotFound/>}/>
                </Routes>
            </main>
            {showHeaderAndFooter && <Footer/>}
        </div>
    );
}

export default App;