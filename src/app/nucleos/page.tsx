"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import useNucleo from "./hooks/useNucleo";
import PageTemplate from "../common/components/PageTemplate";
import { NucleoItem } from "./components/NucleoItem";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	const { nucleos, getNucleos } = useNucleo();

	useEffect(() => {
		getNucleos({ limit: 20 });
	}, []);

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Nucleos",
					hrefBackButton: RouterLinks.dashboard,
				}}
			>
				<>
					<Link href={RouterLinks.nucleos.create}>Crear</Link>

					{nucleos.map((n) => (
						<NucleoItem key={n._id} data={n} />
					))}
				</>
			</PageTemplate>
		</>
	);
};

export default Page;
