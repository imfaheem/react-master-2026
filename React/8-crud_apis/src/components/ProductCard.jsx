export const ProductCard = ({
    title,
    image,
    description,
    price,
    rating,
}) => {
    return (
        <div className="border border-gray-200 rounded-md">
            <div className="bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto"
                />
            </div>
            <p className="font-bold text-center py-2">{title}</p>
            <p className="text-sm text-justify p-2">{description}</p>
            <div className="flex justify-between p-2 font-medium">
                <p>Price: <strong className="text-xl text-gray-900">${price}</strong></p>
                <p>Rating:  <strong className="text-xl text-gray-900">{rating}</strong></p>
            </div>
        </div>
    )
}
