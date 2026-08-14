import { memo } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

export const ProductList = memo(({
    product,
    handleProductDelete
}) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between mx-3 mb-2">
            <p>{product.id}. {product.title}</p>
            <div className="flex gap-2">
                <Button size="sm" variant="put" onClick={() => navigate(`/put/${product.id}`)}>Update</Button>
                <Button size="sm" variant="patch" onClick={() => navigate(`/patch?id=${product.id}`)}>Edit</Button>
                <Button size="sm" variant="delete" onClick={() => handleProductDelete(product.id)}>Delete</Button>
            </div>
        </div>
    )
})
