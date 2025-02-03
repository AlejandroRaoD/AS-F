"use client";

import React, { useEffect, useState } from "react";
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
import useStudent from "../../estudiantes/hooks/useStudent";
import Title from "@/app/common/components/Title";
import Button from "@/app/common/components/Button";
import useEnrollmentPeriod from "../../periodo_inscripciones/hooks/useEnrollmentPeriod";
import CatedraEnrollmentItem from "../components/CatedraEnrollmentItem";
import Spacer from "@/app/common/components/Spacer";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";
import generatePDF from "@/app/common/utils/generatePDF";

const Page = () => {
	const { id } = useParams();
	const studentEnrollmentId = getOneStringParams(id);

	const { studentEnrollment } = useStudentEnrollment({ id: studentEnrollmentId });
	const { enrollmentPeriod, getEnrollmentPeriod } = useEnrollmentPeriod();
	const { sede, getSede } = useSede();
	const { student, getStudent } = useStudent();
	const [pdfData, setPdfData] = useState(null);

	useEffect(() => {
		if (studentEnrollment) {
			getStudent(studentEnrollment.studentId);
			getSede(studentEnrollment.sedeId);
			getEnrollmentPeriod(studentEnrollment.enrollmentPeriodId);
		}
	}, [studentEnrollment]);

	useEffect(() => {
		if (student && sede && enrollmentPeriod) {
			setPdfData({
				studentName: `${student.name} ${student.lastname}`,
				studentCI: `${student.nationality}-${student.CI}`,
				studentEmail: student.email,
				studentPhone: student.phone_number[0],
				sedeName: sede.name,
				enrollmentPeriod: `${enrollmentPeriod.year}-${enrollmentPeriod.step}`,
				date: new Date().toLocaleDateString(),
			});
		}
	}, [student, sede, enrollmentPeriod]);

	const handleGeneratePDF = () => {
		if (pdfData) {
			const pdfElement = document.getElementById("pagePDF");
			if (pdfElement) {
				generatePDF("pagePDF", "Constancia_Estudio.pdf");
			} else {
				console.error("No se encontró el elemento para generar el PDF.");
			}
		}
	};

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles de la inscripción",
				hrefBackButton: RouterLinks.studentEnrollment.all,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.inscripcionesEdit]}>
						<IconButton href={RouterLinks.studentEnrollment.edit(id)}>
							<EditIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.inscripciones]}
		>
			{studentEnrollment && (
				<SectionContainer>
					<div className="grid grid-cols-2 gap-2">
						{sede && <TextValue largeContent title="Sede" value={sede.name} />}
						{enrollmentPeriod && (
							<TextValue largeContent title="Periodo" value={pdfData?.enrollmentPeriod} />
						)}
					</div>
					<Spacer />
					<Title titleType="h3">Cátedras inscritas</Title>
					{studentEnrollment.content.map((item) => (
						<CatedraEnrollmentItem key={item.catedraId} data={item} />
					))}
				</SectionContainer>
			)}
			{student && (
				<SectionContainer>
					<Title titleType="h3">Estudiante</Title>
					<div className="grid grid-cols-2 gap-2">
						<TextValue largeContent title="Nombre" value={pdfData?.studentName} />
						<TextValue largeContent title="Cédula" value={pdfData?.studentCI} />
						<TextValue largeContent title="Email" value={pdfData?.studentEmail} />
						<TextValue largeContent title="Teléfono" value={pdfData?.studentPhone} />
					</div>
					<div className="flex justify-end">
						<Button href={RouterLinks.estudiantes.one(student._id)}>Detalles</Button>
					</div>
				</SectionContainer>
			)}
			<SectionContainer>
				<div className="flex justify-center mt-4">
					<Button onClick={handleGeneratePDF}>Generar Constancia de Estudio</Button>
				</div>
			</SectionContainer>
		</PageTemplate>
	);
};

export default Page;
