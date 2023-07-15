import * as PropTypes from "prop-types";

function ToDo({todo}) {
    let btnClickHandler = () => {
        console.log('Btn Click ', todo);
    };
    return <div>
        <h4 className={"m-2"}>{todo.title}</h4>
        <button className={"btn btn-outline-warning"}
                onClick={btnClickHandler}
        > Click Me
        </button>
    </div>;
}

ToDo.propTypes = {todo: PropTypes.any};

export default function ListDemo() {
    let todos = [
        {
            id: 1,
            title: 'Todo 1',
        },
        {
            id: 2,
            title: 'Todo 2',
        },
    ];
    return (<div>
        <h2>To Do List</h2>
        {
            todos.map(todo =>
                <ToDo key={todo.id}
                      todo={todo}/>)
        }
    </div>)
}

export function ListDemoOwn() {
    let todos = [
        {
            id: 1,
            title: 'Todo 1',
        },
        {
            id: 2,
            title: 'Todo 2',
        },
    ];
    return (<div>
        <h2>List Demo</h2>
        {
            todos.map(todo => {
                function clickHandler(){
                    console.log(`Todo ${todo.id} is click.`);
                }
                return (<div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <button className={"btn btn-outline-danger"} onClick={clickHandler}>Click {todo.id}</button>
                </div>)

            })
        }
    </div>)
}