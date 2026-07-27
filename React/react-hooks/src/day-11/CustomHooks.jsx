import { CartCounter } from "./CartCounter"
import { FetchCarts } from "./FetchCarts"
import { FetchPosts } from "./FetchPosts"
import { FetchUsers } from "./FetchUsers"
import { TimeCounter } from "./TimeCounter"
import { UserCounter } from "./UserCounter"

export const CustomHooks = () => {
    return (
        <div className="custom-hooks">
            <h1>Custom Hooks</h1>
            <section>
                <UserCounter />
                <CartCounter />
                <TimeCounter />
            </section>
            <br />
            <section>
                <FetchUsers />
                <FetchPosts />
                <FetchCarts />
            </section>
            <br />
        </div>
    )
}
