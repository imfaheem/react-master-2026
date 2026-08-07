import { ProductCard } from "./ProductCard";

export const ProductList = ({
    products,
    refreshCount,
    searchedProduct
}) => {
    console.log("Child: ProductList rendered");

    return (
        <div className="flex">
            {!searchedProduct && refreshCount === 0 ? (
                <p>Searched Product List</p>
            ) : (!products.length ? (
                    <p>No product available...</p>
                ) : (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                ))
            ))}
        </div>
    )
}
