"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useRepresentative from "../hooks/useRepresentative";
import TextValue from "@/app/common/components/TextValue";
import SectionContainer from "@/app/common/components/SectionContainer";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";
import { jsPDF } from "jspdf"; // Importamos jsPDF

const Page = () => {
	const { id } = useParams();
	const { representative } = useRepresentative({ id });

	// Función para generar el PDF
	const generatePDF = () => {
		const doc = new jsPDF();

		 // Título del reporte
		 doc.setFontSize(16);  // Tamaño de fuente más grande para el título
		 doc.text("Reporte del Representante", 10, 50);  // Agregar título en la parte superior
	   
		// Agregar logo al PDF
		const logoUrl = '/images/logo-1.png';  // Ruta del logo
		doc.addImage(logoUrl, 'PNG', 10, 10, 40, 40);  // (URL, formato, x, y, ancho, alto)

		// Información del representante
		if (representative) {
			doc.text(`Nombre: ${representative.name} ${representative.lastname}`, 10, 60);
			doc.text(`Nacimiento: ${new Date(representative.birthday).toLocaleDateString()}`, 10, 70);
			doc.text(`C.I.: ${representative.nationality}-${representative.CI}`, 10, 80);
			doc.text(`Género: ${representative.gender}`, 10, 90);
			doc.text(`Trabajo: ${representative.job}`, 10, 100);
			doc.text(`Dirección: ${representative.address}`, 10, 110);
			doc.text(`Teléfono: ${representative.phone_number}`, 10, 120);
			doc.text(`Email: ${representative.email}`, 10, 130);
		}

		// Guardar el PDF con un nombre personalizado
		doc.save(`Detalles_representante_${id}.pdf`);
	};

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles del Representante",
				hrefBackButton: RouterLinks.representante.all,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.representantesEdit]}>
						<IconButton href={RouterLinks.representante.edit(id)}>
							<EditIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.representantes]}
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

			{representative && (
				<SectionContainer>
					<div className="grid grid-cols-2">
						<TextValue title="Nombre" value={representative.name} />
						<TextValue title="Apellido" value={representative.lastname} />
						<TextValue
							title="Nacimiento"
							value={new Date(representative.birthday).toLocaleDateString()}
						/>
						<TextValue
							title="C.I."
							value={`${representative.nationality}-${representative.CI}`}
						/>
						<TextValue title="Genero" value={representative.gender} />
						<TextValue title="Trabajo" value={representative.job} />
					</div>

					<TextValue
						largeContent
						title="Dirección"
						value={representative.address}
					/>

					<div className="grid grid-cols-2">
						<TextValue title="Telefono" value={representative.phone_number} />
						<TextValue title="Email" value={representative.email} />
					</div>
				</SectionContainer>
			)}
		</PageTemplate>
	);
};

export default Page;
