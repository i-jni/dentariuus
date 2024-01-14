
import TextMedia from "../../components/TextMedia/TextMedia";
import Recherche from "../../components/recherche/Recherche";

const SearchPage = () => { 

    return (
        <>
            <Recherche/>
            {/* <TitleH2 h2="La liste de tout les cours:"/>
            <CourseCard />                */}
            <TextMedia
                reverse={true}
                image='/images/illustrations/diplomer.png'
                title="N'hesite pas a partager tes cours"
                ctaText="Ajouter un nouveau"
                reversecolorCta={false}
                linkto='/addcourse'/>
        </>
    )



}

export default SearchPage;