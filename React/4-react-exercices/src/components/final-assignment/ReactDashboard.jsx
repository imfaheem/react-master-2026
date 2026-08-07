import { useDebounce } from "../../hooks/useDebounce"
import { useFetch } from "../../hooks/useFetch"
import Posts from "./components/Posts"
import SearchBar from "./components/SearchBar"
import Todos from "./components/Todos"
import Users from "./components/Users"

export const ReactDashboard = () => {
    const {data: users } = useFetch("https://jsonplaceholder.typicode.com/users");
    const {data: posts } = useFetch("https://jsonplaceholder.typicode.com/posts");
    const {data: todos } = useFetch("https://jsonplaceholder.typicode.com/todos");

    const searchUsers = useDebounce(users);
    const searchPosts = useDebounce(posts);
    const searchTodos = useDebounce(todos);

    const totalUsers = users?.length ?? 'No user available';
    const totalPosts = posts?.length ?? 'No post available';
    const totalTodos = todos?.length ?? 'No todo available';
    const completedTodos = (todos.filter(completedTodod => completedTodod.completed === true)).length;
    const pendingTodos = (todos.filter(completedTodod => completedTodod.completed === false)).length;;

    return (
        <div className="react-dashboard">
            <h1 className="text-center">React Dashboard</h1>
            <div className="dashboard">
                <h3>Statistics</h3>
                <div className="flex">
                    <p className="flex-1">Total Users: {totalUsers}</p>
                    <p className="flex-1">Total Posts: {totalPosts}</p>
                    <p className="flex-1">Completed Todos: {!totalTodos ? totalTodos : completedTodos}</p>
                    <p className="flex-1">Pending Todos:  {!totalTodos ? totalTodos : pendingTodos}</p>
                </div>
            </div>
            <div className="flex">
                <section className="flex-1">
                    <SearchBar
                        data={users}
                        searchItem={searchUsers.searchItem}
                        handleSearchItem={searchUsers.handleSearchItem}
                        title="User First Name or Last Name"
                    />
                    <Users
                        searchItem={searchUsers.searchItem}
                        filteredList={searchUsers.filteredList}
                    />
                </section>
                <section className="flex-1">
                    <SearchBar
                        data={posts}
                        title="Any Post"
                        searchItem={searchPosts.searchItem}
                        handleSearchItem={searchPosts.handleSearchItem}
                    />
                    <Posts 
                        searchItem={searchPosts.searchItem} 
                        filteredList={searchPosts.filteredList}
                    />
                </section>
                <section className="flex-1">
                    <SearchBar
                        data={todos}
                        title="the Todo List"
                        searchItem={searchTodos.searchItem}
                        handleSearchItem={searchTodos.handleSearchItem}
                    />
                    <Todos 
                        searchItem={searchTodos.searchItem} 
                        filteredList={searchTodos.filteredList} 
                    />
                </section>
            </div>
        </div>
    )
}

