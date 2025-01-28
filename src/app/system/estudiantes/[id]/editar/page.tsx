"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import StudentForm from "../../components/StudentForm";
import useStudent from "../../hooks/useStudent";
import StudentRelationForm from "../../components/StudentRelationForm";
import { UserPermissions } from "@/app/system/user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();

	const { student } = useStudent({ id });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar Estudiante",
					hrefBackButton: RouterLinks.estudiantes.one(id),
				}}
				permissionsRequired={[UserPermissions.estudiantesEdit]}
			>
				{student && (
					<>
						<h2>Editar datos del estudiante</h2>
						<StudentForm
							data={student}
							// redirect={RouterLinks.estudiantes.one(id)}
						/>
					</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
