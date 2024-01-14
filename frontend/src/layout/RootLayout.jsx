import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';

const RootLayout = () => {
    return <>
        <Navigation/>
        <Outlet />
        <Footer/>
    </>;
}

export default RootLayout;