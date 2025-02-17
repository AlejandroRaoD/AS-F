"use client";
import React, { useEffect, useRef } from "react";
import ReactDOMServer from 'react-dom/server';

import useSystemLog from "./hooks/useSystemLog";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import { UserPermissions } from "../user/interfaces/user.interface";
import { SystemLogItem } from "./components/systemLogItem";

const Page = () => {
	const { systemLogs, getSystemLogs } = useSystemLog();
	const logRef = useRef(null); // Referencia al contenido del log

	useEffect(() => {
		getSystemLogs();
	}, []);

	// Función para generar el PDF
	const generatePDF = async () => {
		const html2pdf = (await import("html2pdf.js/dist/html2pdf.min.js")).default
		const element = ReactDOMServer.renderToString(logRef.current); 
		if (!element) return;

		const options = {
			margin: 10,
			filename: "Historial_de_Registros.pdf",
			image: { type: "jpeg", quality: 0.98 },
			html2canvas: { scale: 2 },
			jsPDF: {
				unit: "mm",
				format: "a4",
				orientation: "portrait",
			},
		};

		html2pdf().set(options).from(element).save();
	};

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Historial de Registros del Sistema",
				hrefBackButton: RouterLinks.dashboard,
			}}
			permissionsRequired={[UserPermissions.logs]}
		>
			{/* Botón para generar PDF */}
			<div className="flex justify-end mb-4">
				<button
					onClick={generatePDF}
					className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
				>
					Descargar PDF
				</button>
			</div>

			{/* Contenedor del log para imprimir */}
			<div ref={logRef} className="flex flex-col border p-4 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
				{/* Aquí puedes agregar más estilo si es necesario, por ejemplo, márgenes y fuentes */}
				{systemLogs.map((n) => (
					<SystemLogItem data={n} key={n._id} />
				))}
			</div>
		</PageTemplate>
	);
};

export default Page;
