import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { useText } from "../../hooks";

function ClearModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setText } = useText();
  const tx = document.querySelector("textarea");

  return (
    <>
      <MenuItem color="red.500" icon={<DeleteIcon />} onClick={onOpen}>
        clear notes
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>clear notes?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to delete all your notes? 😱</Text>
            <ModalFooter>
              <Button
                colorScheme="red"
                onClick={() => {
                  tx.value = "";
                  setText([]);
                  onClose();
                }}
              >
                Clear
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export { ClearModal };
