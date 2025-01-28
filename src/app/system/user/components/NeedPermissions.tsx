import React, { ReactNode } from "react";
import { UserPermissions } from "../interfaces/user.interface";
import useAuth from "../hook/useAuth";
import hasPermissionsHelper from "../helper/hasPermissions.helper";

interface props {
	children: ReactNode;
	permissions: UserPermissions[];
}

const NeedPermissions = (props: props) => {
	const { permissions = [], children } = props;

	const { userProfile } = useAuth({ autoLogin: true });

	if (!userProfile) return;

	const result = hasPermissionsHelper(permissions, userProfile.permissions)

	if (!result) return;

	return <>{children}</>;
};

export default NeedPermissions;
