"use client";

import {useState} from "react";
import Button from "./button";


export default function AddList(){

    let start = [];


    let [list,setList] = useState(start);

    let addNew = () =>{
        console.log(list);
        setList([...list ,"item"]);
    }
    return (<div>


        <h1>{list}</h1>
        <Button data={"Add New"} onclick={addNew}/>
    </div>);
}