import { useSearchParams } from "react-router-dom"

export const Posts = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);

    const category = searchParams.get('category');
    const page = searchParams.get('page');
    console.log(category, page);

    const handleSearchCategory = ()=> {
        setSearchParams(prev => ({
            ...Object.fromEntries(prev),
            category: "electronics"
        }))
    }

    return (
        <div>
            <h1>Posts Page with Specific Category</h1>

            <p>Category: {category}</p>
            <br />
            <button onClick={handleSearchCategory}>Change Search Category</button>
        </div>
    )
}
