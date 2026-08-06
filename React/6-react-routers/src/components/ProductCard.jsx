import { Link } from "react-router-dom"
import { CATEGORY_TYPES } from "../utils/utils"

export const ProductCard = ({ product }) => {
    const categoryColor = CATEGORY_TYPES[product.category] ?? "transparent";

    return (
        <section className="product-card">
            <div className="img-div">
                <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <div className="flex">
                <p>${product.price}</p>
                <p>
                    <small className="category" style={{backgroundColor: categoryColor }}>{product.category}</small>
                </p>
            </div>
            <Link to={`/products/${product.id}?`}>View Details</Link>
        </section>
    )
}
