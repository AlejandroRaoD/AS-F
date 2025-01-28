"use client";

import React, { useEffect } from "react";
import PageTemplate from "@/app/common/components/PageTemplate";
import { useParams } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import getOneStringParams from "@/app/common/helpers/getOneStringParams";
import IconButton from "@/app/common/components/IconButton";
import EditIcon from "@/app/common/components/icons/EditIcon";
import TextValue from "@/app/common/components/TextValue";
import useSede from "../../sedes/hooks/useSede";
import SectionContainer from "@/app/common/components/SectionContainer";
import useComodato from "../hooks/useComodato";
import useInstrument from "../../instrumentos/hooks/useInstrument";
import useStudent from "../../estudiantes/hooks/useStudent";
import Title from "@/app/common/components/Title";
import Button from "@/app/common/components/Button";
import { UserPermissions } from "../../user/interfaces/user.interface";
import NeedPermissions from "../../user/components/NeedPermissions";

const Page = () => {
	const { id } = useParams();
	const comodatoId = getOneStringParams(id);

	const { comodato } = useComodato({ id: comodatoId });
	const { sede, getSede } = useSede();
	const { instrument, getInstrument } = useInstrument();
	const { student, getStudent } = useStudent();

	useEffect(() => {
		if (comodato) {
			getInstrument(comodato.instrumentId).then(async (d) => {
				await getSede(d.sedeId);
			});
			getStudent(comodato.studentId);
		}
	}, [comodato]);

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles del comodato",
				hrefBackButton: RouterLinks.comodato.all,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.comodatosEdit]}>
						<IconButton href={RouterLinks.comodato.edit(id)}>
							<EditIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.comodatos]}
		>
			{/* <Button href={RouterLinks.comodato.edit(id)}>Editar datos</Button> */}

			{comodato && (
				<>
					<SectionContainer className="grid grid-cols-2">
						<TextValue
							title="Fecha inicio"
							value={new Date(comodato.initDate).toLocaleDateString()}
						/>

						<TextValue
							title="Fecha final"
							value={new Date(comodato.endDate).toLocaleDateString()}
						/>

						<TextValue title="N° contrato" value={comodato.contractNumber} />
						{/* <TextValue title="Estado" value={comodato.status} /> */}
					</SectionContainer>
				</>
			)}

			<div className="grid grid-cols-2 gap-2">
				{instrument && (
					<SectionContainer>
						<Title>Instrumento</Title>

						<TextValue title="Nombre" value={instrument.name} />

						<TextValue title="Modelo" value={instrument.model} />
						<TextValue title="Marca" value={instrument.brand} />

						{sede && <TextValue title="Sede" value={sede.name} />}
						<div className="flex justify-end">
							<Button href={RouterLinks.instrument.one(instrument._id)}>
								Detalles
							</Button>
						</div>
					</SectionContainer>
				)}

				{student && (
					<SectionContainer>
						<Title>Estudiante</Title>
						<TextValue
							title="Nombre"
							value={`${student.name} ${student.lastname}`}
						/>

						<TextValue
							title="Cédula"
							value={`${student.nationality}-${student.CI}`}
						/>

						<TextValue title="Email" value={student.email} />
						<TextValue title="Telefono" value={student.phone_number[0]} />
						<div className="flex justify-end">
							<Button href={RouterLinks.estudiantes.one(student._id)}>
								Detalles
							</Button>
						</div>
					</SectionContainer>
				)}
			</div>
		</PageTemplate>
	);
};

export default Page;
