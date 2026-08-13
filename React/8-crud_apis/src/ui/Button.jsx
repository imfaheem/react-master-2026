const Button = ({
    children,
    className = "",
    variant = "get",
    onClick,
}) => {
    
    const variants = {
        all: "bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-700 hover:text-white",
        get: "bg-sky-100 text-sky-700 border border-sky-200 hover:bg-sky-600 hover:text-white",
        post: "bg-emerald-100 text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white",
        put: "bg-amber-100 text-amber-700 border border-amber-200 hover:bg-amber-600 hover:text-white",
        patch: "bg-purple-100 text-purple-700 border border-purple-200 hover:bg-purple-600 hover:text-white",
        delete: "bg-rose-100 text-rose-700 border border-rose-200 hover:bg-rose-600 hover:text-white",
    }

    return (
        <button
            className={`transition-all duration-300 cursor-pointer rounded-md px-2 py-1 ${className} ${variants[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
