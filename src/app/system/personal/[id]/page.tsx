"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import useEmployee from "../hooks/useEmployee";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import TextValue from "@/app/common/components/TextValue";
import useSede from "../../sedes/hooks/useSede";
import SectionContainer from "@/app/common/components/SectionContainer";
import NeedPermissions from "../../user/components/NeedPermissions";
import { UserPermissions } from "../../user/interfaces/user.interface";

const Page = () => {
	const { id } = useParams();
	const employeeId = getOneStringParams(id);
	const { employee } = useEmployee({ id: employeeId });
	const { sede, getSede } = useSede();

	useEffect(() => {
		if (employee) getSede(employee.sedeId);
	}, [employee]);

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
			{/* <Button href={RouterLinks.employee.edit(id)}>Editar datos</Button> */}

			{employee && (
				<SectionContainer>
					<div className="grid grid-cols-2">
						<TextValue title="Nombre" value={employee.name} />

						<TextValue title="Apellido" value={employee.lastname} />

						<TextValue
							title="Nacimiento"
							value={new Date(employee.birthday).toDateString()}
						/>

						<TextValue
							title="C.I."
							value={`${employee.nationality}-${employee.CI}`}
						/>

						<TextValue title="Direccion" value={employee.address} />
						<TextValue title="Genero" value={employee.gender} />
						<TextValue title="Cargo" value={employee.businessPosition} />

						{sede && <TextValue title="Sede" value={sede.name} />}
					</div>

					<div className="grid grid-cols-2">
						<TextValue title="Telefono" value={employee.phone_number} />
						<TextValue title="Email" value={employee.email} />
					</div>
				</SectionContainer>
			)}
		</PageTemplate>
	);
};

export default Page;
