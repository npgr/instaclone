import { createContext } from "react";

interface IAuth {
    auth: object | null,
    logout: () => void,
    setUser: (user: object) => void
}

export const EMPTY_USER = {
  auth: null,
  logout: () => null,
  setUser: () => null
}

const AuthContext = createContext<IAuth>(EMPTY_USER);

export default AuthContext;
