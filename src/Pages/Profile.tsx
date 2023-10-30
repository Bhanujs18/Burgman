import { getAuth } from "firebase/auth";
import UserDetails from "../Components/UserDetails";
import MenuHeader from "../Components/MenuHeader";
import Login from "./Login";
;


const Profile = () => {

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
        return(
            <div>
        <Login />
        </div>
        )
       }
}

export default Profile;