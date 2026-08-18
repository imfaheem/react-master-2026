const HeadingTitle = ({ children, className }) => {
    return (
        <h1 className={`text-center uppercase !text-4xl !font-bold ${className}`}>
            {children}
        </h1>
    )
}

export default HeadingTitle