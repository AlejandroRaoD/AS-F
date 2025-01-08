"use client";

import React from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import Button from "@/app/common/components/Button";
import useEmployee from "../hooks/useEmployee";

const Page = () => {
	const { id } = useParams();
	const employeeId = getOneStringParams(id);
	const { employee } = useEmployee({ id: employeeId });

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles de personal",
				hrefBackButton: RouterLinks.employee.all,
				// rightButtons: (
				// 	<>
				// 		<IconButton href={RouterLinks.estudiantes.edit(id)}>
				// 			<EditIcon />
				// 		</IconButton>
				// 	</>
				// ),
			}}
		>
			<Button href={RouterLinks.employee.edit(id)}>Editar datos</Button>

			<div>
				{employee && (
					<>
						<p>{employee.name}</p>
						<p>{employee.lastname}</p>
						<p>{new Date(employee.birthday).toDateString()}</p>
						<p>{employee.nationality}</p>
						<p>{employee.CI}</p>
						<p>{employee.email}</p>
						<p>{employee.gender}</p>
						<p>{employee.address}</p>
						<p>{employee.phone_number}</p>
						<p>{employee.businessPosition}</p>

						<p>{employee.sedeId}</p>
					</>
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
