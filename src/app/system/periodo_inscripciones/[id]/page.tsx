"use client";

import React, { useEffect } from "react";
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

	return (
		<PageTemplate
			navBarProps={{
				navTitle: "Detalles del período de inscripciones",
				hrefBackButton: RouterLinks.enrollmentPeriod.all,
				rightButtons: (
					<NeedPermissions permissions={[UserPermissions.periodosEdit]}>
						<IconButton href={RouterLinks.enrollmentPeriod.edit(id)}>
							<EditIcon />
						</IconButton>
					</NeedPermissions>
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
