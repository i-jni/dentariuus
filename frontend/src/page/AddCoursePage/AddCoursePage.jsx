import AddCourse from "../../components/addCourse/AddCourse";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

import Navigation from "../../components/navigation/Navigation"
import TextImage from "../../components/titleImage/TextImage";

const AddCoursePage = () => {
    // const { user, setUser } = useContext(UserContext);
    return (
        <>
            <Navigation />
            <AddCourse/>
            <TextImage text="Merci de ... " imageUrl="../../../public/images/illustrations/fille-happy.png" />
            <Footer/>
        
        </>

    )
}

    export default AddCoursePage;
