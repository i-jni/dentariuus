import TopicCourseDetail from "../../components/CoursesByTopicId/CoursesByTopicId";
import TextMedia from "../../components/TextMedia/TextMedia";


const CourseByTopicPage = () => {
    // const { user, setUser } = useContext(UserContext);
    return (
        <>
            {/* <TextImage text="Vos questions..." imageUrl="/images/illustrations/meuf-face-tel.png" /> */}
            <TopicCourseDetail />
            <TextMedia
                reverse={true}
                image='/images/illustrations/notes-bro.svg'
                title="N'hesite pas a partager tes cours"
                ctaText="Ajouter un nouveau"
                reversecolorCta={true}
                linkto='/addcourse'/>
        
        </>

    )
}

    export default CourseByTopicPage;
