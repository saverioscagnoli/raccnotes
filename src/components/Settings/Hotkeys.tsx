import {
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { platform } from "@tauri-apps/api/os";
import { useEffect, useState } from "react";
import { useSettings } from "../../hooks";
import { HotkeyPopover } from "./HotkeyPopover";
import { RxReset } from "react-icons/rx";

function Hotkeys() {
  const [k, setK] = useState("");
  const { settings, setSettings } = useSettings();
  const { hotkeys } = settings;

  useEffect(() => {
    platform().then(os => setK(os === "darwin" ? "⌘" : "ctrl"));
  }, []);

  const resetHotkey = (key: string, action: string) => {
    const newSettings = { ...settings };
    //@ts-ignore
    newSettings.hotkeys[action] = key;
    setSettings(newSettings);
  };

  return (
    <VStack w="100%" p="1rem" mt="-1rem" gap="1.5rem" overflow="auto">
      <Flex alignItems="center" gap="0.5rem">
        <Heading fontSize="25" mr="1rem">
          bold
        </Heading>
        <Text>{k} + </Text>
        <HotkeyPopover keybind={hotkeys.bold} k={"bold"} />
        <IconButton
          aria-label="reset"
          disabled={hotkeys.bold === "b" ? true : false}
          icon={<Icon as={RxReset} />}
          onClick={() => resetHotkey("b", "bold")}
        />
      </Flex>
      <Flex alignItems="center" gap="0.5rem">
        <Heading fontSize="25" mr="1rem">
          italic
        </Heading>
        <Text>{k} + </Text>
        <HotkeyPopover keybind={hotkeys.italic} k={"italic"} />
        <IconButton
          aria-label="reset"
          disabled={hotkeys.italic === "i" ? true : false}
          icon={<Icon as={RxReset} />}
          onClick={() => resetHotkey("i", "italic")}
        />
      </Flex>
      <Flex alignItems="center" gap="0.5rem">
        <Heading fontSize="25" mr="1rem">
          center
        </Heading>
        <Text>{k} + </Text>
        <HotkeyPopover keybind={hotkeys.center} k={"center"} />
        <IconButton
          aria-label="reset"
          disabled={hotkeys.center === "l" ? true : false}
          icon={<Icon as={RxReset} />}
          onClick={() => resetHotkey("l", "center")}
        />
      </Flex>
      <Flex alignItems="center" gap="0.5rem">
        <Heading fontSize="25" mr="1rem">
          equation
        </Heading>
        <Text>{k} + </Text>
        <HotkeyPopover keybind={hotkeys.equation} k={"equation"} />
        <IconButton
          aria-label="reset"
          disabled={hotkeys.equation === "m" ? true : false}
          icon={<Icon as={RxReset} />}
          onClick={() => resetHotkey("m", "equation")}
        />
      </Flex>
      <Flex alignItems="center" gap="0.5rem">
        <Heading fontSize="25" mr="1rem">
          page break
        </Heading>
        <Text>{k} + </Text>
        <HotkeyPopover keybind={hotkeys.pageBreak} k={"pageBreak"} />
        <IconButton
          aria-label="reset"
          disabled={hotkeys.pageBreak === "p" ? true : false}
          icon={<Icon as={RxReset} />}
          onClick={() => resetHotkey("p", "pageBreak")}
        />
      </Flex>
    </VStack>
  );
}

export { Hotkeys };
