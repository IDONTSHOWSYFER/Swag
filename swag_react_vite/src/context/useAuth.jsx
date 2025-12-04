import { createContext, useContext, useState, useEffect } from "react";
{/*CreateContext = Espace de Stockage
   useContext = Utiliser l'espace de stockage
   useState = Stocke l'utilisateur connecté
   useEffect = Exécute le code au lancement de l'app*/}
import {
    getCurrentUser,
    loginUser,
    registerUser
} from "../components/utils/AuthMock";

{/*Auth contexte crée un espace de stockage null par défaut*/}
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    {/*user contient l'user connecter
       setUser met à jour cet utilisateur*/}

    useEffect(() => {
        setUser(getCurrentUser());
        {/*getCurrentUser()) va chercher l'utilisateur dans l'espace de stockage*/}
    }, []);

    const login = (email, password) => {
        const res = loginUser({ email, password });
        {/*Appelle le Login de l'API Fake Mock
            S'il réussit -> on sauvegarde l'user dans le state AuthContext*/}
        if (res.success) {
            setUser(res.user);
        }
        return res;
    };

    const register = (name, email, password) => {
        const res = registerUser({ name, email, password });
        if (res.success) {
            setUser(res.user);
        }
        return res;
    };

    const logout = () => {
        localStorage.removeItem("swag_current_user");
        {/*Suppression de l'user en stockage local
            Met user à null -> logout*/}
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {/*Donne l'accès à user, login, register, logout sans props */}
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}