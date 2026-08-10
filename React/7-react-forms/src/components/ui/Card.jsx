const Card = ({
    title,
    revenue,
    orders,
    customers,
    growth,
    className
}) => {
    return (
        <div className={`border p-3 rounded-md ${className}`}>
            <h3 className="font-bold">{title}</h3>
            {revenue ? (
                <p>${revenue}</p>
            ) : orders ? (
                <p>{orders}</p>
            ) : customers ? (
                <p>{customers}</p>
            ) : growth ? (
                <p>+{growth}%</p>
            ): null}
        </div>
    )
}

export default Card;