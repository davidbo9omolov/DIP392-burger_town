import {Link} from 'react-router-dom';
import {WebRoutes} from '../../constants/routes';
import SearchInput from "../search-input/SearchInput";

const Header = () => {
    return (
        <header className={'flex justify-between items-center py-4 px-12 z-40'}>
            <h1>
                LogoType
            </h1>
            <div>
                <Link to={WebRoutes.HOME} className={'mx-4 hover:text-secondary'}>Home</Link>
                <Link to={WebRoutes.MENU} className={'mx-4 hover:text-secondary'}>Menu</Link>
                <Link to={WebRoutes.ABOUT} className={'mx-4 hover:text-secondary'}>About</Link>
            </div>
            <div className={'relative w-[150px] h-[32px]'}>
                <SearchInput/>
            </div>
        </header>
    );
};

export default Header;