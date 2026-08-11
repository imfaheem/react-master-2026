import Alert from "../ui/Alert";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { api } from "../api";
import { getProducts } from "../functions/productApi";

export const AxiosComp = () => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // POST request states
    const [isPosting, setIsPosting] = useState(false);
    const [postError, setPostError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(()=> {
        const fetchProducts = async () => {
            const data = await getProducts()
            setProducts(data);
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    useEffect(()=> {
        const getProducts = async () => {
            try {
                const response = await api.get("/");
                const data = response.data;
                setUsers(data);
            } catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, [])

    if(isLoading) {
        return <p>Loading Users</p>
    }
    if(error) {
        return <p>{error}</p>
    }

    const handlePostData = async ()=> {
        setIsPosting(true);
        setPostError(null);
        setSuccess(false);

        try {
            const response = await api.post('/', {
                name: "Awais Ahmed",
                department: "Backend",
                salary: 95000,
                experience: 2,
                status: "Inactive"
            });
            if (response.status === 201 || response.status === 200) {
                setSuccess(true);
                setTimeout(()=> {
                    setSuccess(false);
                }, 3000)
            }
        } catch(err) {
            setPostError(`Failed to create user. ${err.message}`);
        } finally {
            setIsPosting(false);
        }
    }

    const handlePutData = async ()=> {  
        setSuccess(false);
        try {
            const response = await api.put('/2', {
                name: "M. Faheem Sikandar",
                department: "Backend Engineering",
                salary: 130000,
                experience: 4,
                status: "Active"
            });
            
            if(response.status === 201 || response.status === 200) {
                setSuccess(true);
                 setTimeout(()=> {
                    setSuccess(false);
                }, 3000)
            }
        }
        catch(err) {
            console.log(err.message);
        }
    }

    const handlePatchData = async ()=> {
        setSuccess(false);
        try {
            const response = await api.patch("/3", {
                name: "Awais Ahmed",
                experience: 1,
                salary: 100
            });
            
            if(response.status === 201 || response.status === 200) {
                setSuccess(true);
                 setTimeout(()=> {
                    setSuccess(false);
                }, 3000)
            }
        }
        catch(err) {
            console.log(err.message);
        }
    }

    const handleDeleteData = async ()=> {
        setSuccess(false);
        const targetId = "BD4lzbY9zpg";

        try {
            const response = await api.delete(`/${targetId}`);
            
            if(response.status === 201 || response.status === 200) {
                setSuccess(true);
                 setTimeout(()=> {
                    setSuccess(false);
                }, 3000)
            }
        }
        catch(err) {
            console.log(err.message);
        }
    }

    return (
        <div className='flex-1'>
            <h2 className="text-center">Data Fetching By Axious</h2>
            <div className="max-h-96 overflow-x-auto rounded-lg border mb-2 border-gray-200 shadow-sm">
                <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-100 text-xs font-semibold uppercase sticky top-0 text-gray-700">
                        <tr>
                            <th className="px-6 py-3">S.no.</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Experience</th>
                            <th className="px-6 py-3">Salary</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {users.map(({id, name, experience, salary})=> (
                            <tr key={id}>
                                <td className="px-6 py-4">{id}.</td>
                                <td className="px-6 py-4">{name}</td>
                                <td className="px-6 py-4">{experience} years</td>
                                <td className="px-6 py-4">${salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <Button
                    disabled={isPosting}
                    onClick={handlePostData}
                    variant="primary"
                    className=""
                >
                    {isPosting ? 'Adding User...' : 'POST Data'}
                </Button>
                {postError && (
                    <Alert variant="danger" className="!flex gap-2 items-center my-2">
                        <MdErrorOutline /> {postError}
                    </Alert>
                )}
                {success && (
                    <Alert variant="success" className="!flex gap-2 items-center my-2">
                        <FaCheck /> <span>Data Successfully Posted in Users.</span>
                    </Alert>
                )}
            </div>
            <div className="mt-2">
                <Button
                    onClick={handlePutData}
                    variant="secondary"
                    className=""
                >
                    PUT Data
                </Button>
                {success && (
                    <Alert variant="success" className="!flex gap-2 items-center my-2">
                        <FaCheck /> <span>Data Successfully Updated in Users.</span>
                    </Alert>
                )}
            </div>
            <div className="mt-2">
                <Button
                    onClick={handlePatchData}
                    variant="ordinary"
                    className=""
                >
                    PATCH Data
                </Button>
                {success && (
                    <Alert variant="success" className="!flex gap-2 items-center my-2">
                        <FaCheck /> <span>Data Successfully Updated in Users.</span>
                    </Alert>
                )}
            </div>
            <div className="mt-2">
                <Button
                    onClick={handleDeleteData}
                    variant="danger"
                    className=""
                >
                    DELETE Data
                </Button>
                {success && (
                    <Alert variant="warning" className="!flex gap-2 items-center my-2">
                        <FaRegTrashAlt /> <span>Data Successfully Deleted from Users.</span>
                    </Alert>
                )}
            </div>
        </div>
    )
}
