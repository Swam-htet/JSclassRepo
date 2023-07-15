"use client";


import {useReducer} from "react";

// main componenet
export default function ReducerCounter(){

    // initial
    const init = {
        counter:0
    }

    // reducer function
    function reducerFun(stage,action){
        switch (action.type){
            case "inc":
                // return action object
                return ({
                    counter : stage.counter+1,
                })
                break;

            case "desc":
                // return action object
                return ({
                    counter:stage.counter-1,
                })
        }
        return stage;
    }

    // use reducer
    let [stage,dispatch] = useReducer(reducerFun,init);

    // increase handler
    let incFun = ()=>{
        // action return
        dispatch({type:"inc"});
    }

    // decrease handler
    let descFun = ()=>{
        // action return
        dispatch({type:"desc"});
    }

    // JSX return
    return (<div>

        <button className={'btn btn-danger me-3'}
                onClick={descFun}
                type={"button"} children={"-"}/>

        Counter : {stage.counter}

        <button className={'btn btn-success ms-3'}
                onClick={incFun}
                type={"button"} children={"+"}/>

    </div>)
}
