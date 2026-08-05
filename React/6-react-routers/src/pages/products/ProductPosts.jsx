import { NavLink, useParams } from "react-router-dom"

export const ProductPosts = () => {
    const { productId, postId } = useParams();
    console.log(useParams());
    
    return (
        <div>
            <h2>This is Product Posts Page with Multiple Dynamic Parameters</h2>
            <p>Dymamic URL is: <code>/products/{productId}/posts/{postId}</code></p>
            <p>Product ID: {productId} <br /> and</p>
            <p>Post ID: {postId}</p>
            <br />
            <p>Now, using search Params</p>
            <br />
            <NavLink to="/posts?category=media&page=2">Posts with Search Param</NavLink>
        </div>
    )
}
