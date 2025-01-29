"use client";
import { useEffect } from "react";
import PageTemplate from "../../common/components/PageTemplate";
import RouterLinks from "@/config/RouterLinks";
import useEnrollmentPeriod from "./hooks/useEnrollmentPeriod";
import { EnrollmentPeriodItem } from "./components/EnrollmentPeriodItem";
import SimpleSearch from "@/app/common/components/SimpleSearch";
import IconButton from "@/app/common/components/IconButton";
import PlusIcon from "@/app/common/components/icons/PlusIcon";
import { UserPermissions } from "../user/interfaces/user.interface";
import NeedPermissions from "../user/components/NeedPermissions";

export default function BienesPage() {
	const { enrollmentPeriods, getEnrollmentPeriods } = useEnrollmentPeriod();

	// Obtener bienes con filtros
	useEffect(() => {
		getEnrollmentPeriods();
	}, []);

	// const onSubmitQuery = async (year: number) => getEnrollmentPeriods({ year });
	// const onClearQuery = async () => getEnrollmentPeriods();

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "PERÍODOS DE INSCRIPCIONES",
				hrefBackButton: RouterLinks.dashboard,

				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.periodosEdit]}>
						<IconButton href={RouterLinks.enrollmentPeriod.create}>
							<PlusIcon />
						</IconButton>
					</NeedPermissions>
				),
			}}
			permissionsRequired={[UserPermissions.periodos]}
		>
			{/* Título y botón con filtros */}

			{/* <SimpleSearch onSubmit={onSubmitQuery} onClear={onClearQuery} /> */}
			{/* Lista de bienes */}

			<div className="flex flex-col">
				<div className="mb-2 px-4 text-gray-700">
					<div>Período</div>
				</div>

				{enrollmentPeriods.length ? (
					enrollmentPeriods.map((bien) => (
						<EnrollmentPeriodItem key={bien._id} data={bien} />
					))
				) : (
					<p className="text-center text-gray-500 mt-10">
						No se encontraron bienes con los filtros aplicados. Intenta
						nuevamente.
					</p>
				)}
			</div>
		</PageTemplate>
	);
}
