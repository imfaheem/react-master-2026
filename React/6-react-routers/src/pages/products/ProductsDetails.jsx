import { NavLink, useParams } from "react-router-dom"

export const ProductsDetails = () => {

    const params = useParams();
    console.log(params);

    return (
        <div>
            <h2>This is Products Details Page</h2>
            <p>Product Id is: {params.productId}</p>

            <NavLink to={`posts/${params.productId}`}>Product Posts</NavLink>
        </div>
    )
}
