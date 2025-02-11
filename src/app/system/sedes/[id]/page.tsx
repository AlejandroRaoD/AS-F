"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import Title from "@/app/common/components/Title";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import useSede from "../hooks/useSede";
import useNucleo from "../../nucleos/hooks/useNucleo";
import SectionContainer from "@/app/common/components/SectionContainer";
import useEmployee from "../../personal/hooks/useEmployee";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import { EmployeeItem } from "../../personal/components/EmployeeItem";
import useFurniture from "../../bienes/hooks/useFurniture";
import { FurnitureItem } from "../../bienes/components/FurnitureItem";
import TextValue from "@/app/common/components/TextValue";
import usePrograma from "../../programas/hook/useProgramas";
import { ProgramaItem } from "../../programas/components/ProgramaItem";
import useCatedra from "../../catedra/hook/useCatedra";
import { CatedraItem } from "../../catedra/components/CatedraItem";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";
import { jsPDF } from "jspdf"; // Importamos jsPDF

const Page = () => {
	const { id } = useParams();
	const sedeId = getOneStringParams(id);

	const { nucleo, getNucleo } = useNucleo();
	const { sede } = useSede({ id: sedeId });
	const { employees } = useEmployee({ query: { sedeId } });
	const { furnitures } = useFurniture({ query: { sedeId } });
	const { programas } = usePrograma({ query: { sedeId } });
	const { catedras, getCatedrasOfThisPrograms } = useCatedra();

	useEffect(() => {
		if (!sede) return;

		if (!nucleo) getNucleo(sede.nucleoId);

		if (programas.length && !catedras.length)
			getCatedrasOfThisPrograms(programas.map((i) => i._id));
	}, [sede, programas.length]);

	// Función para generar el PDF
	const generatePDF = () => {
		const doc = new jsPDF();

		// Agregar el logo (si lo tienes)
		const logoUrl = '/images/logo-1.png';  // Ruta del logo
		doc.addImage(logoUrl, 'PNG', 10, 10, 40, 40);  // (URL, formato, x, y, ancho, alto)

		// Detalles de la sede
		if (sede) {
			doc.text(`Nombre de la Sede: ${sede.name}`, 10, 60);
			doc.text(`Teléfono: ${sede.phone_number}`, 10, 70);
			doc.text(`Dirección: ${sede.address}`, 10, 80);
		}

		// Detalles del Núcleo
		if (nucleo) {
			doc.text(`Núcleo: ${nucleo.name}`, 10, 90);
		}

		// Detalles de los empleados
		doc.text(`Empleados: ${employees.length}`, 10, 100);
		employees.slice(0, 5).forEach((emp, index) => {
			doc.text(`${index + 1}. ${emp.name} ${emp.lastname}`, 10, 110 + (index * 10));
		});

		// Detalles de los bienes
		doc.text(`Bienes: ${furnitures.reduce((a, b) => a + b.quantity, 0)}`, 10, 130);
		furnitures.slice(0, 5).forEach((furniture, index) => {
			doc.text(`${index + 1}. ${furniture.name} - Cantidad: ${furniture.quantity}`, 10, 140 + (index * 10));
		});

		// Detalles de los programas
		doc.text(`Programas: ${programas.length}`, 10, 160);
		programas.slice(0, 5).forEach((programa, index) => {
			doc.text(`${index + 1}. ${programa.name}`, 10, 170 + (index * 10));
		});

		// Detalles de las cátedras
		doc.text(`Cátedras: ${catedras.length}`, 10, 190);
		catedras.slice(0, 5).forEach((catedra, index) => {
			doc.text(`${index + 1}. ${catedra.name}`, 10, 200 + (index * 10));
		});

		// Guardar el PDF con un nombre personalizado
		doc.save(`Detalles_Sede_${id}.pdf`);
	};

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles de la Sede",
				hrefBackButton: RouterLinks.sedes.all,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.sedesEdit]}>
						<IconButton href={RouterLinks.sedes.edit(id)}>
							<EditIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.sedes]}
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
				{sede ? (
					<>
						<div className="grid grid-cols-2">
							<TextValue title="Nombre" value={sede.name} />
							<TextValue title="Teléfono" value={sede.phone_number} />
						</div>

						<TextValue largeContent title="Dirección" value={sede.address} />

						{nucleo && (
							<TextValue largeContent title="Núcleo" value={nucleo.name} />
						)}
					</>
				) : (
					<p className="text-center text-gray-500">
						Cargando los detalles de la sede...
					</p>
				)}
			</SectionContainer>

			<div className="grid grid-cols-2 gap-2">
				<SectionContainer>
					<Title titleType="h2">Empleados ({employees.length})</Title>

					<div className="flex flex-col">
						{employees.slice(0, 5).map((item) => (
							<EmployeeItem key={item._id} data={item} type="inList" />
						))}
					</div>
				</SectionContainer>

				<SectionContainer>
					<Title titleType="h2">
						Bienes ({furnitures.reduce((a, b) => a + b.quantity, 0)})
					</Title>

					{furnitures.slice(0, 5).map((item) => (
						<FurnitureItem key={item._id} data={item} type="inList" />
					))}
				</SectionContainer>

				<SectionContainer>
					<Title titleType="h2">Programas ({programas.length})</Title>

					{programas.slice(0, 5).map((item) => (
						<ProgramaItem key={item._id} data={item} type="inList" />
					))}
				</SectionContainer>

				<SectionContainer>
					<Title titleType="h2">Catedras ({catedras.length})</Title>

					{catedras.slice(0, 5).map((item) => (
						<CatedraItem key={item._id} data={item} type="inList" />
					))}
				</SectionContainer>
			</div>
		</PageTemplate>
	);
};

export default Page;
