import { useNavigate, useParams } from "react-router-dom"
import { products } from "../data/products";
import { NotFound } from "./NotFound";
import { CATEGORY_TYPES } from "../utils/utils";
import "./styles.scss";

export const ProductDetails = () => {
    const navigate = useNavigate();
    const { productId } = useParams();

    const productDetails = products.find(product => {
        return product.id === Number(productId);
    })

    if(!productDetails) {
        return <NotFound />
    }

    const categoryColor = CATEGORY_TYPES[productDetails.category] ?? 'transparent';

    return (
        <>
            <div className="product-details">
                <div className="img-div">
                    <img src={productDetails.image} />
                </div>
                <div className="details">
                    <h2>{productDetails.title}</h2>
                    <p>{productDetails.description}</p>
                    <br />
                    <p className="flex">
                        <code>Rs. {productDetails.price} /-</code>
                        <small className="category" style={{ backgroundColor: categoryColor }}>{productDetails.category}</small>
                    </p>
                </div>
            </div>
            <br />
            <button className="centered" onClick={()=> navigate(-1)}>
                Back to Products Page
            </button>
        </>
    )
}
