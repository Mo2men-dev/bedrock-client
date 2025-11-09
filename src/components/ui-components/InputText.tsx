function TextInput({
	label,
	type = "text",
	name,
	value,
	placeholder,
	onChange,
}: {
	label: string;
	name: string;
	type?: "text" | "password" | "email";
	value?: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<label className="flex flex-col gap-2">
			<span className="font-semibold">{label}</span>
			<input
				className="outline-none p-2 rounded-lg border-2 bg-dark-bg text-sm border-dark-border focus:border-dark-tertiary"
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</label>
	);
}

export default TextInput;
