import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__auth/__auth_layout/register")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(auth)/register"!</div>;
}
