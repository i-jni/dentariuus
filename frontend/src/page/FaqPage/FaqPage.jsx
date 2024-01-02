import JoinUs from "../../components/JoinUs/JoinUs";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

import Navigation from "../../components/navigation/Navigation"
import TextImage from "../../components/titleImage/TitleImage";

const FaqPage = () => {
    // const { user, setUser } = useContext(UserContext);
    return (
        <>
            <Navigation />
            <JoinUs />
            <Faq />
            <TextImage text="heyyyy" imageUrl="../../../public/images/illustrations/diplomer.png" />
            <Footer/>
        
        </>

    )
}

    export default FaqPage;
