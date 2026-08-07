import { ProductCard } from "../components/ProductCard"
import { products } from "../data/products"
import { SearchBar } from "../components/SearchBar"
import { CategoryFilter } from "../components/CategoryFilter"
import { useSearchParams } from "react-router-dom"
import { useCallback, useMemo } from "react"

export const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("title") || "";
    const category = searchParams.get("category") || "";

    const filteredProducts = useMemo(()=> products.filter(product => {
        const searchedProducts = product.title.toLowerCase().includes(search.toLowerCase().trim());
        const searchedCategory = category === "" || category === "All" ? true : product.category === category;
        return searchedProducts && searchedCategory;
    }), [search, category]);

     const handleSearchChange = useCallback((newTitle) => {
        return setSearchParams(prev => ({
            ...Object.fromEntries(prev),
            title: newTitle
        }    
    ));
    }, [setSearchParams]);

    const handleCategoryChange = useCallback((newCategory)=> {
        return setSearchParams(prev => ({
            ...Object.fromEntries(prev),
            category: newCategory,
        }))
    }, [setSearchParams])
    
    return (
        <div>
            <div className="filter-panel">
                <SearchBar search={search ?? ""} handleSearchChange={handleSearchChange} />
                <CategoryFilter category={category ?? "All"} handleCategoryChange={handleCategoryChange} />
            </div>
            <div className="products-flex">
                {filteredProducts.length > 0 ?
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    )) : (
                        <h1>No Product Found.</h1>
                    )
                }
            </div>
        </div>
    )
}
