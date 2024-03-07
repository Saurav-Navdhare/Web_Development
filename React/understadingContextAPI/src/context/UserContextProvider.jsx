import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>  {/*
        *Here we used Provider property of the given user context
        *In value we pass the values that we want to pass to the children of the Context
        */}
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;