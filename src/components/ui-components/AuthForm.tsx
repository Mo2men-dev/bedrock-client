import { useState } from "react";
import TextInput from "./InputText";
import { Link } from "@tanstack/react-router";

function AuthForm({
	title,
	onSubmit,
	fields,
	submitLabel,
}: {
	title: string;
	onSubmit: (values: Record<string, string>) => void;
	fields: {
		label: string;
		name: string;
		type: "text" | "password" | "email";
		placeholder?: string;
		value?: string;
	}[];
	submitLabel: string;
}) {
	const [formValues, setFormValues] = useState(
		Object.fromEntries(fields.map((field) => [field.name, field.value || ""]))
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(formValues);
	};

	return (
		<div className="w-1/3 max-md:w-1/2">
			<Link to="/">
				<img src="/logo.png" alt="Bedrock Logo" className="w-1/8 m-auto" />
			</Link>
			<h1 className="text-xl text-center font-(family-name:--hero-font) my-4 font-bold text-dark-tertiary">
				{title}
			</h1>
			<form className="flex flex-col gap-4 p-5 rounded-xl" onSubmit={handleSubmit}>
				{fields.map((field) => (
					<TextInput
						key={field.name}
						label={field.label}
						type={field.type}
						name={field.name}
						placeholder={field.placeholder ?? ""}
						value={formValues[field.name]}
						onChange={handleChange}
					/>
				))}
				<button className="bg-dark-tertiary w-fit m-auto p-2 text-black" type="submit">
					{submitLabel}
				</button>
			</form>
		</div>
	);
}

export default AuthForm;
