// use state import
import {useState} from "react";

// input component
function InputComponent({addNew}) {
    return (<div>
        <button className={"btn btn-outline-danger m-2"}
                onClick={addNew}
                type={"button"}>
            Add
        </button>

    </div>)
}

// todo item / to do list // main component
function TodoItem({item}) {
    return (
        <div className={"col-2 p-1"}>
            <h5 className={"bg-warning"}>{item.title}</h5>
        </div>
    )
}

function TodoList({list, deleteItem, updateItem}) {
    return (<div className={"row"}>
        {list.map(item => (<TodoItem key={item.id}
                                     item={item}/>))}
    </div>);
}

export default function AddNewListItem() {
    // list
    let initialTodo = [

    ];

    // use stage
    const [items, setItem] = useState(initialTodo);

    // add new item
    function addNew() {
        let count = items.length + 1;
        let newItem = {
            id: count,
            title: "title - " + count,
        }
        // console.log("This is add new item.");
        // add item
        setItem([...items, newItem]);
    }


    return (<div>
        <InputComponent addNew={addNew}/>
        <TodoList list={items}/>
    </div>)
}