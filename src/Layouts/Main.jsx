
import MyNavbar from './Navbar';
import { Outlet } from 'react-router-dom';
import MyFooter from './Footer';

const Main = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Outlet></Outlet>
            <MyFooter></MyFooter>
        </div>
    );
};

export default Main;