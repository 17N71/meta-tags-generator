import * as React from "react";
import { inputOutputState } from "~/shared/store/input-output";
import { useAtomValue } from "jotai"

export function Code() {
  const { code, isGenerating } = useAtomValue(inputOutputState)
  if (isGenerating) {
    return "///"
  }
  return (
    <section
      dangerouslySetInnerHTML={{
        __html: code!,
      }}
    />
  );
}
