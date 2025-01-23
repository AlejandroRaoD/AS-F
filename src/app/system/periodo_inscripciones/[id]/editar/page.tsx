"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useInstrument from "../../hooks/useInstrument";
import InstrumentForm from "../../components/InstrumentForm";

const Page = () => {
	const { id } = useParams();

	const instrumentId = getOneStringParams(id);
	const { instrument } = useInstrument({ id: instrumentId });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar Instrumento",
					hrefBackButton: RouterLinks.instrument.one(id),
				}}
			>
				{instrument && (
					<InstrumentForm
						data={instrument}
						redirect={RouterLinks.instrument.one(id)}
					/>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
