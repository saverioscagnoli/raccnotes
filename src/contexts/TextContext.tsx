import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useHotkeys, useSettings } from "../hooks";

interface ITextContext {
  text: string[];
  setText: Dispatch<SetStateAction<string[]>>;
}

export const TextContext = createContext({} as ITextContext);

export const TextContextProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<string[]>([
    "# <center>Awesome title :rainbow:</center>",
  ]);
  const { settings } = useSettings();

  useEffect(() => {
    useHotkeys(setText, settings);
  }, []);

  return (
    <TextContext.Provider value={{ text, setText }}>
      {children}
    </TextContext.Provider>
  );
};
