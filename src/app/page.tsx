import Link from "next/link";
import PageTemplate from "./common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";

export default function Home() {
	return (
		<>
			<PageTemplate pageTitle="pagina principaaaal">
				<Link href={RouterLinks.nucleos.all}>nucleos</Link>
			</PageTemplate>
		</>
	);
}
