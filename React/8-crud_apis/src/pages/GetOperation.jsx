import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RiLoader4Fill } from "react-icons/ri";
import { VscErrorCompact } from "react-icons/vsc";
import { FcDatabase, FcDeleteDatabase } from "react-icons/fc";

import Alert from "../ui/Alert";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import { ProductCard } from "../components/ProductCard";
import { ProductList } from "../components/ProductList";

import { getProduct, getProducts } from "../services/productApi";

export const GetOperation = () => {
    const navigate = useNavigate();

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

    const handleProductDelete = useCallback((id) => {
        navigate(`delete?id=${id}`);
    }, [navigate])

    return (
        <>
            <h1 className="text-center uppercase !text-4xl !font-bold m-0">Get Operations</h1>
            <div className="flex px-4">
                <div className="border-r px-2 w-60">
                    <h2 className="text-center">Search Product(s)</h2>
                    <InputField
                        type="number"
                        value={productId}
                        label="Search Product ID:"
                        className="w-full"
                        onChange={(e) => setProductId(e.target.value)}
                    />
                    <div className="my-4 flex flex-col">
                        <Button variant="get" className="mt-2" onClick={()=> handleProductSearch(productId)}>
                            Enter Product ID
                        </Button>
                        <Button variant="all" className="mt-2" onClick={handleAllProducts}>Search All Products</Button>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="text-center">View Product(s)</h2>
                    <div className="flex">
                        <section className="flex-1 overflow-y-auto h-[calc(100dvh-230px)]">
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
                                    brand={product.brand}
                                    stock={product.stock}
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
                        <section className="border-l flex-1 overflow-y-auto h-[calc(100dvh-230px)]">
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
                                    <ProductList
                                        key={product.id}
                                        product={product}
                                        handleProductDelete={handleProductDelete}
                                    />
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
