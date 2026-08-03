import { useFetch } from "../hooks/useFetch";

export const FetchPosts = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
    
    if(loading) {
        return <p>Loading posts...</p>
    }
    
    if(error) {
        return <p>Error! During fetching users.</p>
    }

    return (
        <div>
            <h4>Fetch Posts</h4>
            {data.map((post, index) => post.id <= 10 && (
                <p key={post.id}>{index + 1}. {post.title}</p>
            ))}
        </div>
    )
}
