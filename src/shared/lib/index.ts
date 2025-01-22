import { transformerCopyButton } from '@rehype-pretty/transformers'
import { clsx, type ClassValue } from "clsx"
import rehypePrettyCode from "rehype-pretty-code"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { createHighlighter } from "shiki"
import type { BundledLanguage } from 'shiki/bundle/web'
import { twMerge } from "tailwind-merge"
import { unified } from "unified"
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