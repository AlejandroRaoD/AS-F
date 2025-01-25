"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import StudentRelationForm from "../../components/StudentRelationForm";
import useStudentRelation from "../../hooks/useStudentRelation";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import StudentRelationItem from "../../components/StudentRelationItem";
import SectionContainer from "@/app/common/components/SectionContainer";
import Title from "@/app/common/components/Title";

const Page = () => {
	const { id } = useParams();

	const studentId = getOneStringParams(id);

	const { studentRelations } = useStudentRelation({ query: { studentId } });

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Editar relaciones",
				hrefBackButton: RouterLinks.estudiantes.one(id),
			}}
		>
			<SectionContainer>
				<Title titleType="h2"> Relaciones</Title>

				{studentRelations.map((a) => (
					<StudentRelationItem key={a._id} data={a} edit={true} />
				))}
			</SectionContainer>

			<SectionContainer>
				{studentRelations && (
					<StudentRelationForm
						studentId={studentId}
						// redirect={RouterLinks.estudiantes.one(id)}
					/>
				)}
			</SectionContainer>
		</PageTemplate>
	);
};

export default Page;
