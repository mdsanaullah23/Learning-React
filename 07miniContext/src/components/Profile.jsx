import React, { useContext } from "react";
import UserContextProider from '../context/UserContextProvider'
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)

    if(!user) return <div>PLEASE LOGIN</div>

    return <div>WELCOM {user.username}</div>
}

export default Profile;