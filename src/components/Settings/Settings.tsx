import { SettingsIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  Flex,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
  IconButton,
  Icon,
  Divider,
  Box,
} from "@chakra-ui/react";
import { BsBrushFill, BsKeyboardFill } from "react-icons/bs";
import { useState } from "react";
import { Appearence } from "./Appearence";
import { Hotkeys } from "./Hotkeys";

export function Settings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [render, setRender] = useState<string>("appearence");

  const whatToRender = (render: string) => {
    switch (render) {
      case "appearence":
        return <Appearence />;
      case "hotkeys":
        return <Hotkeys />;
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue" rightIcon={<SettingsIcon />}>
        settings
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>settings {<SettingsIcon />}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex w="100%" h="50vh">
              <VStack w="10%">
                <IconButton
                  aria-label="appearence"
                  icon={<Icon as={BsBrushFill} />}
                  onClick={() => setRender("appearence")}
                />
                <IconButton
                  aria-label="hotkeys"
                  icon={<Icon as={BsKeyboardFill} />}
                  onClick={() => setRender("hotkeys")}
                />
              </VStack>
              <Divider ml="1rem" orientation="vertical" />
              {whatToRender(render)}
            </Flex>
            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                save
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
