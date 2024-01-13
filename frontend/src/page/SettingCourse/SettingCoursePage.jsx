import EditCourse from "../../components/editCourse/EditCourse";
import Footer from "../../components/footer/Footer";

import Navigation from "../../components/navigation/Navigation"
import TextImage from "../../components/titleImage/TextImage";

const SettingCoursePage = () => {
    // const { user, setUser } = useContext(UserContext);
    return (
        <>
            <Navigation />
            <TextImage text="Modifications " imageUrl="/images/illustrations/fille-happy.png" />
            <EditCourse />
            <Footer/>
        
        </>

    )
}

    export default SettingCoursePage;
