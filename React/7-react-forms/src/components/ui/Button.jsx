// Variant styles mapping
const variantStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
};

// Size styles mapping
const sizeStyles = {
  sm: "px-3 py-1.5 text-xs rounded gap-1.5",
  md: "px-4 py-2 text-sm rounded-md gap-2",
  lg: "px-5 py-2.5 text-base rounded-lg gap-2.5",
};

const Button = ({
    children,
    variant = variantStyles,
    size = sizeStyles,
    type = "button",
    disabled = false,
    className = "",
    onClick,
    ...props
}) => {

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            variant={variant}
            size={size}
            className={`inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;