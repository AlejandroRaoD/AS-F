import React, { ReactNode } from "react";
import { UserPermissions } from "../interfaces/user.interface";
import useAuth from "../hook/useAuth";

interface props {
	children: ReactNode;
	permissions: UserPermissions[];
}

const NeedPermissions = (props: props) => {
	const { permissions = [], children } = props;

	const { userProfile } = useAuth({ autoLogin: true });

	if (!userProfile) return;

	const founds = permissions.filter((i) => userProfile.permissions.includes(i));

	if (founds.length != permissions.length) return;

	return <>{children}</>;
};

export default NeedPermissions;
