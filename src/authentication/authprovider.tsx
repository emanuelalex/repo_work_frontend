import { useContext, createContext, useState, useEffect } from "react";

interface Authproviderprops{
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
});

export function Authprovider({children} : Authproviderprops){
    const [isAuthenticated, setIsAuthenticated] = useState(true); //Cambiar a false cuando se haga la conexión con Backend

    return (
        <AuthContext.Provider value={{ isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );    
}

export const useAuth = () => useContext(AuthContext);