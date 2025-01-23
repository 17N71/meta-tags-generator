import { BundledLanguage } from "shiki";
import { themes } from "../constants";

export type themeType = typeof themes[number]["name"];
export type highlightProps = {
  code: string;
  lang: BundledLanguage;
  theme?: themeType;
};
