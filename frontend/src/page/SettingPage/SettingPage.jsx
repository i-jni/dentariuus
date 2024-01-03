
import StudentSetting from "../../components/editStudent/EditStudent";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation"
import TextImage from "../../components/titleImage/TextImage";

const SettingPage = () => { 

    return (
        <>
            <Navigation />       
            <TextImage text="Modifier le profile:" imageUrl="../../../public/images/illustrations/settings.svg"/>
            <StudentSetting />
            
            <Footer/>
        </>
    )



}

export default SettingPage;