import { createContext, useContext, useState, useEffect } from "react";
import {
    getCurrentUser,
    loginUser,
    registerUser
} from "../components/utils/AuthMock";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

    const login = (email, password) => {
        const res = loginUser({ email, password });
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
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}