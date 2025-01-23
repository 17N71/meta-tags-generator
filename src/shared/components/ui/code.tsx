import { useAtomValue } from "jotai";
import { inputOutputState } from "~/shared/store/input-output";

export function Code() {
  const { code, isGenerating } = useAtomValue(inputOutputState);

  if (isGenerating) {
    return "///";
  }
  return <section dangerouslySetInnerHTML={{ __html: code! }} />;
}
