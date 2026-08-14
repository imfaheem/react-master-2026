import { useState } from "react";

import { FaRegCheckCircle } from "react-icons/fa";
import { FcDataBackup } from "react-icons/fc";
import { VscGitPullRequestError } from "react-icons/vsc";

import Alert from "../ui/Alert";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";

import { postProduct } from "../services/productApi";
import { ProductCard } from "../components/ProductCard";

export const PostOperation = () => {
    const initialState = {
        title: "",
        brand: "",
        category: "",
        description: "",
        availabilityStatus: "",
        rating: "",
        price: 0,
        stock: 0,
    }

    const [product, setProduct] = useState(initialState);
    const [addedProduct, setAddedProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setLoading(true);
        setError(null);

        try {
            const response = await postProduct(product);
            setAddedProduct(prev => [...prev, response]);
            setProduct(initialState);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        } catch(err) {
            console.log("ERROR:", err);
            console.log("MESSAGE:", err.message);
            console.log("RESPONSE:", err.response);
            console.log("STATUS:", err.response?.status);
            console.log("DATA:", err.response?.data);
            const errorMessage = err.message || "Failed to Add new Product";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <h1 className="text-center uppercase !text-4xl !font-bold m-0">Post Operations</h1>
            <div className="flex px-4 gap-4">
                <section className="flex-1">
                     <h2 className="text-center">Add New Product</h2>
                    <form onSubmit={handleFormSubmit}>
                        <InputField
                            type="text"
                            label="Product Title"
                            value={product.title}
                            onChange={(e)=> setProduct({...product, title: e.target.value})}
                            className="mb-3"
                        />
                        <InputField
                            type="text"
                            label="Product Brand"
                            value={product.brand}
                            onChange={(e)=> setProduct({...product, brand: e.target.value})}
                            className="mb-3"
                        />
                        <div className="flex gap-2">
                            <SelectField
                                label="Select Category"
                                value={product.category}
                                options={['beauty', 'fragnances', 'furniture', 'groceries', 'sports']}
                                onChange={(e)=> setProduct({...product, category: e.target.value})}
                                className="mb-3 capitalize"
                            />
                            <SelectField
                                label="Select Product Availability"
                                value={product.availabilityStatus}
                                options={['In-stock', 'Out of stock']}
                                onChange={(e)=> setProduct({...product, availabilityStatus: e.target.value})}
                                className="mb-3 capitalize"
                            />
                            <SelectField
                                label="Select Rating"
                                value={product.rating}
                                options={['1', '2', '3', '4', '5']}
                                onChange={(e)=> setProduct({...product, rating: Number(e.target.value)})}
                                className="mb-3 capitalize"
                            />
                        </div>
                        <div className="mb-3 flex flex-col">
                            <label className="text-gray-500 text-sm font-medium mb-1 block">Product Description</label>
                            <textarea
                                value={product.description}
                                onChange={(e)=> setProduct({...product, description: e.target.value})}
                                className="border rounded-md resize-none h-20 p-2"
                            />
                        </div>
                        <div className="flex gap-3">
                            <InputField
                                type="number"
                                label="Product In Stock (Only in numbers)"
                                value={product.stock}
                                onChange={(e)=> setProduct({...product, stock: Number(e.target.value)})}
                                className="mb-3"
                            />
                            <InputField
                                type="number"
                                label="Product Price"
                                value={product.price}
                                onChange={(e)=> setProduct({...product, price: Number(e.target.value)})}
                                className="mb-3"
                            />
                        </div>
                        <div className="flex gap-4">
                            <Button variant="all" type="reset">Reset Product</Button>
                            <Button variant="post" type="submit">{loading ? "Adding New Product..." : "Add New Product"}</Button>
                        </div>
                        {error && (
                            <Alert
                                variant="error"
                                className="!my-4 flex-row justify-start"
                            >
                                <VscGitPullRequestError className="text-3xl" />
                                <span>{error}</span>
                            </Alert>
                        )}
                        {success && (
                            <Alert variant="success" className="!mt-4">
                                <FaRegCheckCircle className="text-3xl" />
                                <span>Product Successfully Added.</span>
                            </Alert>
                        )}
                    </form>
                </section>
                <section className="flex-1 border-l pl-4 h-[calc(100dvh-200px)] -mr-3 overflow-y-auto">
                     <h2 className="text-center">View Added Product</h2>
                     <div className="pr-3">
                        {addedProduct.length ? (
                            <div className="flex flex-col gap-4">
                                {addedProduct.map(({title, description, brand, stock, price, rating}, index) => (
                                    <ProductCard
                                        key={index}
                                        title={title}
                                        description={description}
                                        brand={brand}
                                        stock={stock}
                                        price={price}
                                        rating={rating}
                                    />
                                ))}
                            </div>
                        ) : (
                            <Alert className="h-full !mt-4">
                                <FcDataBackup className="text-3xl" />
                                <span>No Product Added yet!</span>
                            </Alert>
                        )}
                     </div>
                </section>
            </div>
        </>
    )
}
