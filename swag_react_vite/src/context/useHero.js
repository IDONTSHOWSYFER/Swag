import { useContext } from "react";
import { HeroContext } from "./HeroContext";

export function useHero() {
  return useContext(HeroContext);
}