"use client";
import { useAtomValue } from "jotai";
import { Copy, FileCode2 } from "lucide-react";
import { Button } from "~/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "~/shared/components/ui/card";
import { Code } from "~/shared/components/ui/code";
import { inputOutputState } from "~/shared/store/input-output";

export function OutputArea() {
  const { code, isGenerating } = useAtomValue(inputOutputState);
  if (isGenerating) {
    return "/\/\/\//\/\/\\/\/\/";
  }
  return (
    <Card className="w-full max-w-2xl xl:self-start">
      <CardHeader className="border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold text-zinc-100">
              Generated Code
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Your formatted meta tags code
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-4 font-mono text-sm rounded-b-lg">
          {code ? (
            <Code />
          ) : (
            <div className="min-h-44 flex flex-col items-center justify-center text-center p-8 border border-dashed rounded-lg">
              <FileCode2 className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">
                No code generated yet
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Enter your meta tags in the validator and click generate to see
                the formatted code here
              </p>
              <Button
                variant="outline"
                size="sm"
                className="opacity-50"
                disabled
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy Code
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
