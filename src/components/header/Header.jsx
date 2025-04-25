import {Link} from 'react-router-dom';
import {WebRoutes} from '../../constants/routes';
import SearchInput from "../search-input/SearchInput";
import BurgerMenu from "../burger-menu/BurgerMenu";

const Header = () => {
    return (
        <header className={'flex justify-between items-center py-4 px-[200px] z-40'}>
            <h1>
                LogoType
            </h1>
            <div className={'hidden md:flex'}>
                <Link to={WebRoutes.HOME} className={'mx-4 hover:text-secondary'}>Home</Link>
                <Link to={WebRoutes.MENU} className={'mx-4 hover:text-secondary'}>Menu</Link>
                <Link to={WebRoutes.ABOUT} className={'mx-4 hover:text-secondary'}>About</Link>
            </div>
            <div className={'hidden md:block relative w-[150px] h-[32px]'}>
                <SearchInput/>
            </div>
            <BurgerMenu/>
        </header>
    );
};

export default Header;