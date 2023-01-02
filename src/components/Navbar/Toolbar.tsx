import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsWrench } from "react-icons/bs";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlinePicCenter,
} from "react-icons/ai";
import {
  FaEquals,
  FaGreaterThanEqual,
  FaLessThanEqual,
  FaNotEqual,
} from "react-icons/fa";
import { TbPageBreak } from "react-icons/tb";
import { useEffect, useState } from "react";
import { platform } from "@tauri-apps/api/os";
import { bold, center, equation, italic, pb } from "../../utils";
import { ClearModal } from "./ClearModal";
import { useSettings } from "../../hooks";

function Toolbar() {
  const [k, setK] = useState("");
  const { settings } = useSettings();
  const { hotkeys } = settings;

  const mathIcon = [FaEquals, FaGreaterThanEqual, FaLessThanEqual, FaNotEqual][
    Math.floor(Math.random() * 4)
  ];

  useEffect(() => {
    platform().then(os => setK(os === "darwin" ? "⌘" : "ctrl"));
  }, []);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={BsWrench} />}>
        tools
      </MenuButton>
      <MenuList>
        <MenuItem
          icon={<Icon as={AiOutlineBold} />}
          command={`${k} + ${hotkeys.bold}`}
          //@ts-ignore
          onClick={bold}
        >
          bold
        </MenuItem>
        <MenuItem
          icon={<Icon as={AiOutlineItalic} />}
          command={`${k} + ${hotkeys.italic}`}
          //@ts-ignore
          onClick={italic}
        >
          italic
        </MenuItem>
        <MenuItem
          icon={<Icon as={AiOutlinePicCenter} />}
          command={`${k} + ${hotkeys.center}`}
          //@ts-ignore
          onClick={center}
        >
          center text
        </MenuItem>
        <MenuItem
          icon={<Icon as={mathIcon} />}
          command={`${k} + ${hotkeys.equation}`}
          //@ts-ignore
          onClick={equation}
        >
          equation
        </MenuItem>
        <MenuItem
          icon={<Icon as={TbPageBreak} />}
          command={`${k} + ${hotkeys.pageBreak}`}
          //@ts-ignore
          onClick={pb}
        >
          break page
        </MenuItem>
        <ClearModal />
      </MenuList>
    </Menu>
  );
}

export { Toolbar };
