import React from "react";
import { PRODUCT_CATEGORY } from "./ProductCategory";

export const ProductCard = React.memo(({ product }) => {
    console.log("Sub-child: ProductCard rendered", product?.title);

    const rating = product?.rating <= 1 ? "⭐" : 
        product?.rating <=2 ? "⭐⭐" : 
            product?.rating <=3 ? "⭐⭐⭐" : 
                product?.rating <=4 ? "⭐⭐⭐⭐" : "⭐⭐⭐⭐⭐";

    const categoryColor = PRODUCT_CATEGORY[product?.category] ?? "transparent";

    return (
        <section className="productCard">
            <img src={product?.thumbnail} alt={product?.title ?? "Product"} loading="lazy" />
            <div className="details">
                <h4>{product?.title ?? ""}</h4>
                <p className="category" style={{backgroundColor: categoryColor}}>{product.category}</p>
                <div className="flex">
                    <strong>{rating}</strong>
                    <span>{product?.brand ?? "N/A"}</span>
                </div>
                <p>{product?.description ?? ""}</p>
                <p className="price">${product?.price ?? ""}</p>
            </div>
        </section>
    )
})
