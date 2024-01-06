import { useState } from "react";
export default function TaskForm(props) {
    const [newItem, setNewItem] = useState("");

    function handlerFunction(e) {
        
        e.preventDefault(); // prevent page refresh
        if(newItem === "") return; // if no item, do nothing
        props.onSubmit(newItem); // will call function passed on onSubmit prop
        // If we dont want to use props. notation then in args of the function just access the specified property
        setNewItem(""); // clear input field
    }

    return <form onSubmit={handlerFunction} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
    </form>
}