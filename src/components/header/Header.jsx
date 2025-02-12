import {Link} from 'react-router-dom';
import {WebRoutes} from '../../constants/routes';

const Header = () => {
    return (
        <div>
            <Link to={WebRoutes.HOME} className={'mx-4 hover:font-semibold'}>Home</Link>
            <Link to={WebRoutes.NOT_FOUND} className={'mx-4 hover:font-semibold'}>Not Found</Link>
        </div>
    );
};

export default Header;