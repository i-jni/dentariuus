
import JoinUs from "../../components/JoinUs/JoinUs";
import TextMedia from "../../components/TextMedia/TextMedia";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation"
import Recherche from "../../components/recherche/Recherche";

const SearchPage = () => { 

    return (
        <>
            <Navigation />
            <Recherche/>
            {/* <TitleH2 h2="La liste de tout les cours:"/>
            <CourseCard />                */}
            <TextMedia
                reverse={true}
                image='/images/illustrations/diplomer.png'
                title="N'hesitez pas a partager vos cours"
                ctaText="Ajouter un nouveau"
                reversecolorCta={false}
                linkto='/addcourse'/>
            <Footer/>
        </>
    )



}

export default SearchPage;