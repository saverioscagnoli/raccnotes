export const hotkey = (
  txt: string,
  positions: number[],
  evt?: KeyboardEvent
) => {
  const tx = document.querySelector("textarea");
  if (evt) evt.preventDefault();
  const [start, end] = [tx.selectionStart, tx.selectionEnd];
  tx.setRangeText(txt, start, end);
  const [hStart, hEnd] = positions;
  tx.setSelectionRange(start + hStart, start + hEnd);
  tx.focus();
};

export const bold = (evt?: KeyboardEvent) => hotkey("**bold**", [2, 6], evt);
export const italic = (evt?: KeyboardEvent) => hotkey("*italic*", [1, 7], evt);
export const center = (evt?: KeyboardEvent) =>
  hotkey("<center>text</center>", [8, 12], evt);
export const equation = (evt?: KeyboardEvent) =>
  hotkey("$$\nequation\n$$", [3, 11], evt);
export const pb = (evt?: KeyboardEvent) =>
  hotkey('<div class="pagebreak"></div>\n', [30, 30], evt);
