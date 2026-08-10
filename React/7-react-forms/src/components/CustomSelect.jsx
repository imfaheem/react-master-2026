export const CustomSelect = ({
    name,
    value,
    onChange,
    options,
    className,
}) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className={className}
        >
            <option value="">- Select Country -</option>
            {options.map(option=> (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}
