import { createContext, useContext } from "react";

const GlobalContext = createContext();

const useGlobalContext = () => {
  const globalState = useContext(GlobalContext);
  return globalState;
};

export { GlobalContext, useGlobalContext };
