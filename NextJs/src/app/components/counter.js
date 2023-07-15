"use client";

import {useState} from "react";
import Button from "./button";

export default function Counter(){
    let inc = () =>{
        setCount(count+1);
        console.log("Increase");
    }
    let dec = () =>{
        setCount(count-1);
        console.log("Decrease");
    }

    let changeLabel=()=>{
        setLabel("Hello");
        console.log("Change label");
    }

    let text = "Hello";
    let [count,setCount] = useState(0);
    let [label,setLabel] = useState(text);

    console.log("Render");

    return (<div>
        <div>
            <Button data={text} onclick={changeLabel}/>
        </div>
        <Button data={'-'} onclick={dec}/>
        {count}
        <Button data={'+'} onclick={inc}/>

    </div>);
}