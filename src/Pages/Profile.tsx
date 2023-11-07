import { getAuth } from "firebase/auth";
import UserDetails from "../Components/UserDetails";
import MenuHeader from "../Components/MenuHeader";
import Login from "./Login";
import {HashLoader} from "react-spinners";
import { useState, useEffect } from "react";


const Profile = () => {

    const[isLoading, setIsloading] = useState(true);

    const auth = getAuth();
    const user = auth.currentUser;

    function checkFirstVisit() {
        if(document.cookie.indexOf('mycookie')==-1) {
          // The cookie doesn't exist. Create it now
          document.cookie = 'mycookie=1';
        }
        else {
          // Not the first visit, so alert
          setIsloading(false)
        }
      }

      useEffect(() => {
        checkFirstVisit()
      }, [])
      
           if(isLoading){
            return(
                <div style={{padding:'10rem 0rem' , display:'flex' , justifyContent:'center' , backgroundColor:'black'}}>
               <HashLoader
            color="green"
            />
               </div>
              )
           }
           else{
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
      }


export default Profile;