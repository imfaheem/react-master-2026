import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


import { FaRegCheckCircle } from 'react-icons/fa';
import { FcDeleteDatabase } from "react-icons/fc";
import { RiLoader4Fill, RiDeleteBinLine } from "react-icons/ri";
import { VscErrorCompact } from "react-icons/vsc";

import Alert from "../ui/Alert";
import Button from "../ui/Button";
import { ProductCard } from "../components/ProductCard";

import { deleteProduct, getProduct } from "../services/productApi";

export const DeleteOperation = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const productId = Number(searchParams.get("id"));

    const [deletedProduct, setDeletedProduct] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");

    useEffect(()=> {
        const tobeDeletedProduct = async () => {
            setError("");
            setLoading("loading");

            try {
                const response = await getProduct(productId);
                setDeletedProduct(response);
            } catch(err) {
                console.log(err);
                setError("fetch");
            } finally {
                setLoading("")
            }
        }
        tobeDeletedProduct();
    }, [productId])

    const handleProductDelete = async ()=> {
        setError("");
        setSuccess(false);
        setLoading("deleting");

        try {
            const response = await deleteProduct(productId);
            setDeletedProduct(response);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        } catch(err) {
            console.log(err);
            setError("delete");
        } finally {
            setLoading("")
        }
    }
    
    return (
        <>
            <h1 className="text-center uppercase !text-4xl !font-bold m-0">Delete Operations</h1>
            <div className="px-4">
                {loading === "loading" ? (
                    <Alert variant="warning" className='!my-20 py-8'>
                        <RiLoader4Fill className="text-3xl animate-spin" />
                        <span className="font-medium">Loading Product to be Deleted...</span>
                    </Alert>
                ) : (error === "fetch" ? (
                        <Alert variant='error' className='!my-20 py-10'>
                            <VscErrorCompact className="text-3xl" />
                            <span className="font-medium mb-4">Failed to load Product to be deleted. Please Try Again!</span>
                            <Button size='lg' variant='delete' onClick={()=> navigate("/")}>Back to Products</Button>
                        </Alert>
                ) : !productId || !deletedProduct ? (
                    <Alert className="h-96 w-full">
                        <FcDeleteDatabase className="text-3xl" />
                        <span className="font-medium">No Product with the selected ID exist.</span>
                    </Alert>
                ) : <div className="flex">
                        <section className="flex-1 border-r h-[calc(100dvh-200px)] overflow-y-auto">
                            {deletedProduct && (
                                <ProductCard
                                    title={deletedProduct.title}
                                    image={deletedProduct.thumbnail}
                                    description={deletedProduct.description}
                                    brand={deletedProduct.brand}
                                    stock={deletedProduct.stock}
                                    price={deletedProduct.price}
                                    rating={deletedProduct.rating}
                                />
                            )}
                        </section>
                        <section className="flex-1 px-4">
                            <Alert className='py-10'>
                                <RiDeleteBinLine className="text-4xl" />
                                <h1 >Are you sure!</h1>
                                <h2>You want to delete this Product?</h2>
                                <div className="flex gap-5 my-10">
                                    <Button size="lg" variant="all" onClick={()=> navigate("/")}>Cancel</Button>
                                    <Button size="lg" variant="delete" onClick={handleProductDelete}>
                                        {loading === "deleting" ? "Deleting Product..." : "Delete Product"}
                                    </Button>
                                </div>
                            </Alert>
                            {error === "delete" && (
                                <Alert variant='error' className='py-10 my-4'>
                                    <VscErrorCompact className="text-3xl" />
                                    <span className="font-medium mb-4">Failed to Delete Product. Please Try Again!</span>
                                </Alert>
                            )}
                            {success && (
                                <Alert variant="success" className="!mt-4">
                                    <FaRegCheckCircle className="text-3xl" />
                                    <span>Product Successfully Deleted.</span>
                                </Alert>
                            )}
                        </section>
                    </div>
                )}
            </div>
        </>
    )
}
