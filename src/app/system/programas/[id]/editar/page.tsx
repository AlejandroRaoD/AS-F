"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import ProgramaForm from "../../components/ProgramaForm";
import usePrograma from "../../hook/useProgramas";

const Page = () => {
	const { id } = useParams();

	const { programa } = usePrograma({ id });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar Programa",
					hrefBackButton: RouterLinks.programas.one(id),
				}}
			>
				{programa && (
	
						<ProgramaForm
							data={programa}
							redirect={RouterLinks.programas.one(id)}
						/>
		
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
