import { InputArea } from "~/entities/input-area/ui";
import { OutputArea } from "~/entities/output-area/ui";


export default async function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center">
      <InputArea />
      <OutputArea />
    </main >
  );
}
