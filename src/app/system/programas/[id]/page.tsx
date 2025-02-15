"use client";

import React, { useEffect, useRef } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import Button from "@/app/common/components/Button";
import usePrograma from "../hook/useProgramas";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import SectionContainer from "@/app/common/components/SectionContainer";
import useSede from "../../sedes/hooks/useSede";
import useEmployee from "../../personal/hooks/useEmployee";
import TextValue from "@/app/common/components/TextValue";
import useNucleo from "../../nucleos/hooks/useNucleo";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";
import { jsPDF } from "jspdf"; // Importamos jsPDF

const Page = () => {
	const { id } = useParams();
	const programaId = getOneStringParams(id);

	const { programa } = usePrograma({ id: programaId });
	const { sede, getSede } = useSede();
	const { employee, getEmployee } = useEmployee();
	const { nucleo, getNucleo } = useNucleo();

	useEffect(() => {
		if (!programa) return;

		getEmployee(programa.directorId);
		getSede(programa.sedeId).then((item) => getNucleo(item.nucleoId));
	}, [programa]);

	// Función para generar el PDF
	const generatePDF = () => {
		const doc = new jsPDF();

		 // Título del reporte
		 doc.setFontSize(16);  // Tamaño de fuente más grande para el título
		 doc.text("Reporte del Programa", 10, 50);  // Agregar título en la parte superior
	   
		// Agregar logo al PDF
		const logoUrl = '/images/logo-1.png';  // Ruta del logo
		doc.addImage(logoUrl, 'PNG', 10, 10, 40, 40);  // (URL, formato, x, y, ancho, alto)

		// Información del programa
		if (programa) {
			doc.text(`Nombre del Programa: ${programa.name}`, 10, 60);
			doc.text(`Descripción: ${programa.description}`, 10, 70);
		}

		// Información de la sede
		if (sede) {
			doc.text(`Sede: ${sede.name}`, 10, 90);
		}

		// Información del núcleo
		if (nucleo) {
			doc.text(`Núcleo: ${nucleo.name}`, 10, 100);
		}

		// Información del director
		if (employee) {
			doc.text(`Director: ${employee.name} ${employee.lastname}`, 10, 110);
			doc.text(`Teléfono: ${employee.phone_number[0]}`, 10, 120);
		}

		// Guardar el PDF con un nombre personalizado
		doc.save(`Detalles_programa_${programaId}.pdf`);
	};

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles",
				hrefBackButton: RouterLinks.programas.all,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.programaEdit]}>
						<IconButton href={RouterLinks.programas.edit(id)}>
							<EditIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.programa]}
		>
			{/* Botón para generar el PDF */}
			<div className="flex justify-end mb-4">
				<button
					onClick={generatePDF}
					className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
				>
					Descargar PDF
				</button>
			</div>

			<SectionContainer>
				{programa && (
					<>
						<TextValue largeContent title="Nombre" value={programa.name} />
						<TextValue
							largeContent
							title="Descripción"
							value={programa.description}
						/>
					</>
				)}
			</SectionContainer>

			<SectionContainer>
				<Title titleType="h3">Sede</Title>

				{sede && <TextValue largeContent title="Nombre" value={sede.name} />}

				{nucleo && (
					<TextValue largeContent title="Núcleo" value={nucleo.name} />
				)}
			</SectionContainer>

			<SectionContainer>
				<Title titleType="h3">Director</Title>

				{employee && (
					<div className="grid grid-cols-2">
						<TextValue
							title="Nombre"
							value={`${employee.name} ${employee.lastname}`}
						/>

						<TextValue title="Teléfono" value={employee.phone_number[0]} />
					</div>
				)}
			</SectionContainer>
		</PageTemplate>
	);
};

export default Page;
