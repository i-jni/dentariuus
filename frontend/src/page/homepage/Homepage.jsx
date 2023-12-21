import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import Navigation from "../../components/navigation/Navigation";
import './homepage.css';


const Homepage = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <Navigation/>
            <p>Homepage :</p>
            <p>user :{ user?.firstname }</p>
        </>
    )
}
export default Homepage;