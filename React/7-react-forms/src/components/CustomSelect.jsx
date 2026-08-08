export const CustomSelect = ({
    name,
    value,
    onChange,
    options,
}) => {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
        >
            <option value="">- Select Country -</option>
            {options.map(option=> (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}
