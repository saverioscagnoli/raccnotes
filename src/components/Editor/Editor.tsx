import { Box, Flex, Textarea } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";
import { useText } from "../../hooks";
import { EditorTheme } from "./EditorTheme";
import { useRef, useEffect } from "react";
import "katex/dist/katex.min.css";

function Editor() {
  const { text, setText } = useText();
  const [remark, rehype] = [
    [remarkMath, remarkGfm, remarkBreaks, remarkEmoji],
    [rehypeKatex, rehypeRaw],
  ];
  const renderRef = useRef<HTMLDivElement>();
  useEffect(() => {
    setTimeout(() => {
      renderRef.current.scrollIntoView();
    }, 10);
  }, [text]);

  return (
    <Flex w="100%" h="89vh" pl="1rem" gap="0.5rem">
      <Textarea
        id="input"
        w="100%"
        h="100%"
        defaultValue="# <center>Awesome title :rainbow:</center>"
        spellCheck={false}
        onChange={evt => {
          setText(evt.target.value.split("\n"));
        }}
      />
      <Box
        id="output"
        w="100%"
        h="100%"
        overflowY="auto"
        zIndex="2"
        pos="relative"
      >
        <ReactMarkdown
          components={ChakraUIRenderer(EditorTheme as any)}
          children={text.join("\n")}
          remarkPlugins={remark}
          rehypePlugins={rehype}
          skipHtml
        />
        <span ref={renderRef}></span>
      </Box>
    </Flex>
  );
}

export { Editor };
