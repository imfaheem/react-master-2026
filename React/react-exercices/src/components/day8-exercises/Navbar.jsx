export const Navbar = ({
    setEasyLevel,
    setMediumLevel,
    setInterviewLevel,
    setTodoList,
    setMiniProject,
    ...props
}) => {

    return (
        <div className="navbar">
            <button onClick={()=> setEasyLevel(!props.easyLevel)}>{props.easyLevel ? "Hide" : "Show"} Easy Level</button>
            <button onClick={()=> setMediumLevel(!props.mediumLevel)}>{props.mediumLevel ? "Hide" : "Show"} Medium Level</button>
            <button onClick={()=> setInterviewLevel(!props.interviewLevel)}>{props.interviewLevel ? "Hide" : "Show"} Interview Level</button>
            <button onClick={()=> setTodoList(!props.todoList)}>{props.todoList ? "Hide" : "Show"} Todo List</button>
            <button onClick={()=> setMiniProject(!props.isMiniProject)}>{props.isMiniProject ? "Hide" : "Show"} Mini Project</button>
        </div>
    )
}
