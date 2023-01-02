import {
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSettings } from "../../hooks";
import { ThemeColorInput } from "./ThemeColorInput";

function Appearence() {
  const { settings, setSettings } = useSettings();
  const [sliderValue, setSliderValue] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Stack w="100%" p="1rem" mt="-1rem" gap="1rem">
      <ThemeColorInput label="light color" />
      <ThemeColorInput label="dark color" dark />
      <Flex justifyContent="space-between">
        <VStack>
          <Text fontWeight="semibold">colored background</Text>
          <Switch
            size="lg"
            defaultChecked={settings.bg.colored}
            onChange={() => {
              const newSettings = { ...settings };
              newSettings.bg.colored = !settings.bg.colored;
              newSettings.bg.src = newSettings.bg.src === "1" ? "2" : "1";
              setSettings(newSettings);
            }}
          />
        </VStack>
        <VStack>
          <Text fontWeight="semibold">background opacity</Text>
          <Slider
            defaultValue={settings.bg.opacity}
            min={0}
            max={100}
            colorScheme="teal"
            onChange={v => {
              setSliderValue(v);
              const newSettings = { ...settings };
              newSettings.bg.opacity = v * 0.01;
              console.log(v)
              setSettings(newSettings);
            }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={(sliderValue * 0.01).toFixed(2)}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </VStack>
      </Flex>
    </Stack>
  );
}

export { Appearence };
