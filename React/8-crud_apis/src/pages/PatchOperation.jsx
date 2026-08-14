import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { FaRegCheckCircle } from 'react-icons/fa';
import { RiLoader4Fill } from 'react-icons/ri';
import { VscErrorCompact, VscGitPullRequestError } from 'react-icons/vsc';

import Alert from '../ui/Alert';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import SelectField from '../ui/SelectField';

import { getProduct, patchProduct } from '../services/productApi';

export const PatchOperation = () => {
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();
    const id = Number(searchParams.get('id'));

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=> {
        const handleProductDetails = async () => {
            setLoading("fetching");

            try {
                const response = await getProduct(id);
                setProduct(response);
            } catch(err) {
                setError("fetching");
                console.log(err);
            } finally {
                setLoading("");
            }
        }
        handleProductDetails()
    }, [id])

        const handleProductEdit = async (e) => {
            e.preventDefault();
            setLoading("editing");
            setSuccess(false);
            setError("");

            try {
                const patchData = {
                    availabilityStatus: product.availabilityStatus,
                    rating: product.rating,
                    description: product.description,
                    stock: product.stock,
                }
                const response = await patchProduct(id, patchData);
                setProduct(response);
                setSuccess(true);
            } catch(err) {
                setError("editing");
                console.log(err);
            } finally {
                setLoading("");
            }
        }

    return (
        <div className='p-5'>
            {error === "fetching" ? (
                <Alert variant='error' className='!my-20'>
                    <VscErrorCompact className="text-3xl" />
                    <span className="font-medium">Failed to load Product details. Please Try Again!</span>
                    <Button size='lg' variant='delete' onClick={()=> navigate("/")}>Back to Products</Button>
                </Alert>
            ) : loading === "fetching" ? (
                <Alert variant="warning" className='!my-20'>
                    <RiLoader4Fill className="text-3xl animate-spin" />
                    <span className="font-medium">Loading Product Details...</span>
                </Alert>
            ) : (
                <section className="border border-gray200 rounded-lg p-4 w-[710px] mx-auto mt-8">
                    <h2 className="text-center">Product Details</h2>
                    <form onSubmit={handleProductEdit}>
                        <InputField
                            type="text"
                            label="Product Title"
                            value={product?.title}
                            onChange={(e)=> setProduct({...product, title: e.target.value})}
                            className="mb-3"
                            readOnly
                        />
                        <InputField
                            type="text"
                            label="Product Brand"
                            value={product?.brand}
                            onChange={(e)=> setProduct({...product, brand: e.target.value})}
                            className="mb-3"
                            readOnly
                        />
                        <div className="flex gap-2">
                            <SelectField
                                label="Select Category"
                                value={product?.category}
                                options={['beauty', 'fragnances', 'furniture', 'groceries', 'sports']}
                                onChange={(e)=> setProduct({...product, category: e.target.value})}
                                className="mb-3 capitalize"
                                disabled
                            />
                            <SelectField
                                label="Select Product Availability"
                                value={product?.availabilityStatus}
                                options={['In-stock', 'Out of stock']}
                                onChange={(e)=> setProduct({...product, availabilityStatus: e.target.value})}
                                className="mb-3 capitalize"
                            />
                            <SelectField
                                label="Select Rating"
                                value={product?.rating}
                                options={['1', '2', '3', '4', '5']}
                                onChange={(e)=> setProduct({...product, rating: Number(e.target.value)})}
                                className="mb-3 capitalize"
                            />
                        </div>
                        <div className="mb-3 flex flex-col">
                            <label className="text-gray-500 text-sm font-medium mb-1 block">Product Description</label>
                            <textarea
                                value={product?.description}
                                onChange={(e)=> setProduct({...product, description: e.target.value})}
                                className="border rounded-md resize-none min-h-24 p-2"
                            />
                        </div>
                        <div className="flex gap-3">
                            <InputField
                                type="number"
                                label="Product In Stock (Only in numbers)"
                                value={product?.stock}
                                onChange={(e)=> setProduct({...product, stock: Number(e.target.value)})}
                                className="mb-3"
                            />
                            <InputField
                                type="number"
                                label="Product Price"
                                value={product?.price}
                                onChange={(e)=> setProduct({...product, price: Number(e.target.value)})}
                                className="mb-3"
                                readOnly
                            />
                        </div>
                        <div className="flex justify-between">
                            <Button variant="all" type="button" onClick={()=> navigate("/")}>Cancel</Button>
                            <Button variant="patch" type="submit">
                                {loading === "editing"
                                    ? "Editing Product..."
                                    : "Edit Product"
                                }
                            </Button>
                        </div>
                        {error === "editing" && (
                            <Alert
                                variant="error"
                                className="!my-4 flex-row justify-start"
                            >
                                <VscGitPullRequestError className="text-3xl" />
                                <span>Failed to edit product. Please try again.</span>
                            </Alert>
                        )}
                        {success && (
                            <Alert variant="success" className="!mt-4">
                                <FaRegCheckCircle className="text-3xl" />
                                <span>Product Successfully Edited.</span>
                            </Alert>
                        )}
                    </form>
                </section>
            )}
        </div>
    )
}
