export const Navbar = ({
    ...props
}) => {

    return (
        <div className="navbar">
            <button onClick={props.easyLevel.toggle}>{props.easyLevel.state ? "Hide" : "Show"} Easy Level</button>
            <button onClick={props.mediumLevel.toggle}>{props.mediumLevel.state ? "Hide" : "Show"} Medium Level</button>
            <button onClick={props.interviewLevel.toggle}>{props.interviewLevel.state ? "Hide" : "Show"} Interview Level</button>
            <button onClick={props.todoList.toggle}>{props.todoList.state ? "Hide" : "Show"} Todo List</button>
            <button onClick={props.miniProject.toggle}>{props.miniProject.state ? "Hide" : "Show"} Mini Project</button>
        </div>
    )
}
