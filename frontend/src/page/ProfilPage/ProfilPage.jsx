import StudentDetail from "../../components/StudentDetail/StudentDetail";
import TextImage from "../../components/titleImage/TextImage";

const ProfilPage = () => {

    return(
        <>
            <TextImage text="Ton profil" imageUrl="/images/illustrations/word.svg"/>
            <StudentDetail />
        </>
    )
    }

export default ProfilPage;