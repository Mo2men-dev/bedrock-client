import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Login <Link to="/register">here</Link>.
		</div>
	)
}
