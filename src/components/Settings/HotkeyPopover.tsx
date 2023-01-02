import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  useDisclosure,
  PopoverFooter,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSettings } from "../../hooks";

type HotkeyPopoverProps = {
  keybind: string;
  k: string;
};

function HotkeyPopover({ keybind, k }: HotkeyPopoverProps) {
  const { settings, setSettings } = useSettings();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const bind = (evt: KeyboardEvent) => {
    onClose();
    const newSettings = { ...settings };
    //@ts-ignore
    newSettings.hotkeys[k] = evt.key;
    setSettings({ ...newSettings });
    window.removeEventListener("keypress", bind);
  };

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button
          onClick={() => {
            window.addEventListener("keypress", bind);
          }}
        >
          {keybind}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody fontSize="20" fontWeight="semibold">
          waiting for key press...
        </PopoverBody>
        <PopoverFooter>
          <Button colorScheme="red" onClick={onClose}>
            cancel
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export { HotkeyPopover };
