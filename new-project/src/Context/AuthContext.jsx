// AuthContext.js
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const storedAuth = JSON.parse(localStorage.getItem("Auth"));
    const storedUserData = JSON.parse(localStorage.getItem("UserData"));

    const [Auth, setAuth] = useState(storedAuth);
    const [user, setUser] = useState(storedUserData);

    return (
        <AuthContext.Provider value={{ Auth, setAuth, user, setUser }}>
            { children}
        </AuthContext.Provider>
    );
}
