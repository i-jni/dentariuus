import Quatre from "../../atomes/404/Quatre";
import { TitleH2 } from "../../atomes/titles/Titles";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation"
import TextImage from "../../components/titleImage/TextImage";


const QuatreCentPage = () => {

    return (
        <>
            <Navigation />
            <Quatre />
            <TitleH2 h2='La page recherchée est introuvable...' />
            <TextImage imageUrl="../../../public/images/illustrations/meuf-face-tel.png"/>
            <Footer/>
        
        </>

    )
}

    export default QuatreCentPage;