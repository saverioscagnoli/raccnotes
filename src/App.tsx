import { ChakraProvider, Image } from "@chakra-ui/react";
import { Editor, Navbar } from "./components";
import { TextContextProvider } from "./contexts";
import { useSettings } from "./hooks";
import { editThemeColors } from "./Theme";

function App() {
  const { settings } = useSettings();
  const [light, dark] = [settings.theme.lightColor, settings.theme.darkColor];
  const ChakraTheme = editThemeColors(light, dark);

  return (
    <ChakraProvider theme={ChakraTheme}>
      <TextContextProvider>
        <Image
          id="bg"
          pos="absolute"
          src={settings.bg.src + ".png"}
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          opacity={settings.bg.opacity}
        />
        <Navbar />
        <Editor />
      </TextContextProvider>
    </ChakraProvider>
  );
}

export { App };
