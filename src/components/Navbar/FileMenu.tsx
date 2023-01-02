import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ImFilePdf } from "react-icons/im";
import { BsFillMarkdownFill } from "react-icons/bs";
import { invoke } from "@tauri-apps/api";
import { save } from "@tauri-apps/api/dialog";

function FileMenu() {
  const exportMD = async () => {
    const path = await save({
      filters: [
        {
          name: "md",
          extensions: ["md"],
        },
      ],
    });
    if (!path) return;
    await invoke("save_file", {
      path,
      contents: document.querySelector("textarea").value,
    });
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        file
      </MenuButton>
      <MenuList>
        <MenuItem icon={<Icon as={ImFilePdf} />} onClick={print}>
          save as PDF
        </MenuItem>
        <MenuItem
          icon={<Icon as={BsFillMarkdownFill} />}
          onClick={async () => await exportMD()}
        >
          save as MD
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export { FileMenu };
