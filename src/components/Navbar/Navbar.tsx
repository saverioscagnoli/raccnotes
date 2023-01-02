import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { SiKofi } from "react-icons/si";
import {
  Flex,
  Heading,
  Button,
  useColorMode,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { Toolbar } from "./Toolbar";
import { FileMenu } from "./FileMenu";
import { Settings } from "../Settings";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dark = colorMode === "dark";

  return (
    <Flex id="navbar" w="100%" p="1.2rem" alignItems="center">
      <Flex w="100%" justifyContent="flex-start" gap="1rem">
        <Heading mt="-0.4rem">raccnotes</Heading>
        <Toolbar />
        <FileMenu />
      </Flex>
      <Flex w="100%" justifyContent="flex-end" gap="1rem">
        <Settings />
        <IconButton
          aria-label="change theme"
          icon={dark ? <SunIcon /> : <MoonIcon />}
          colorScheme="purple"
          onClick={toggleColorMode}
        />
        <a href="https://ko-fi.com/saverioscagnoli" target="_blank">
          <Button leftIcon={<Icon as={SiKofi} />}>Ko-fi</Button>
        </a>
      </Flex>
    </Flex>
  );
}

export { Navbar };
