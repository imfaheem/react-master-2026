const InputField = ({
    label,
    type,
    onChange,
    className,
}) => {
    return (
        <div className="flex flex-col">
            <label className="text-gray-500 text-sm font-medium mb-1 block">{label}</label>
            <input
                type={type}
                onChange={onChange}
                className={`block border border-gray-300 rounded p-1 appearance-none indent-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                ${className}`}
            />
        </div>
    )
}

export default InputField;
