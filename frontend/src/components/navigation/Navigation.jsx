import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";


const Navigation = () => {
    const { user, setUser } = useContext(UserContext);
    // console.log(user, "user ???");

    return (
        <>
            <nav id="navcontainer">
                <ul id="navlist">
                    <li id="active">Hey, user: {user?.firstname },</li>
                        <li id="active"><Link to={"/"}>Home</Link></li>
                        <li id="active"><Link to={`/students/${user?.id}`}>my profile</Link></li>
                        <li id="active"><Link to={`/setting/${user?.id}`}>my setting user</Link></li>
                        <li id="active"><Link to={'/courses'}>courses</Link></li>
                    <li id="active"><Link to={'/addcourse'}>Ajout Cours</Link></li>
                    <li id="active"><Link to={'/editcourse'}>Edit Cours</Link></li>
                    
                </ul>
                
            </nav>
        
        </>
    )
    
}
export default Navigation;