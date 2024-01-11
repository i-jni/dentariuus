import { TitleH2 } from "../../atomes/titles/Titles";
import AllCourses from "../../components/AllCourses/AllCourses";
import CourseCard from "../../components/CourseCard/CourseCard";
import JoinUs from "../../components/JoinUs/JoinUs";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation"
import Recherche from "../../components/recherche/Recherche";

const ListeCoursePage = () => { 

    return (
        <>
            <Navigation />
            <Recherche/>
            <TitleH2 h2="La liste de tout les cours:"/>
            <CourseCard />               
            <JoinUs />
            <Footer/>
        </>
    )



}

export default ListeCoursePage;