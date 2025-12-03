import { createContext } from "react";

export const HeroContext = createContext({
  isComplete: false,
  setIsComplete: () => {},
});