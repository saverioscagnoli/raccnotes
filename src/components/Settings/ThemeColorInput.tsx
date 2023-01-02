import { EditIcon } from "@chakra-ui/icons";
import { RxReset } from "react-icons/rx";
import {
  Flex,
  Text,
  InputGroup,
  InputLeftAddon,
  Input,
  IconButton,
  Icon,
  InputRightAddon,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useSettings } from "../../hooks";

type ThemeColorInputProps = {
  label: string;
  dark?: boolean;
};

function ThemeColorInput({ label, dark }: ThemeColorInputProps) {
  const [readonly, setReadonly] = useState(true);
  const inputRef = useRef<HTMLInputElement>();
  const { settings, setSettings } = useSettings();
  const [lightColor, darkColor] = [
    settings.theme.lightColor,
    settings.theme.darkColor,
  ];
  const [bg, setBg] = useState(dark ? darkColor : lightColor);

  return (
    <Flex alignItems="center" gap="1rem">
      <Text fontWeight="semibold">{label}</Text>
      <InputGroup w="10rem">
        <InputLeftAddon children="#" />
        <Input
          ref={inputRef}
          readOnly={readonly}
          defaultValue={dark ? darkColor.substring(1) : lightColor.substring(1)}
          onBlur={evt => {
            setReadonly(true);
            setSettings({
              ...settings,
              theme: {
                lightColor: dark ? lightColor : `#${evt.target.value}`,
                darkColor: dark ? `#${evt.target.value}` : darkColor,
              },
            });
          }}
          onChange={evt => {
            const value = evt.target.value;
            if (value.length > 6) {
              evt.target.value = value.substring(0, 6);
            }
            setBg(`#${value}`);
          }}
        />
        <InputRightAddon bg={bg} />
      </InputGroup>
      <IconButton
        aria-label="edit"
        icon={<EditIcon />}
        colorScheme="red"
        onClick={() => {
          inputRef.current.focus();
          setReadonly(false);
        }}
      />
      <IconButton
        aria-label="reset"
        icon={<Icon as={RxReset} />}
        disabled={
          dark
            ? darkColor === "#252525"
              ? true
              : false
            : lightColor === "#F7FAFC"
            ? true
            : false
        }
        onClick={() => {
          setSettings({
            ...settings,
            theme: {
              lightColor: dark ? lightColor : "#F7FAFC",
              darkColor: dark ? "#252525" : darkColor,
            },
          });
          inputRef.current.value = dark ? "#252525" : "#F7FAFC";
          setBg(dark ? "#252525" : "#F7FAFC");
        }}
      />
    </Flex>
  );
}

export { ThemeColorInput };
