const Alert = ({
    children,
    className,
    variant = "warning",
}) => {
    
    const variants = {
        warning: "text-amber-900 bg-amber-200",
        success: "text-green-900 bg-green-200",
        danger: "text-red-900 bg-red-200",
    }

    return (
        <div
            className={`p-2 rounded-md ${variants[variant]} ${className}`}
        >
            {children}
        </div>
    )
}

export default Alert;