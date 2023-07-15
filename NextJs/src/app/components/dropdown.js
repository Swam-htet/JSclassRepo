"use client";

import {useState} from "react";

export default function Dropdown({item}) {
    let [visible, setVisible] = useState(false);

    let btnHandler = () => {
        setVisible(!visible);
    }
    return (
        <div className={'container-fluid'}>
            {/* dropdown btn */}
            <button className={'btn btn-outline-success m-4'} onClick={btnHandler}>Dropdown Button</button>

            {/* dropdown body */}
            {visible || <div className={'bg-success'} style={{width: '300px', height: "400px"}}></div>
            }
        </div>
    );
}