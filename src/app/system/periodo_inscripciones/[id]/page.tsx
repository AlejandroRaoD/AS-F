"use client";

import React, { useEffect } from "react";
import { jsPDF } from "jspdf"; // Importa jsPDF para la creación del PDF
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useEnrollmentPeriod from "../hooks/useEnrollmentPeriod";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import TextValue from "@/app/common/components/TextValue";
import useSede from "../../sedes/hooks/useSede";
import SectionContainer from "@/app/common/components/SectionContainer";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();
	const enrollmentPeriodId = getOneStringParams(id);
	const { enrollmentPeriod } = useEnrollmentPeriod({ id: enrollmentPeriodId });

	// Función para generar el PDF con los detalles del período de inscripción
	const generatePDF = () => {
		const doc = new jsPDF();

		if (enrollmentPeriod) {
			// Título del PDF
			doc.text("Detalles del Período de Inscripción", 10, 20);
			
			// Agrega los detalles del período al PDF
			doc.text(`Período: ${enrollmentPeriod.year} - ${enrollmentPeriod.step}`, 10, 30);
			// Si quieres agregar más detalles, solo agrega más doc.text(...) como líneas adicionales.

			// Guardar el PDF con un nombre personalizado
			doc.save("Detalles_Periodo_Inscripcion.pdf");
		}
	};

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles del período de inscripciones",
				hrefBackButton: RouterLinks.enrollmentPeriod.all,
				rightButtons: (
					<>
						<NeedPermissions permissions={[UserPermissions.periodosEdit]}>
							<IconButton href={RouterLinks.enrollmentPeriod.edit(id)}>
								<EditIcon />
							</IconButton>
						</NeedPermissions>
						{/* Botón para generar el PDF */}
						<IconButton onClick={generatePDF}>
							<i className="fas fa-file-pdf"></i> {/* Usando un icono PDF */}
						</IconButton>
					</>
				),
			}}
			permissionsRequired={[UserPermissions.periodos]}
		>
			{enrollmentPeriod && (
				<SectionContainer>
					<TextValue
						title="Período"
						value={`${enrollmentPeriod.year} - ${enrollmentPeriod.step}`}
					/>
				</SectionContainer>
			)}
		</PageTemplate>
	);
};

export default Page;
