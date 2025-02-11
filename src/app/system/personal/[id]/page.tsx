"use client";

import React, { useEffect, useRef } from "react";
import { jsPDF } from "jspdf"; // Importa jsPDF para la generación del PDF
import useEmployee from "../hooks/useEmployee";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useSede from "../../sedes/hooks/useSede";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import SectionContainer from "@/app/common/components/SectionContainer";
import TextValue from "@/app/common/components/TextValue";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();
	const employeeId = getOneStringParams(id);
	const { employee } = useEmployee({ id: employeeId });
	const { sede, getSede } = useSede();

	const pageRef = useRef(null); // Ref para el contenedor de la página

	useEffect(() => {
		if (employee) getSede(employee.sedeId);
	}, [employee]);

	// Función para generar el PDF con los detalles del empleado
	const generatePDF = () => {
		const doc = new jsPDF();

		// Agregar logo al PDF
		const logoUrl = '/images/logo-1.png';  // Ruta del logo
		doc.addImage(logoUrl, 'PNG', 10, 10, 40, 40);  // (URL, formato, x, y, ancho, alto)

		if (employee) {
			// Detalles del empleado
			doc.text(`Nombre: ${employee.name} ${employee.lastname}`, 10, 60);
			doc.text(`Nacimiento: ${new Date(employee.birthday).toDateString()}`, 10, 70);
			doc.text(`C.I.: ${employee.nationality}-${employee.CI}`, 10, 80);
			doc.text(`Dirección: ${employee.address}`, 10, 90);
			doc.text(`Género: ${employee.gender}`, 10, 100);
			doc.text(`Cargo: ${employee.businessPosition}`, 10, 110);

			if (sede) {
				doc.text(`Sede: ${sede.name}`, 10, 120);
			}

			doc.text(`Teléfono: ${employee.phone_number}`, 10, 130);
			doc.text(`Email: ${employee.email}`, 10, 140);
		}

		// Guardar el PDF con un nombre personalizado
		doc.save(`Detalles_Empleado_${employeeId}.pdf`);
	};

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles de personal",
				hrefBackButton: RouterLinks.employee.all,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.personalEdit]}>
						<IconButton href={RouterLinks.employee.edit(id)}>
							<EditIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.personal]}
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

			{/* Detalles del empleado */}
			<SectionContainer>
				{employee ? (
					<div className="grid grid-cols-2">
						<TextValue title="Nombre" value={employee.name} />
						<TextValue title="Apellido" value={employee.lastname} />
						<TextValue title="Nacimiento" value={new Date(employee.birthday).toDateString()} />
						<TextValue title="C.I." value={`${employee.nationality}-${employee.CI}`} />
						<TextValue title="Dirección" value={employee.address} />
						<TextValue title="Género" value={employee.gender} />
						<TextValue title="Cargo" value={employee.businessPosition} />
						{sede && <TextValue title="Sede" value={sede.name} />}
					</div>
				) : (
					<p className="text-center text-gray-500">
						Cargando los detalles del empleado...
					</p>
				)}
			</SectionContainer>

			{/* Información adicional si es necesario */}
			<SectionContainer>
				<div className="grid grid-cols-2">
					<TextValue title="Teléfono" value={employee?.phone_number} />
					<TextValue title="Email" value={employee?.email} />
				</div>
			</SectionContainer>
		</PageTemplate>
	);
};

export default Page;
