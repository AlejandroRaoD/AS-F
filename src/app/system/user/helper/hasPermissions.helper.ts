import { UserPermissions } from '../interfaces/user.interface';

const hasPermissionsHelper = (	permissionsRequired: UserPermissions[],userPermision:UserPermissions[]) => {

	const founds = permissionsRequired.filter((i) => userPermision.includes(i));

	if (founds.length != permissionsRequired.length) return 

return true
}

export default hasPermissionsHelper