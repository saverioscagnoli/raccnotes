import { Box, Divider, ListItem } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type Children = { children: string };

export const EditorTheme = {
  li: ({ children }: Children) => <ListItem>{children}</ListItem>,
  hr: () => <Divider mt={"1rem"} mb={"1rem"} />,
  input: (d: any) => (
    <input type="checkbox" defaultChecked={d.checked} readOnly />
  ),
  code: ({ inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <Box className="code" display="inline-block">
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, "")}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      </Box>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};
