import { getAuth } from "firebase/auth";
import UserDetails from "../Components/UserDetails";
import { useNavigate } from "react-router-dom";
import MenuHeader from "../Components/MenuHeader";import { useEffect } from "react";
;


const Profile = () => {

    const navigate = useNavigate();

    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
        return(
            <div>
        <MenuHeader text={"Profile"} />
        <UserDetails user={user} />
        </div>
        )
    }
    else{
        navigate('/login');
       }
}

export default Profile;