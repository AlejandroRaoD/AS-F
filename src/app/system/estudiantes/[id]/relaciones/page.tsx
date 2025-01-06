"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import StudentRelationForm from "../../components/StudentRelationForm";
import useStudentRelation from "../../hooks/useStudentRelation";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import StudentRelationItem from "../../components/StudentRelationItem";

const Page = () => {
	const { id } = useParams();

	const studentId = getOneStringParams(id);

	const { studentRelations } = useStudentRelation({ query: { studentId } });

	return (
		<>
			<PageTemplate
				navBarProps={{
					navTitle: "Editar relaciones",
					hrefBackButton: RouterLinks.estudiantes.one(id),
				}}
			>
				{studentRelations.map((a) => (
					<StudentRelationItem key={a._id} data={a} edit={true} />
				))}

				{studentRelations && (
					<>
						<h2>añadir</h2>
						<StudentRelationForm
							studentId={studentId}
							// redirect={RouterLinks.estudiantes.one(id)}
						/>
					</>
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
