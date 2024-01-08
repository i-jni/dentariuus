import TopicCourseDetail from "../../components/CoursesByTopicId/CoursesByTopicId";
import Footer from "../../components/footer/Footer";

import Navigation from "../../components/navigation/Navigation"

const CourseByTopicPage = () => {
    // const { user, setUser } = useContext(UserContext);
    return (
        <>
            <Navigation />
            {/* <TextImage text="Vos questions..." imageUrl="../../../public/images/illustrations/meuf-face-tel.png" /> */}
            <TopicCourseDetail />
            <Footer/>
        
        </>

    )
}

    export default CourseByTopicPage;
