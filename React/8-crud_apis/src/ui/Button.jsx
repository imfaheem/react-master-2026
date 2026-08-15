const Button = ({
    children,
    className = "",
    variant = "get",
    size = "",
    onClick,
    ...props
}) => {
    const variants = {
        all: "bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-700 hover:text-white",
        get: "bg-sky-100 text-sky-700 border border-sky-200 hover:bg-sky-600 hover:text-white",
        post: "bg-emerald-100 text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white",
        put: "bg-amber-100 text-amber-700 border border-amber-200 hover:bg-amber-600 hover:text-white",
        patch: "bg-green-100 text-green-700 border border-green-200 hover:bg-green-600 hover:text-white",
        delete: "bg-red-100 text-red-700 border border-red-200 hover:bg-red-500 hover:text-white",
    }

    const sizes = {
        sm: "text-sm !py-0.5",
        md: "text-lg",
        lg: "text-xl"
    }
    return (
        <button
            className={`transition-all duration-300 cursor-pointer rounded-md px-2 py-1 ${className} ${variants[variant]} ${sizes[size]}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;
