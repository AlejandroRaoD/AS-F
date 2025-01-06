const getOneStringParams = (str: string | string[]): string =>
	str instanceof Array ? str[0] : str;

export default getOneStringParams;
