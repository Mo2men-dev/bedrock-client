import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__auth/__auth_layout/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="h-screen">
			<h1>Sign in to Bedrock</h1>
			<form className="flex flex-col gap-4">
				<label>
					Email:
					<input type="email" name="email" />
				</label>
				<label>
					Password:
					<input type="password" name="password" />
				</label>
				<button type="submit">Login</button>
			</form>
		</main>
	)
}
