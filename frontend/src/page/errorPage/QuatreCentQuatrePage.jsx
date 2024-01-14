import Quatre from "../../atomes/404/Quatre";
import { TitleH2 } from "../../atomes/titles/Titles";
import TextImage from "../../components/titleImage/TextImage";


const QuatreCentPage = () => {

    return (
        <>
            <Quatre />
            <TitleH2 h2='La page recherchée est introuvable...' />
            <TextImage imageUrl="/images/illustrations/meuf-face-tel.png"/>
        
        </>

    )
}

    export default QuatreCentPage;