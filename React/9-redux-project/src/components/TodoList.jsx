import HeadingTitle from "./HeadingTitle"

export const TodoList = () => {
    return (
        <div className="flex-1 border-l px-4">
            <HeadingTitle className="!my-0 !text-2xl">To Do Manager</HeadingTitle>
            <div className="flex gap-2 items-center">
                <input type="text" className="border p-1 rounded-md border-gray-200" placeholder="Enter Do to Item" />
                <button className="bg-sky-200 p-2 rounded cursor-pointer">Add</button>
            </div>
        </div>
    )
}
