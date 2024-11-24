import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import StudentForm from "../components/StudentForm";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Registrar nuevo estudiante",
					hrefBackButton: RouterLinks.estudiantes.all,
				}}
			>
				<StudentForm redirect={RouterLinks.estudiantes.all} />
			</PageTemplate>
		</>
	);
};

export default Page;
