import { useState } from "react"

export const TodoList = () => {
    const [showButton, setShowButton] = useState(false);
    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editIndex, setEditIndex] = useState();

    const handleAddList = ()=> {
        if(!inputText.trim()) return;
        setTodoList(prev => [...prev, inputText]);
        setInputText("");
        setShowButton(false);
    }

    const handleEditList = (indexValue) => {
        if(!inputText.trim()) return;
        setTodoList(prev => prev.map((item, index)=> index === indexValue ? inputText : item))
        setInputText("");
        setShowButton(false);
    }

    const handleEditEntry = (indexValue)=> {
        const editValue = todoList.filter((list, index) => index === indexValue);
        setInputText(editValue);
        setShowButton(true);
        setEditIndex(indexValue);
    }

    const handleDeleteEntry =(indexValue) => {
        setTodoList(prev => prev.filter((list, index) => index !== indexValue))
    }

    return (
        <div className="flex-1">
            <h2>Hand-on Practice</h2>
            <div className="input-field">
                Add List: <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Enter To do list here..." />
                {!showButton ? 
                    <button onClick={handleAddList}>Add Text to List</button> :    
                    <button onClick={()=> handleEditList(editIndex)}>Edit Text to List</button>
                }
            </div>
            <hr />
            <h3>To-Do List</h3>
            <table>
                <thead>
                    <tr>
                        <th>S.no.</th>
                        <th>List Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((list, index)=> (
                        <tr key={index}>
                            <td>{index+1}.</td>
                            <td>{list}</td>
                            <td>
                                <div className="action-buttons">
                                    <button className="edit" onClick={()=> handleEditEntry(index)}>Edit</button>
                                    <hr />
                                    <button className="delete" onClick={()=> handleDeleteEntry(index)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
