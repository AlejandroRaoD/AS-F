"use client";
import Link from "next/link";
import PageTemplate from "./common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";

export default function Home() {
	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Abreu System",
			}}
		>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<h1 className="text-3xl font-bold text-gray-800 mb-8">
					PAGINA PRINCIPAL
				</h1>

				<div className="space-y-4">
					<Link
						href={RouterLinks.nucleos.all}
						className="inline-block w-48 text-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition mb-4"
					>
						Nucleos
					</Link>
					<Link
						href={RouterLinks.sedes.all}
						className="inline-block w-48 text-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
					>
						Sedes
					</Link>
				</div>
			</div>
		</PageTemplate>
	);
}
