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
import useNucleo from "../../nucleos/hooks/useNucleo";

const Page = () => {
	const { id } = useParams();
	const studentEnrollmentId = getOneStringParams(id);

	const { studentEnrollment } = useStudentEnrollment({
		id: studentEnrollmentId,
	});
	const { enrollmentPeriod, getEnrollmentPeriod } = useEnrollmentPeriod();
	const { sede, getSede } = useSede();
	const { nucleo, getNucleo } = useNucleo();
	const { student, getStudent } = useStudent();
	const [pdfData, setPdfData] = useState(null);

	useEffect(() => {
		if (studentEnrollment) {
			getStudent(studentEnrollment.studentId);
			getSede(studentEnrollment.sedeId).then((s) => getNucleo(s.nucleoId));
			getEnrollmentPeriod(studentEnrollment.enrollmentPeriodId);
		}
	}, [studentEnrollment]);

	useEffect(() => {
		if (student && sede && enrollmentPeriod && nucleo) {
			setPdfData({
				studentName: `${student.name} ${student.lastname}`,
				studentCI: `${student.nationality}-${student.CI}`,
				studentEmail: student.email,
				studentPhone: student.phone_number[0],
				sedeName: sede.name,
				enrollmentPeriod: `${enrollmentPeriod.year}-${enrollmentPeriod.step}`,
				date: new Date(),
				nucleo: nucleo.name,
			});
		}
	}, [student, sede, enrollmentPeriod, nucleo]);

	const handleGeneratePDF = () => {
		if (pdfData) generatePDF("pagePDF", "Constancia_Estudio.pdf");
		// 	{
		// 	const pdfElement = document.getElementById("pagePDF");
		// 	if (pdfElement) {
		// 	} else {
		// 		console.error("No se encontró el elemento para generar el PDF.");
		// 	}
		// }
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
						{sede && <TextValue title="Sede" value={sede.name} />}
						{enrollmentPeriod && (
							<TextValue title="Periodo" value={pdfData?.enrollmentPeriod} />
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
						<TextValue title="Nombre" value={pdfData?.studentName} />
						<TextValue title="Cédula" value={pdfData?.studentCI} />
						<TextValue title="Email" value={pdfData?.studentEmail} />
						<TextValue title="Teléfono" value={pdfData?.studentPhone} />
					</div>
					<div className="flex justify-end">
						<Button href={RouterLinks.estudiantes.one(student._id)}>
							Detalles
						</Button>
					</div>
				</SectionContainer>
			)}

			{student && sede && enrollmentPeriod && nucleo && (
				<SectionContainer>
					<div className="flex justify-center mt-4">
						<Button onClick={handleGeneratePDF}>
							Generar Constancia de Estudio
						</Button>
					</div>
				</SectionContainer>
			)}

			{student && sede && enrollmentPeriod && nucleo && pdfData && (
				<div className="hidden">
					<div id="pagePDF" className="relative">
						{/* Logos superiores */}
						<div className="absolute top-0 left-0 right-0 flex justify-between">
							<img
								src="/images/logo-1.png"
								alt="Logo Izquierdo"
								className="w-48"
							/>
							<img
								src="/images/logo-2.png"
								alt="Logo Derecho"
								className="w-48"
							/>
						</div>

						<div className="text-center mb-6" style={{ paddingTop: "1cm" }}>
							<h2 className="text-2xl font-semibold underline-bold">
								Constancia de Inscripción
							</h2>
						</div>

						<p style={{ marginTop: "2cm" }}>
							El Comité del Núcleo{" "}
							<span className="underline-bold">
								{pdfData.nucleo || "_____________"}
							</span>
							, sede{" "}
							<span className="underline-bold">
								{pdfData.sedeName || "_____________"}
							</span>
							, hace constar por medio de la presente que el/la estudiante{" "}
							<span className="underline-bold">
								{pdfData.studentName || "_____________"}
							</span>
							, portador de la cédula de identidad Nº{" "}
							<span className="underline-bold">
								{pdfData.studentCI || "_____________"}
							</span>
							, ha sido formalmente inscrito/a en la cátedra correspondiente
							durante el periodo de inscripción{" "}
							<span className="underline-bold">
								{pdfData.enrollmentPeriod || "_____________"}
							</span>
							.
						</p>

						<p style={{ marginTop: "1.5cm" }}>
							La presente constancia se expide a petición de la parte interesada
							en San Juan de los Morros, a los {pdfData.date.getDay()} días del
							mes de {pdfData.date.getMonth()} del año{" "}
							{pdfData.date.getFullYear()}.
						</p>

						<div className="text-center" style={{ marginTop: "3cm" }}>
							<p className="text-xl font-semibold">Atentamente,</p>
							<div className="flex justify-center space-x-12 my-10">
								<div className="w-1/2">
									<p>____________________</p>
								</div>
								<div className="w-1/2">
									<p>____________________</p>
								</div>
							</div>

							<div className="w-1/3 mx-auto my-2">
							<p className="font-semibold">Comité Núcleo.</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</PageTemplate>
	);
};

export default Page;
