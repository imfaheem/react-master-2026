import { useSearchParams } from "react-router-dom";
import { products } from "../../data/products";

export const NewProduct = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "All";
    const page = searchParams.get("page") || "1";

    const searchedProducts = products.filter(product => {
        return product.name.toLowerCase().includes(search.toLowerCase());
    })

    const filteredProducts = products.filter(product => {
        if (category === "All") {
            return true;
        }
        return product.category === category
    })

    return (
        <div>
            <h1>This is New Products Page</h1>
            <p>Search: {search}</p>
            <p>Category: {category}</p>
            <p>Page: {page}</p>
            
            <br />
            <div>
                <input
                    value={search}
                    placeholder="Search Product"
                    onChange={(event) => setSearchParams({
                        ...Object.fromEntries(searchParams),
                        search: event.target.value,
                    })}
                />
                <select
                    onChange={(e) => setSearchParams({
                        ...Object.fromEntries(searchParams),
                        category: e.target.value,
                    })}
                >
                    <option value="">All Categories</option>
                    {[...new Set(products.map(prod => prod.category))].map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

            </div>
            
            <div className="flex">
                <div className="flex-1">
                    <h3>Search Products</h3>
                    {searchedProducts.map(product => (
                        <div key={product.id}>
                            <p>
                                Product: {product.name}
                                <small className="category">{product.category}</small>
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex-1">
                    <h3>Search Products</h3>
                    {filteredProducts.map(product => (
                        <div key={product.id}>
                            <p>
                                Product: {product.name}
                                <small className="category">{product.category}</small>
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex-1"></div>
            </div>
            
            
        </div>
    )
}
