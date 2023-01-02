import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export interface ISettings {
  theme: {
    lightColor: string;
    darkColor: string;
  };
  bg: {
    src: string;
    colored: boolean;
    opacity: number;
  };
  hotkeys: {
    bold: string;
    italic: string;
    center: string;
    equation: string;
    pageBreak: string;
  };
}

const defaultSettings: ISettings = {
  theme: {
    lightColor: "#F7FAFC",
    darkColor: "#252525",
  },
  bg: {
    src: "2",
    colored: true,
    opacity: 0.05,
  },
  hotkeys: {
    bold: "b",
    italic: "i",
    center: "l",
    equation: "m",
    pageBreak: "p",
  },
};

interface ISettingsContext {
  settings: ISettings;
  setSettings: Dispatch<SetStateAction<ISettings>>;
}

export const SettingsContext = createContext({} as ISettingsContext);

export const SettingsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [settings, setSettings] = useState(defaultSettings);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
