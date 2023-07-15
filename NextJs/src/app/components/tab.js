"use client";

import "./tab.css";

import {useState} from "react";

export default function Tab({headers, children}) {

    // stage
    let [activeTab, setActiveTab] = useState(0);

    // onclick event handler function for tab-head-item
    let tabClickHandler = (index) => {
        setActiveTab(index);
    }

    // JSX return
    return (

        //tab
        <div>
            {/* tab header */}
            <ul className={'tab'}>
                {/* tab head item */}
                {headers.map((title, index) => {
                    return (
                        <li onClick={() => tabClickHandler(index)}
                            key={index}
                            className={'tab-item'}>
                            {title}
                        </li>
                    );
                })}
            </ul>

            <div className={'card tab-body'}>
                {children[activeTab]}
            </div>

        </div>
    )
}