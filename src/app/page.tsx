import RouterLinks from "@/config/RouterLinks";
import Button from "./common/components/Button";

export default function Page() {
	return (
		<>
			<Button href={RouterLinks.login}> login</Button>
			<Button href={RouterLinks.register}> register</Button>
		</>
	);
}
