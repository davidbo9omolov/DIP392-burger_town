import {Link} from 'react-router-dom';
import {WebRoutes} from '../../constants/routes';
import SearchInput from "../search-input/SearchInput";
import BurgerMenu from "../burger-menu/BurgerMenu";
import { useState } from 'react';
import LoginModal from '../login-modal/LoginModal';
import BigBurger from '../../assets/images/big-burger.svg';
import { motion } from 'framer-motion';

const Header = ({ cart }) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const totalItems = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <header className={'flex justify-between items-center py-4 px-12 z-40 bg-[#091018]/80 backdrop-blur-sm'}>
            <Link to={WebRoutes.HOME} className="flex items-center group">
                <motion.img 
                    src={BigBurger} 
                    alt="Burger Town Logo" 
                    className="h-12 w-auto mr-3 transition-transform duration-300 group-hover:rotate-12" 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <div className="flex flex-col">
                    <motion.span 
                        className="text-2xl font-bold text-white font-kavoon tracking-wider"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Burger Town
                    </motion.span>
                    <motion.span 
                        className="text-sm text-secondary font-medium"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Taste the flavor!
                    </motion.span>
                </div>
            </Link>
            <div className={'hidden md:flex items-center'}>
                <Link to={WebRoutes.HOME} className={'mx-4 hover:text-secondary transition-colors duration-300'}>Home</Link>
                <Link to={WebRoutes.MENU} className={'mx-4 hover:text-secondary transition-colors duration-300'}>Menu</Link>
                <Link to={WebRoutes.ABOUT} className={'mx-4 hover:text-secondary transition-colors duration-300'}>About</Link>
                <Link 
                    to={WebRoutes.LOGIN}
                    className={'mx-4 text-secondary font-bold hover:text-white transition-colors duration-300'}
                >
                    Register
                </Link>
            </div>
            <div className={'flex items-center relative'}>
                <div className={'hidden md:block relative w-[150px] h-[32px] mr-4'}>
                    <SearchInput/>
                </div>
                <Link to={WebRoutes.ORDER} className="text-white text-lg hover:text-secondary transition-colors duration-300">
                    🛒 ({totalItems})
                </Link>
            </div>
            <BurgerMenu/>
        </header>
    );
};

export default Header;