import { useState } from "react";

import { RiLoader4Fill } from "react-icons/ri";
import { VscErrorCompact } from "react-icons/vsc";
import { FcDatabase, FcDeleteDatabase } from "react-icons/fc";

import Alert from "../ui/Alert";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import { ProductCard } from "../components/ProductCard";

import { getProduct, getProducts } from "../services/productApi";

export const GetOperation = () => {
    const [product, setProduct] = useState(null);
    const [productId, setProductId] = useState("");
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const handleProductSearch = async (productId) => {
        if(productId === "") return setProduct(null);
        setError(null);
        setIsLoading("product");
        
        try {
            const data = await getProduct(productId);
            setProduct(data);
        } catch(err) {
            setError("product");
            console.log(err);
        } finally {
            setIsLoading(null);
        }
    }

    const handleAllProducts = async () => {
        setError(null);
        setIsLoading("products");
        
        try {
            const data = await getProducts();
            setProducts(data);
        } catch(err) {
            setError("products");
            console.log(err);
        } finally {
            setIsLoading(null);
        }
    }

    return (
        <>
            <h1 className="text-center uppercase !text-4xl !font-bold m-0">Get Operations</h1>
            <div className="flex px-4">
                <div className="border-r px-2 w-96">
                    <h2 className="text-center">Search Product(s)</h2>
                    <InputField
                        type="number"
                        value={productId}
                        label="Search Product ID:"
                        className="w-40"
                        onChange={(e) => setProductId(e.target.value)}
                    />
                    <div className="my-4">
                        <Button variant="get" className="mr-2" onClick={()=> handleProductSearch(productId)}>
                            Enter Product ID
                        </Button>
                        <Button variant="all" className="ml-2" onClick={handleAllProducts}>Search All Products</Button>
                    </div>
                </div>
                <div className="flex-1 px-2">
                    <h2 className="text-center">View Product(s)</h2>
                    <div className="flex gap-2">
                        <section className="flex-1 h-[calc(100dvh-230px)]">
                            {error === "product" ? (
                                <div className="flex justify-center items-center h-full">
                                    <Alert variant="error" className="h-fit w-full">
                                        <VscErrorCompact className="text-3xl" />
                                        <span className="font-medium">Failed to load Product details. Please Try Again!</span>
                                    </Alert>
                                </div>
                            ) : isLoading === "product" ? (
                                <div className="flex justify-center items-center h-full">
                                    <Alert variant="warning" className="h-fit w-full">
                                        <RiLoader4Fill className="text-3xl animate-spin" />
                                        <span className="font-medium">Loading Product details...</span>
                                    </Alert>
                                </div>
                            ) : product ? (
                                <ProductCard
                                    title={product.title}
                                    image={product.thumbnail}
                                    description={product.description}
                                    price={product.price}
                                    rating={product.rating}
                                />
                            ) : (
                                <div className="flex justify-center items-center h-full">
                                    <Alert className="h-fit w-full">
                                        <FcDeleteDatabase className="text-3xl" />
                                        <span className="font-medium">No Product selected yet.</span>
                                    </Alert>
                                </div>
                            )}
                        </section>
                        <section className="border-l flex-1 px-2 overflow-y-auto h-[calc(100dvh-230px)]">
                            {error === "products" ? (
                                <div className="flex justify-center items-center h-full">
                                    <Alert variant="error" className="h-fit w-full">
                                        <VscErrorCompact className="text-3xl" />
                                        <span className="font-medium">Failed to load all Products. Please Try Again!</span>
                                    </Alert>
                                </div>
                            ) : isLoading === "products" ? (
                                <div className="flex justify-center items-center h-full">
                                    <Alert variant="warning" className="h-fit w-full">
                                        <RiLoader4Fill className="text-3xl animate-spin" />
                                        <span className="font-medium">Loading All Products...</span>
                                    </Alert>
                                </div>
                            ) : products.length ? (
                                products.map(product => (
                                    <div key={product.id}>
                                        <p>{product.id}. {product.title}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="flex justify-center items-center h-full">
                                    <Alert className="h-fit w-full">
                                        <FcDatabase className="text-3xl" />
                                        <span className="font-medium">No Product List Available.</span>
                                    </Alert>
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
