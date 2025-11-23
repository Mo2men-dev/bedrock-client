function TextInput({
	label,
	type = "text",
	name,
	value,
	placeholder,
	className,
	min = 1,
	max = 25,
	onChange,
}: {
	label?: string;
	name: string;
	type?: "text" | "password" | "email";
	value?: string;
	placeholder: string;
	className?: string;
	min?: number;
	max?: number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<label className="flex flex-col gap-2">
			{label && <span className="font-semibold">{label}</span>}
			<input
				className={`outline-none p-2 ${className ? className : "rounded-lg border-2 text-sm"} bg-dark-bg border-dark-border focus:border-dark-tertiary`}
				type={type}
				name={name}
				value={value}
				min={min}
				max={max}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</label>
	);
}

export default TextInput;
