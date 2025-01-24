import { themes } from "~/shared/constants";

export type CodeBlockProps = {
  language: string;
  filename: string;
  style?: (typeof themes)[number]["name"];
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);
