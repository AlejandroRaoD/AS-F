"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import TextValue from "@/app/common/components/TextValue";
import useSede from "../../sedes/hooks/useSede";
import SectionContainer from "@/app/common/components/SectionContainer";
import useStudentEnrollment from "../hooks/useStudentEnrollment";
import useInstrument from "../../instrumentos/hooks/useInstrument";
import useStudent from "../../estudiantes/hooks/useStudent";
import Title from "@/app/common/components/Title";
import Button from "@/app/common/components/Button";
import useEnrollmentPeriod from "../../periodo_inscripciones/hooks/useEnrollmentPeriod";
import CatedraEnrollmentItem from "../components/CatedraEnrollmentItem";
import Spacer from "@/app/common/components/Spacer";

const Page = () => {
	const { id } = useParams();
	const studentEnrollmentId = getOneStringParams(id);

	const { studentEnrollment } = useStudentEnrollment({
		id: studentEnrollmentId,
	});

	const { enrollmentPeriod, getEnrollmentPeriod } = useEnrollmentPeriod();
	const { sede, getSede } = useSede();
	const { student, getStudent } = useStudent();

	useEffect(() => {
		if (studentEnrollment) {
			getStudent(studentEnrollment.studentId);
			getSede(studentEnrollment.sedeId);
			getEnrollmentPeriod(studentEnrollment.enrollmentPeriodId);
		}
	}, [studentEnrollment]);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles de la inscripcion",
				hrefBackButton: RouterLinks.studentEnrollment.all,
				rightButtons: (
					<IconButton href={RouterLinks.studentEnrollment.edit(id)}>
						<EditIcon />
					</IconButton>
				),
			}}
		>
			{studentEnrollment && (
				<SectionContainer>
					<div className="grid grid-cols-2 gap-2">
						{sede && <TextValue largeContent title="Sede" value={sede.name} />}

						{enrollmentPeriod && (
							<TextValue
								largeContent
								title="Periodo"
								value={`${enrollmentPeriod.year}-${enrollmentPeriod.step}`}
							/>
						)}
					</div>

					<Spacer />

					<Title titleType="h3">Catedras inscritas</Title>

					{studentEnrollment.content.map((item) => (
						<CatedraEnrollmentItem key={item.catedraId} data={item} />
					))}
				</SectionContainer>
			)}

			{student && (
				<SectionContainer>
					<Title titleType="h3">Estudiante</Title>

					<div className="grid grid-cols-2 gap-2">
						<TextValue
							largeContent
							title="Nombre"
							value={`${student.name} ${student.lastname}`}
						/>

						<TextValue
							largeContent
							title="Cédula"
							value={`${student.nationality}-${student.CI}`}
						/>

						<TextValue largeContent title="Email" value={student.email} />
						<TextValue
							largeContent
							title="Telefono"
							value={student.phone_number[0]}
						/>
					</div>

					<div className="flex justify-end">
						<Button href={RouterLinks.estudiantes.one(student._id)}>
							Detalles
						</Button>
					</div>
				</SectionContainer>
			)}
		</PageTemplate>
	);
};

export default Page;
