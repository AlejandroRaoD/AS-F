"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useSede from "./hooks/useSede";
import { SedeItem } from "./components/SedeItem";

const Page = () => {
	const { sedes, getSedes } = useSede();

	useEffect(() => {
		getSedes({ limit: 20 });
	}, []);

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Sedes",
					hrefBackButton: RouterLinks.dashboard,
				}}
			>
				<>
					<Link href={RouterLinks.sedes.create}>Crear</Link>

					{sedes.map((n) => (
						<SedeItem key={n._id} data={n} />
					))}
				</>
			</PageTemplate>
		</>
	);
};

export default Page;
