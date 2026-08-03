import { useFetch } from "../hooks/useFetch"

export const FetchCarts = () => {
    const {data, loading, error } = useFetch("https://dummyjson.com/carts");
    const carts = data.carts;
    console.log(carts);

    return (
        <div>
            <h4>Fetch Carts</h4>
            {loading && <p>Loading carts...</p>}
            {error && <p>Error! Failed to fetch carts.</p>}

            {!loading && !error && carts?.map(cart => (
                <p key={cart.id}>{cart.id}. {cart.products[0].title}</p>
            ))}
        </div>
    )
}
