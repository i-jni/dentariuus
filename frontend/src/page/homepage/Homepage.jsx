import TextMedia from "../../components/TextMedia/TextMedia";
import HeroBanner from "../../components/Header/HeroBanner";
import Testimonial from "../../components/Testimonial/Testimonial";
import { TitleH2} from "../../atomes/titles/Titles";
import JoinUs from "../../components/JoinUs/JoinUs";
import Objectifs from "../../components/objectifs/Objectifs";
import TopicCourseCard from "../../components/topicsCourseCards/TopicCourseCard";


// import JoinUs from "../../components/JoinUs/JoinUs";


const Homepage = () => {
    // const { user, setUser } = useContext(UserContext);
    return (
        <>
            <HeroBanner />
            {/* <Quatre/> */}
            <Objectifs />
            {/* <SignInCta text="Custom Tehehxt" reversecolor={true}/> */}
            <TitleH2 h2="Pourquoi rejoindre Dentarius ?"/>

            <TextMedia
                reverse={false}
                image='/images/illustrations/fille-assise-long.png'
                title="Tu es étudiant(e) en médecine dentaire ?"
                text="Et tu veux accéder à une source illimitée de savoir, partager tes propres cours et enrichir la communauté étudiante ?  Ne cherche plus, tu es au bon endroit !"
                ctaText="Inscris-toi !"
                reversecolorCta={false}
                linkto='/register'/>
            <TextMedia
                reverse={true}
                image='/images/illustrations/mec-tel.png'
                title=" Partage et Apprends"
                text="Partage tes propres cours pour aider tes pairs. Ensemble, nous pouvons créer une base de connaissances exceptionnelle !"
                ctaText="Connecte-toi !"
                reversecolorCta={true}
                linkto='/login'/>
            <Testimonial/>
            <TopicCourseCard/>
            <JoinUs />

            

        </>
    )
}
export default Homepage;