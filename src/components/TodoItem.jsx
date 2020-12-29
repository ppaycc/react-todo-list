import {useDispatch} from "react-redux";
import {changeChecked, deleteTodo} from "../redux/totoReducer";

const TodoItem = props => {

    const dispatch = useDispatch();

    const deleteTodoBtn = (id) =>{
        dispatch(deleteTodo(id));
    }

    const changeCheckedBtn = id => {
        dispatch(changeChecked(id));
    }

    return(
        <div className='TodoItem' key={props.data.id}>
            <label className={props.data.checked ? "done" : ""}>
                <input type="checkbox" checked={props.data.checked} onChange={()=>changeCheckedBtn(props.data.id)}/>
                {props.data.todos}
            </label>
            <button onClick={()=>deleteTodoBtn(props.data.id)}>X</button>
        </div>
    )
}

export default TodoItem;