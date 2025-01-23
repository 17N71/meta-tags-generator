"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { AlertCircle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, AlertDescription } from "~/shared/components/ui/alert";
import { Button } from "~/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "~/shared/components/ui/card";
import { Textarea } from "~/shared/components/ui/textarea";
import { highlight } from "~/shared/lib";
import { inputOutputState } from "~/shared/store/input-output";
import { InputFormValues, InputFormValuesType } from "../model/schema";

export function InputArea() {
  const [, setInput] = useAtom(inputOutputState);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InputFormValuesType>({
    resolver: zodResolver(InputFormValues)
  });

  const onSubmit: SubmitHandler<InputFormValuesType> = async data => {
    const code = await highlight({
      code: data.code,
      lang: "ts"
    });
    setInput(() => ({
      isGenerating: false,
      code
    }));
  };

  return (
    <Card className="w-full max-w-2xl xl:self-start">
      <CardHeader className="border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">
              Meta Tags Validator
            </CardTitle>
            <CardDescription
              className="text-zinc-400  text-nowrap  text-ellipsis
"
            >
              Validate and after generate your meta tags and title tag for
              Next.js 14+ (head tag are optional)
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            {...register("code")}
            placeholder="Enter meta tags and title tag (head tag are optional)"
            className="w-full min-h-40 font-mono text-sm"
          />

          {errors.code && (
            <Alert variant="destructive" className="border-red-500 mt-7">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errors.code.message}</AlertDescription>
            </Alert>
          )}
          {!errors.code && <div className="h-8 mt-11"></div>}
          <Button type="submit" className="mt-24 w-full">
            Generate
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
