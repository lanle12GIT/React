
import { useState } from "react";

const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props;
    // addNewTodo("eric")

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }

    const handleOnChane = (name) => {
        setValueInput(name)
    }

    return (
        <div className=' todo-new'>
            <input type="text"
                onChange={(event) => handleOnChane(event.target.value)}
                value={valueInput}

            />
            <button
                stype={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is =
            </div>
        </div>);
}
export default TodoNew;