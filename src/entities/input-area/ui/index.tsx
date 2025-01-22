"use client";

import { useAtom } from "jotai";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "~/shared/components/ui/button";
import { Textarea } from "~/shared/components/ui/textarea";
import { inputOutputState } from "~/shared/store/input-output";
import { InputFormValues, InputFormValuesType } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Alert,
	AlertDescription,
} from "~/shared/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/shared/components/ui/card";
// import { highlightCode } from "~/shared/lib";

export function InputArea() {
	const [, setInput] = useAtom(inputOutputState);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<InputFormValuesType>({
		resolver: zodResolver(InputFormValues),
	});

	const onSubmit: SubmitHandler<InputFormValuesType> = async (data) => {
		// const code = await highlightCode(data.code, 'tsx')
		setInput(() => ({
			isGenerating: false,
			code: data.code,
		}));
	};

	return (
		<Card className="w-full max-w-2xl self-start">
			<CardHeader>
				<CardTitle className="text-xl font-semibold">Meta Tags Validator</CardTitle>
				<CardDescription>
					Validate and after generate your meta tags  and title tag for Next.js 14+ (head tag are optional)
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Textarea
						{...register("code")}
						cols={60}
						placeholder="Enter meta tags and title tag (head tag are optional)"
						className="min-h-32 font-mono text-sm"
					/>

					{errors.code && (
						<Alert variant="destructive" className="border-red-500 mt-7">
							<AlertCircle className="h-4 w-4" />
							<AlertDescription>
								{errors.code.message}
							</AlertDescription>
						</Alert>
					)}

					{!errors.code && (
						<Alert className="border-green-500 bg-green-50 mt-7">
							<CheckCircle2 className="h-4 w-4 text-green-500" />
							<AlertDescription className="text-green-700">
								Valid HTML meta tags structure!
							</AlertDescription>
						</Alert>
					)}

					<Button type="submit" className="mt-4">
						Generate
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
