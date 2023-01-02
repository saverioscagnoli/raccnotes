import { useContext } from "react";
import { TextContext } from "../contexts";

export const useText = () => useContext(TextContext);
