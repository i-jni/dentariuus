import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

import Navigation from "../../components/navigation/Navigation"
import TextImage from "../../components/titleImage/TextImage";

const FaqPage = () => {
    // const { user, setUser } = useContext(UserContext);
    return (
        <>
            <Navigation />
            <TextImage text="Vos questions..." imageUrl="../../../public/images/illustrations/fille-happy.png" />
            <Faq />
            <Footer/>
        
        </>

    )
}

    export default FaqPage;
