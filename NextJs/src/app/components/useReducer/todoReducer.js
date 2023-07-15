"use client";
import {useReducer, useState} from "react";


// unique and nextId function
function unique() {
    let id = 3;
    return function () {
        return id++;
    }
}

let nextId = unique();

// action creator
function createAction(type, payload) {
    return ({
        type,
        payload
    })
}


// todo input container
function TodoInput({dispatch, editTodo}) {

    // input text stage
    let [text, setText] = useState(editTodo ? editTodo.title : "");

    // change handler for input:text
    let onChangeHandler = (e) => {
        setText(e.target.value);
    }


    // addNew handler
    function addNewTodoHandler() {
        let newId = nextId();
        let newToDo = createAction("add_todo", {
            id: newId,
            title: text,
        });
        dispatch(newToDo);
    }

    return <div>
        <input type={"text"}
               className={"form-control m-2"}
               value={editTodo?editTodo.title+text:text}
               placeholder={"Enter to add new todo"}
               onChange={onChangeHandler}
        />

        <button className={"btn btn-outline-success m-2"}
                onClick={addNewTodoHandler}>
            Add
        </button>
    </div>;
}

// todo item component
function TodoItem({dispatch, todo}) {

    let delTodoHandler = () => {
        dispatch(createAction('del_todo', todo))
    }

    return <li>
        Title : {todo.title}

        <button className={'m-3 btn btn-outline-danger'}
                onClick={delTodoHandler}>
            Delete
        </button>

    </li>;
}

// main component
export default function TodoReducer() {

    // initial value
    let init = [
        {
            id: 1,
            title: "Todo one"
        }, {
            id: 2,
            title: "Todo Two"
        }];

    // reducer function
    function todoReducerFun(todos, action) {

        switch (action.type) {

            case "add_todo":
                return [...todos, action.payload];

            case "del_todo":
                return todos.filter(todo => todo.id !== action.payload.id)
        }
        return todos;
    }

    // create reducer
    let [todos, dispatch] = useReducer(todoReducerFun, init);


    // JSX return
    return (<div>
        {/* header */}
        <h3>Todo Reducer</h3>

        {/* input */}
        <div>
            <TodoInput dispatch={dispatch}/>
        </div>


        {/* list render  */}
        <ul className={''}>
            {todos.map((todo, index) => {
                return (
                    <TodoItem key={todo.id}
                              dispatch={dispatch}
                              todo={todo}
                    />
                )
            })}
        </ul>


    </div>)
}