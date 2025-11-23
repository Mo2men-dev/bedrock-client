import { createFileRoute, Link } from "@tanstack/react-router";
import NoqtaEditor, { editor } from "noqta";
import { useState } from "react";
import InputText from "../../components/ui-components/InputText";
import Button from "../../components/ui-components/Button";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export const Route = createFileRoute("/__preview/preview")({
	component: RouteComponent,
});

function RouteComponent() {
	const [title, setTitle] = useState("Quick Note");
	return (
		<div className="relative h-screen p-4">
			<div className="flex flex-col h-full gap-4 w-4/6 mx-auto max-md:w-full max-md:text-sm">
				<div className="flex items-center justify-between gap-2">
					<Link to="/">
						<Button className="rounded-md">
							<IoArrowBack />
						</Button>
					</Link>
					<InputText
						name="title"
						value={title}
						placeholder="Enter title"
						className="rounded-none border-b-2 border-b-dark-border"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<Link to="/register">
						<Button className="rounded-md flex items-center gap-2 text-nowrap">
							Sign up <IoArrowForward />
						</Button>
					</Link>
				</div>
				<NoqtaEditor
					userAddedTools={[["Export as PDF", "Download", () => editor?.exportPDF(title)]]}
				/>
			</div>
		</div>
	);
}
