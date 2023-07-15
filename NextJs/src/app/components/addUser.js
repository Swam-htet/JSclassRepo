"use client";

import {useState} from "react";

// user insert box
function UserInsert({user,nameChange,passwordChange,onClick}) {
    return <div className={"bg-light p-3"}>
        <h2>Add New User - </h2>


        <div className={"mb-2"}>
            <label className={"form-label"}>Enter Username : </label>
            <input className={"form-control"} type={"text"} value={user.name} onChange={nameChange}/>
        </div>

        <div className={"mb-2"}>
            <label className={"form-label"}>Enter Password : </label>
            <input className={"form-control"} type={"password"} value={user.password} onChange={passwordChange}/>
        </div>

        <button className={"btn btn-outline-success"}
                type={"button"}
                onClick={onClick}>
            Add New User
        </button>


    </div>;
}

// user box
function User({user,onClick}) {
    return <div className={"card m-3 p-5"}>
        <div className={"bg-warning m-3 p-3"}>
            <h6>User ID : {user.id}</h6>

            <h6>Username : {user.name}</h6>
            <p>Password : {user.password}</p>

        </div>

        <button className={"btn btn-danger m-3"} onClick={onClick}>Delete</button>

    </div>;
}

// main component
export default function AddUser() {


    // initial stage
    let startList = [
        {
            id: 0,
            name: "Swam Htet",
            password: "alphar",
        }
    ];

    // stage
    let [counter, setCounter] = useState(1);
    let [list, setList] = useState(startList);
    let [name, setName] = useState("");
    let [password, setPassword] = useState('');

    // event handler
    let nameOnChangeHandler = (event) => {
        setName(event.target.value);
    }

    let passwordOnChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    let onClickButton = () => {

        setCounter(counter + 1);

        setList([...list, {
            id: counter,
            name: name,
            password: password,
        }]);


        setName('');
        setPassword('');
    }

    // component return
    return (<div className={'container'}>
        <div className={'row'}>

            {/* user display */}
            <div className={'col-5'}>
                {list.map((user, index) => {

                    // delete button
                    let onDeleteHandler = () => {
                        setList(list.filter(item => item.id !== user.id));
                        console.log(list);
                    }

                    return (
                        <User key={user.id} user={user} onClick={onDeleteHandler}/>
                    );
                })}
            </div>

            {/* add user box */}
            <div className={'col-5'}>
                <UserInsert user={{name,password}}
                            nameChange={nameOnChangeHandler}
                            passwordChange={passwordOnChangeHandler}
                            onClick={onClickButton}/>
            </div>
        </div>
    </div>);
}