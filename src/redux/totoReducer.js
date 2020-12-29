const ADD_TODO = 'ADD_TODO';
const CHANGE_VALUE = 'CHANGE_VALUE';
const DELETE_TODO = 'DELETE_TODO';
const CHANGE_CHECKED = 'CHANGE_CHECKED';

const initialState = {
    todo: [
        {id: 1, todos: "This todo", checked: false},
        {id: 2, todos: "I made", checked: false},
        {id: 3, todos: "with", checked: true},
        {id: 4, todos: "redux and hook", checked: false},
        {id: 5, todos: "test todo", checked: true},
        {id: 6, todos: "test too", checked: false},
        {id: 7, todos: "test", checked: true},
    ],
    value: ""
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO : {
            if (action.todo.trim().length > 0) {
                const todos = {id: Date.now(), todos: action.todo, checked: false}
                return {
                    ...state,
                    todo: [...state.todo, todos],
                    value: ''
                }
            }
            return state;
        }
        case CHANGE_VALUE : {
            return {
                ...state,
                value: action.value
            }
        }
        case DELETE_TODO : {
            return {
                ...state,
                todo: state.todo.filter(item => item.id !== action.id)
            }
        }
        case CHANGE_CHECKED : {
            const arrTodo = state.todo.map(item=>{
                if(item.id === action.id){
                    return {
                        ...item,
                        checked: !item.checked
                    }
                } else{
                    return item;
                }
            });
            return {
                ...state,
                todo: [...arrTodo]
            }
        }
        default :{
            return state;
        }
    }
}

export const addTodo = todo =>{
    return {type: ADD_TODO, todo}
}
export const changeValue = value => {
    return {type: CHANGE_VALUE, value}
}
export const deleteTodo = id => {
    return {type: DELETE_TODO, id}
}
export const changeChecked = id => {
    return {type: CHANGE_CHECKED, id}
}
export default todoReducer;