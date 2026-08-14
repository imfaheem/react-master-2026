const Alert = ({
    children,
    className = "",
    variant = "default"
}) => {
    const variants = {
        default: "bg-gray-100 text-gray-800 border-gray-300",
        success: "bg-green-100 text-green-800 border-green-300",
        warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
        error: "bg-red-100 text-red-700 border-red-200",
    }
    return (
        <div className={`flex justify-center p-4 flex-col items-center rounded-md gap-2 ${className} ${variants[variant]}`}>
            {children}
        </div>
    )
}

export default Alert;
