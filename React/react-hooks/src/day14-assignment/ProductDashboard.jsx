import "./ProductDashboard.css";
import { useCallback, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { ProductList } from "./ProductList";
import { SearchInput } from "./SearchInput";
import { DashboardActions } from "./DashboardActions";

export const ProductDashboard = () => {
    const [refreshCount, setRefreshCount] = useState(0);
    const [ searchValue, setSearchValue ] = useState("");
    const { data, loading, error } = useFetch("https://dummyjson.com/products");
    const searchedProduct = searchValue.trim().toLowerCase();

    const products = searchedProduct ? (
        data?.products?.filter((product) => 
            product?.title.toLowerCase().includes(searchedProduct))
        ) : refreshCount > 0 ? data?.products : [];

    const handleRefresh = useCallback(() => {
        // Just Showing all the Products that are already fetched.
        setRefreshCount(prevCount => prevCount + 1);
        setSearchValue("");
    }, [])

    const handleClearSearch = useCallback(() => {
        setSearchValue("");
        setRefreshCount(0);
    }, [])

    console.log("Parent: ProductDashboard rendered.");

    return (
        <section className="productDashboard">
            <h2>Product Dashboard</h2>
            <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
            <DashboardActions
                onRefresh={handleRefresh}
                onClearSearch={handleClearSearch}
            />
            {loading ? (
                <p>Loading Products</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ProductList
                    products={products}
                    refreshCount={refreshCount}
                    searchedProduct={searchedProduct}
                />
            )}
        </section>
    )
}
