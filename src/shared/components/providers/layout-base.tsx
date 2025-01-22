import type { PropsWithChildren } from "react";
import { cn } from "~/shared/lib";

export function LayoutBase({ children, className }: PropsWithChildren<{ className?: string }>) {
	return <div className={cn("max-w-screen-2xl mx-auto", className)}>{children}</div>
}
