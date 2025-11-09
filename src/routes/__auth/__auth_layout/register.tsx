import { createFileRoute, Link } from "@tanstack/react-router";
import AuthForm from "../../../components/ui-components/AuthForm";

export const Route = createFileRoute("/__auth/__auth_layout/register")({
	component: RouteComponent,
});

function RouteComponent() {
	const handleRegister = (formValues: Record<string, string>) => {
		console.log("Register form submitted");
		console.log("Form Values:", formValues);
	};
	return (
		<>
			<AuthForm
				title="Sign up for Bedrock"
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
				onSubmit={handleRegister}
				submitLabel="Sign Up"
			/>
			<span>
				Already have an account?{" "}
				<Link className="text-dark-tertiary" to="/login">
					Sign in
				</Link>
			</span>
		</>
	);
}
