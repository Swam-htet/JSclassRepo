// use state import
import {useState} from "react";

// input component
function InputComponent({addNew}) {
    let [title, setTitle] = useState('');

    function onClickHandler() {
        addNew(title);
    }

    return (<div className={"bg-light p-2"}>
        <input type={"text"}
               value={title}
               onChange={(e) => setTitle(e.target.value)}/>

        <button className={"btn btn-outline-warning ms-2"}
                onClick={onClickHandler}
                type={"button"}>
            Add
        </button>

    </div>)
}

// todo item / to do list // main component
function TodoItem({item, deleteItem, updateItem}) {

    function onDeleteHandler(eventItem) {
        console.log("Delete Item > ", eventItem);
        deleteItem(eventItem);
    }

    function onUpdateHandler(eventItem) {
        console.log("Update Item > ", eventItem);
        updateItem(eventItem);
    }

    return (
        <div className={'col-2 p-3'}>
            <h5>{item.title}</h5>
            <button className={"btn btn-success me-1"}
                    onClick={(e) => onUpdateHandler(item)}>
                Update
            </button>

            <button className={"btn btn-outline-danger"}
                    onClick={(e) => onDeleteHandler(item)}>
                Delete
            </button>
        </div>
    )
}

function TodoList({list, deleteItem, updateItem}) {
    return (<div className={"row"}>
        {list.map(item => (<TodoItem key={item.id}
                                     item={item}
                                     deleteItem={deleteItem}
                                     updateItem={updateItem}/>))}
    </div>);
}

export default function TodoListEventDemo() {
    // list
    let initialTodo = [
        {
            id: 1,
            title: "Title 1",
        },
        {
            id: 2,
            title: "Title 2",
        },
        {
            id: 3,
            title: "Title 3",
        }
    ];

    // use stage
    const [items, setItem] = useState(initialTodo);

    // add new item
    function addNew(title) {
        let newItem = {
            id: items.length + 1,
            title: title,
        }
        // console.log("This is add new item.");
        // add item
        setItem([...items, newItem]);
    }

    // delete item
    function deleteItem(item) {
        // console.log("Delete Item, ", item);
        setItem(items.filter(it => it.id != item.id));
    }

    // update item
    function updateItem(item) {
        // console.log("Update item", item);
        let newItem = items.map(it => it.id == item.id ? {...it, title: "Change"} : it)
    }


    return (<div>
        <InputComponent addNew={addNew}/>
        <TodoList list={items}
                  deleteItem={deleteItem}
                  updateItem={updateItem}/>
    </div>)
}