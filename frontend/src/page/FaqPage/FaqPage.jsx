import TextMedia from "../../components/TextMedia/TextMedia";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

import Navigation from "../../components/navigation/Navigation"
import TextImage from "../../components/titleImage/TextImage";

const FaqPage = () => {
    // const { user, setUser } = useContext(UserContext);
    return (
        <>
            <Navigation />
            <TextImage text="Vos questions..." imageUrl="/images/illustrations/meuf-face-tel.png" />
            <Faq />
            <TextMedia
                reverse={false}
                image='/images/boy-studi.png'
                title="Des questions ?"
                text="Contactez nous !"
                ctaText="Par e-mail"
                reversecolorCta={true}
            linkto="https://mail.google.com/mail/u/0/"/>
            <Footer/>
        
        </>

    )
}

    export default FaqPage;
