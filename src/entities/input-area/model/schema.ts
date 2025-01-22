import { z } from "zod";

const validateMetaTags = (input: string) => {
  if (!input?.trim()) {
    return false;
  }

  let content = input.trim();
  if (content.startsWith("<head>") && content.endsWith("</head>")) {
    content = content.slice(6, -7).trim();
  }

  // Split tags while preserving whitespace within attributes
  const tags = content
    .split(/(?=<meta|<title)/)
    .map(tag => tag.trim())
    .filter(Boolean);

  for (const tag of tags) {
    // Check if it's a meta tag or title tag
    const isMetaTag = tag.startsWith("<meta");
    const isTitleTag = tag.startsWith("<title>");

    if (!isMetaTag && !isTitleTag) {
      return false;
    }

    if (isMetaTag) {
      // Check if tag has valid attributes
      const hasValidAttributes =
        tag.includes("name=") || tag.includes("http-equiv=");
      const hasContent = tag.includes("content=");

      if (!hasValidAttributes || !hasContent) {
        return false;
      }
    }

    if (isTitleTag && !tag.match(/^<title>[^<>]+<\/title>$/)) {
      return false;
    }
  }

  return true;
};

export const InputFormValues = z.object({
  code: z
    .string()
    .min(1, "Input cannot be empty")
    .refine(val => validateMetaTags(val), {
      message: "Invalid meta tags format. Please check your HTML structure."
    })
});

export type InputFormValuesType = z.infer<typeof InputFormValues>;
