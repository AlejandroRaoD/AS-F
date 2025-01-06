"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useStudent from "../hooks/useStudent";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useStudentRelation from "../hooks/useStudentRelation";
import Link from "next/link";
import Button from "@/app/common/components/Button";
import StudentRelationItem from "../components/StudentRelationItem";

const Page = () => {
	const { id } = useParams();
	const studentId = getOneStringParams(id);

	const { student } = useStudent({ id: studentId });
	const { studentRelations } = useStudentRelation({ query: { studentId } });

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles",
				hrefBackButton: RouterLinks.estudiantes.all,
				rightButtons: (
					<>
						<IconButton href={RouterLinks.estudiantes.edit(id)}>
							<EditIcon />
						</IconButton>
					</>
				),
			}}
		>
			<Button href={RouterLinks.estudiantes.edit(id)}>Editar datos</Button>

			<div>
				{student && (
					<>
						<Title>
							{student.name} {student.lastname}
						</Title>
						{student.phone_number.map((a) => (
							<Title key={a}>{a}</Title>
						))}
						<Title>{new Date(student.birthday).toLocaleDateString()}</Title>
						<Title>{student.address}</Title>
						<Title>{student.gender}</Title>
						<Title>
							{student.nationality}-{student.CI}
						</Title>
						<Title>{student.email}</Title>
					</>
				)}
			</div>

			<div>
				<Title>Relaciones</Title>

				{studentRelations.map((a) => (
					<StudentRelationItem key={a._id} data={a} />
				))}

				<Button href={RouterLinks.estudiantes.relaciones(studentId)}>
					Editar relaciones
				</Button>
			</div>
		</PageTemplate>
	);
};

export default Page;
