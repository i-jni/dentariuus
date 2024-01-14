import { TitleH2 } from "../../atomes/titles/Titles";
import CourseCard from "../../components/CourseCard/CourseCard";
import TextMedia from "../../components/TextMedia/TextMedia";



const ListeCoursePage = () => { 

    return (
        <>
            <TitleH2 h2="La liste de tout les cours:"/>
            <CourseCard />               
            <TextMedia
                reverse={true}
                image='/images/illustrations/mec-tel2.png'
                title="N'hesite pas a partager tes cours"
                ctaText="Ajouter un nouveau"
                reversecolorCta={false}
                linkto='/addcourse'/>
        </>
    )



}

export default ListeCoursePage;