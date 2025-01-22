import Link from "next/link";
import { LayoutBase } from "~/shared/components/providers";

export function Header() {
	return (
		<header className="bg-gray-900">
			<LayoutBase>
				<nav className="w-full flex justify-between h-16 py-4 ">
					<Link href="/">Logo</Link>
					<ul>
						<li>other projects</li>
					</ul>
				</nav>
			</LayoutBase>
		</header>

	)
}
