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
import Button from "@/app/common/components/Button";
import StudentRelationItem from "../components/StudentRelationItem";
import SectionContainer from "@/app/common/components/SectionContainer";
import TextValue from "@/app/common/components/TextValue";

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
					<IconButton href={RouterLinks.estudiantes.edit(id)}>
						<EditIcon />
					</IconButton>
				),
			}}
		>
			<SectionContainer>
				{student && (
					<>
						<div className="grid grid-cols-2">
							<TextValue title="Nombre" value={student.name} />
							<TextValue title="Apellido" value={student.lastname} />
							<TextValue
								title="Nacimiento"
								value={new Date(student.birthday).toDateString()}
							/>
							<TextValue
								title="C.I."
								value={`${student.nationality}-${student.CI}`}
							/>
							<TextValue title="Direccion" value={student.address} />
							<TextValue title="Genero" value={student.gender} />
						</div>

						<div className="grid grid-cols-2">
							<TextValue title="Telefono" value={student.phone_number} />
							<TextValue title="Email" value={student.email} />
						</div>
					</>
				)}
			</SectionContainer>

			<SectionContainer>
				<div className="flex justify-between">
					<Title titleType="h3">Relaciones</Title>

					<Button href={RouterLinks.estudiantes.relaciones(studentId)}>
						Editar relaciones
					</Button>
				</div>

				<div>
					{studentRelations.map((a) => (
						<StudentRelationItem key={a._id} data={a} />
					))}
				</div>
			</SectionContainer>
		</PageTemplate>
	);
};

export default Page;
