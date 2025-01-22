'use client'
import { useAtomValue } from 'jotai'
import { CodeBlock } from "~/components/ui/code-block"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/shared/components/ui/card"
import { inputOutputState } from "~/shared/store/input-output"

export function OutputArea() {
	const { code, isGenerating } = useAtomValue(inputOutputState)
	if (isGenerating) {
		return '/\/\/\//\/\/\\/\/\/'
	}
	return (
		<Card className="w-full max-w-2xl ">
			<CardHeader className="border-b border-zinc-800">
				<div className="flex items-center justify-between">
					<div>
						<CardTitle className="text-xl font-semibold text-zinc-100">Generated Code</CardTitle>
						<CardDescription className="text-zinc-400">
							Your formatted meta tags code
						</CardDescription>
					</div>
				</div>
			</CardHeader>
			<CardContent className="p-0">
				<div className="p-4 font-mono text-sm rounded-b-lg">
					<CodeBlock filename="meta.ts" language="tsx" code={code!} />
				</div>
			</CardContent>
		</Card>
	)
}

