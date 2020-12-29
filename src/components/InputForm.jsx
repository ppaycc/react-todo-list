import {useDispatch, useSelector} from "react-redux";
import {addTodo, changeValue} from "../redux/totoReducer";

const InputForm = props => {

    const value = useSelector(state => state.todo.value);
    const dispatch = useDispatch();

    const changeInputValue = e => {
        console.log(e.currentTarget.value);
        dispatch(changeValue(e.currentTarget.value));
    }
    const keyDown = (e) =>{
        if (e.keyCode === 13){
            dispatch(addTodo(value))
        }
    }
    const addTodoBtn = () => {
        dispatch(addTodo(value))
    }
    return (
        <div className='InputForm'>
            <textarea rows="5" value={value} onChange={changeInputValue} onKeyDown={keyDown} placeholder='Type here...'/>
            <button onClick={addTodoBtn}>Add todo</button>
        </div>
    )
}

export default InputForm;