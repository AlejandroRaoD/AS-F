"use client";
import React, { useEffect } from "react";
import useNucleo from "./hooks/useNucleo";
import PageTemplate from "../common/components/PageTemplate";
import Title from "../common/components/Title";
import { NucleoItem } from "./components/NucleoItem";
import NucleoForm from "./components/NucleoForm";

const Page = () => {
	const { nucleos, getNucleos } = useNucleo();

	useEffect(() => {
		getNucleos();
	}, []);

	return (
		<>
			<PageTemplate pageTitle="Nucleos">
				<>
					<Title>nucleos </Title>

					{nucleos.map((n) => (
						<NucleoItem key={n._id} data={n} />
					))}

					<hr />

					<Title>nucleos</Title>

					<NucleoForm />
				</>
			</PageTemplate>
		</>
	);
};

export default Page;
