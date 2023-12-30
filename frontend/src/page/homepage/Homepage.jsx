import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import Navigation from "../../components/navigation/Navigation";
import './homepage.css';
import TextMedia from "../../components/TextMedia/TextMedia";
import HeroBanner from "../../components/Header/HeroBanner";
import SignInCta from "../../components/buttons/SigninCta";
import Testimonial from "../../components/Testimonial/Testimonial";
import { TitleH1, TitleH2, TitleH3, TitleH4 } from "../../atomes/titles/Titles";


// import JoinUs from "../../components/JoinUs/JoinUs";


const Homepage = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <Navigation/>
            <HeroBanner />
            <p>Homepage :</p>
            <p>user :{user?.firstname}</p>
            <TextMedia />
            <TextMedia />
            <SignInCta text="Custom Tehehxt" reversecolor={true}/>
            
            <Testimonial/>
            <TitleH1 h1="UN GRAND TITRE un grand titre!"/>
            <TitleH2 h2="UN GRAND TITRE un grand titre !"/>
            <TitleH3 h3="UN GRAND TITRE un grand titre !"/>
            <TitleH4 h4="UN GRAND TITREun grand titre !" />
            <TextMedia />
            
            
            {/* <JoinUs/> */}

        </>
    )
}
export default Homepage;