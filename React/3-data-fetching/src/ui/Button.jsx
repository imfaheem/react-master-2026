const Button = ({
    children,
    className = "",
    variant = "default",
    size="sm",
    onClick,
    disabled,
    ...props
}) => {
    const variantStyles = {
        default: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        primary: "bg-sky-300 text-white hover:bg-sky-500",
        secondary: "bg-green-200 text-green-800 hover:bg-green-400",
        ordinary: "bg-amber-200 text-abmer-800 hover:bg-amber-400",
        danger: "bg-red-300 text-red-800 hover:bg-red-500 hover:text-white"
    }

    const sizes = {
        sm: "rounded text-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`cursor-pointer p-2 ${className} ${variantStyles[variant]} ${sizes[size]}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;