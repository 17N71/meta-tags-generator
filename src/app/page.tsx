import { default as lazy } from "next/dynamic";
import { Suspense } from "react";
import CodeLoading from "~/shared/components/loading";

export const dynamic = "force-dynamic";

const LazyInput = lazy(
  async () => (await import("~/entities/input-area/ui")).InputArea,
);
const LazyOutput = lazy(
  async () => (await import("~/entities/output-area/ui")).OutputArea,
);

export default async function Home() {
  return (
    <main className="w-full h-full gap-4 flex xl:flex-row flex-col items-center  justify-center px-4 ">
      {/* <CodeLoading /> */}
      <Suspense fallback={<CodeLoading />}>
        <LazyInput />
        <LazyOutput />
      </Suspense>
    </main>
  );
}
