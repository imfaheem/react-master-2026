import { useFetch } from "../../../hooks/useFetch";

const Posts = ({ searchItem, filteredList }) => {
	const {data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
	
	return (
		<div>
			<h4>Posts</h4>
            {loading && <p>Loading Posts...</p>}
            {error && <p>{error}</p>}
            {!data.length && !error ? (
                <p>No posts available.</p>
            ) : (!loading && !error && (
					searchItem !== "" ? filteredList.map(list => (
							<p key={list.id}>{list.title}</p>
					)) : 
						data.slice(0, 5).map((posts, index) => (
						<p key={posts.id}>{index+1}. {posts.title}</p>
					))
				)
            )}
		</div>
	)
}

export default Posts;