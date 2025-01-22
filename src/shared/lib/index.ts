import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { JSX } from 'react'
import type { BundledLanguage } from 'shiki/bundle/web'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki/bundle/web'
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets"
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { codeToHtml, createHighlighter } from "shiki"
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function highlightCode(code: string, lang:BundledLanguage) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 1_000,
        }),
      ],
    })
    .use(rehypeStringify)
    .process(`\`\`\`${lang}\n${code}\n\`\`\``);

  return String(file);
}

export const parseToCode = async (code: string, lang: BundledLanguage) =>{
  const file = await unified()
  .use(remarkParse)
  .use(transformerCopyButton)
  .use(rehypePrettyCode, {
    // See Options section below.
  })
  .use(rehypeStringify)
  .process(code);
  
  const  highlighter =( await createHighlighter({langs: ['tsx', 'ts', 'jsx', 'js', 'javascript', 'typescript'],
    themes:['one-dark-pro', 'github-dark']

  })).codeToHast(file.value.toString(),{
    lang,
    theme: "github-dark-default"
  })

  return highlighter
}