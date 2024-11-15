"use client";
import Link from "next/link";
import PageTemplate from "./common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";

export default function Home() {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "pagina principaaaal",
				}}
			>
				<Link href={RouterLinks.nucleos.all}>nucleos</Link>
				<br />
				<Link href={RouterLinks.sedes.all}>Sedes</Link>
			</PageTemplate>
		</>
	);
}
