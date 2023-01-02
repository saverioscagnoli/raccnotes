import { Dispatch, SetStateAction } from "react";
import { ISettings } from "../contexts";
import { bold, center, equation, italic, pb } from "../utils";

export const useHotkeys = (
  setText: Dispatch<SetStateAction<string[]>>,
  settings: ISettings
) => {
  const toClose = ["(", "[", "{", '"'];
  const closed = [")", "]", "}", '"'];
  const { hotkeys } = settings;
  window.addEventListener("keydown", evt => {
    if (evt.ctrlKey || evt.metaKey) {
      switch (evt.key) {
        case hotkeys.bold:
          bold(evt);
          break;
        case hotkeys.italic:
          italic(evt);
          break;
        case hotkeys.center:
          center(evt);
          break;
        case hotkeys.equation:
          equation(evt);
          break;
        case hotkeys.pageBreak:
          pb(evt);
          break;
      }
    }

    if (evt.key === "Enter") {
      const tx = document.querySelector("textarea");
      if (document.activeElement !== tx) return;
      const text = tx.value.split("\n");
      const lastLine = text[text.length - 1];
      if (lastLine.startsWith("- ")) {
        evt.preventDefault();
        tx.value += "\n- ";
        setText([...text, "- "]);
      } else if (parseInt(lastLine[0]) && lastLine[1] === ".") {
        evt.preventDefault();
        const nextNumber = `${parseInt(lastLine[0]) + 1}. `;
        tx.value += `\n${nextNumber}`;
        setText([...text, nextNumber]);
      }
    } else if (evt.key === "Tab") {
      const tx = document.querySelector("textarea");
      if (document.activeElement !== tx) return;
      evt.preventDefault();
      const [start, end] = [tx.selectionStart, tx.selectionEnd];
      const [beforeContent, afterContent] = [
        tx.value.substring(0, start),
        tx.value.substring(end, tx.value.length),
      ];
      tx.value = beforeContent + "  " + afterContent;
    }

    if (toClose.includes(evt.key)) {
      const tx = document.querySelector("textarea");
      const [start, end] = [tx.selectionStart, tx.selectionEnd];
      tx.setRangeText(closed[toClose.indexOf(evt.key)], start, end);
    }
  });
};
