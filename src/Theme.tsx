import { extendTheme, StyleProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const DefaultTheme = extendTheme({
  styles: {
    global: (props: StyleProps) => ({
      body: {
        bg: mode("#F7FAFC", "#252525")(props),
        overflow: "hidden",
      },
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        background: "gray",
        borderRadius: "5px",
      },
      "@media print": {
        "@page": {
          size: "A4",
        },
        "#navbar, #input, #bg": {
          display: "none",
        },
        "#output": {
          color: "black",
          overflow: "visible",
        },
        ".pagebreak": {
          pageBreakAfter: "always",
        },
        ".code": {
          border: "2px solid black",
          borderRadius: "5px",
          fontFamily: "'Courier New', Courier, monospace;",
        },
      },
    }),
  },
  config: {
    disableTransitionOnChange: false,
  },
});

export const editThemeColors = (light: string, dark: string) =>
  extendTheme(
    {
      styles: {
        global: (props: StyleProps) => ({
          body: {
            bg: mode(light, dark)(props),
          },
        }),
      },
    },
    DefaultTheme
  );
