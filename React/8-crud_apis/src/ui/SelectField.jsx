const SelectField = ({
    label,
    value,
    options = [],
    onChange,
    className,
    ...props
}) => {
    return (
        <div className="flex flex-col">
            <label className="text-gray-500 text-sm font-medium mb-1 block">{label}</label>
            <select
                value={value}
                onChange={onChange}
                className={`block border border-gray-300 rounded p-1 cursor-pointer
                ${className}`}
                {...props}
            >
            <option value="" disabled>-- {label} --</option>
            {options.map((option, index)=> (
                <option key={index} value={option} className="capitalize">{option}</option>
            ))}
            </select>
        </div>
    )
}

export default SelectField;
