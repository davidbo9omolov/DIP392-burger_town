import {Link} from 'react-router-dom';
import {WebRoutes} from '../../constants/routes';
import SearchInput from "../search-input/SearchInput";
import BurgerMenu from "../burger-menu/BurgerMenu";
import { useState } from 'react';
import LoginModal from '../login-modal/LoginModal';
import BigBurger from '../../assets/images/big-burger.svg';

const Header = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <header className={'flex justify-between items-center py-4 px-12 z-40'}>
            <Link to={WebRoutes.HOME} className="flex items-center">
                <img src={BigBurger} alt="Burger Town Logo" className="h-8 w-auto mr-2" />
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-white font-kavoon">Burger Town</span>
                    <span className="text-xs text-gray-400">Taste the flavor!</span>
                </div>
            </Link>
            <div className={'hidden md:flex items-center'}>
                <Link to={WebRoutes.HOME} className={'mx-4 hover:text-secondary'}>Home</Link>
                <Link to={WebRoutes.MENU} className={'mx-4 hover:text-secondary'}>Menu</Link>
                <Link to={WebRoutes.ABOUT} className={'mx-4 hover:text-secondary'}>About</Link>
                <Link 
                    to={WebRoutes.LOGIN}
                    className={'mx-4 text-secondary font-bold'}
                >
                    Register
                </Link>
            </div>
            <div className={'hidden md:block relative w-[150px] h-[32px]'}>
                <SearchInput/>
            </div>
            <BurgerMenu/>
        </header>
    );
};

export default Header;