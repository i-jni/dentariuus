import CourseDetail from "../../components/CourseDetail/CourseDetail";
import Footer from "../../components/footer/Footer";

import Navigation from "../../components/navigation/Navigation"
// import TextImage from "../../components/titleImage/TextImage";

const CourseDetailPage = () => {
    return (
        <>
            <Navigation />
            <CourseDetail/>
            {/* <TextImage text="Deposer un cours" imageUrl="../../../public/images/illustrations/fille-happy.png" /> */}
            <Footer/>
        
        </>

    )
}

    export default CourseDetailPage;
