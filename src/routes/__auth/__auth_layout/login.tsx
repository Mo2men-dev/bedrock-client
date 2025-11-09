import { Link, createFileRoute } from "@tanstack/react-router";
import AuthForm from "../../../components/ui-components/AuthForm";

export const Route = createFileRoute("/__auth/__auth_layout/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const handleLogin = (formValues: Record<string, string>) => {
		console.log("Login form submitted");
		console.log("Form Values:", formValues);
	};

	return (
		<>
			<AuthForm
				title="Sign in to Bedrock"
				fields={[
					{
						label: "Email",
						name: "email",
						type: "email",
						placeholder: "Enter your email",
					},
					{
						label: "Password",
						name: "password",
						type: "password",
						placeholder: "Enter your password",
					},
				]}
				onSubmit={handleLogin}
				submitLabel="Login"
			/>
			<span>
				New here?{" "}
				<Link className="text-dark-tertiary" to="/register">
					Create an account
				</Link>
			</span>
		</>
	);
}
