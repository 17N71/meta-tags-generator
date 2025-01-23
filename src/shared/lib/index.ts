import { transformerCopyButton } from '@rehype-pretty/transformers'
import { clsx, type ClassValue } from "clsx"
import { codeToHtml } from "shiki"
import { twMerge } from "tailwind-merge"
import { highlightProps } from "../types"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function highlight({
code,
lang,
theme = 'night-owl'
}:highlightProps) {
  const out = await codeToHtml(code, {
    lang,
    theme,
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ]
  })

  return out
}
