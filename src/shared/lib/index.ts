import { transformerCopyButton } from "@rehype-pretty/transformers";
import { codeToHtml } from "shiki";
import { twMerge } from "tailwind-merge";
import { highlightProps } from "../types";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function highlight({
  code,
  lang,
  theme = "night-owl"
}: highlightProps) {
  const out = await codeToHtml(code, {
    lang,
    theme,
    transformers: [
      transformerCopyButton({
        visibility: "always",
        feedbackDuration: 3_000
      })
    ]
  });

  return out;
}
