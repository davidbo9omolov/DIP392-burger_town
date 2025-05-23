import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import {Home, About, PageNotFound, Menu} from './pages'
import {WebRoutes} from './constants/routes.js'
import Header from './components/header/Header.jsx'
import Footer from "./components/footer/Footer.jsx";
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
    const location = useLocation();
    const showHeaderAndFooter = location.pathname !== WebRoutes.LOGIN && location.pathname !== WebRoutes.ADMIN_DASHBOARD;

    return (
        <div className={'min-h-screen w-auto flex flex-col overflow-hidden relative'}>
            {showHeaderAndFooter && <Header/>}
            <main className={'flex-1 relative'}>
                <Routes>
                    {/* Set Login page as the initial route */}
                    <Route path={WebRoutes.LOGIN} element={<LoginPage/>}/>
                    
                    {/* Admin dashboard route */}
                    <Route path={WebRoutes.ADMIN_DASHBOARD} element={<AdminDashboard/>}/>
                    
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