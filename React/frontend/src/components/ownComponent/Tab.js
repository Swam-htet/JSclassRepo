import * as PropTypes from "prop-types";
import "./Tab.css";
import {useState} from "react";

function Header({head,changeTab,index,active}) {
    let className = "";
    if(active){
        className += " active";
    }

    return <span className={className} onClick={()=>changeTab(index)}>
        <h4>{head}</h4>
    </span>;
}

Header.propTypes = {head: PropTypes.any};
export default function Tab({headers, children}) {
    let [activeTab, setActiveTab] = useState(0);

    // on click change
    function changeTab(tabIndex){
        console.log("Change tab > ", tabIndex);
        setActiveTab(tabIndex);
    }

    return (<div className={"tab-container"}>
        <div className={"tab-header"}>
            {headers.map((head, index) => <Header key={index}
                                                  index={index}
                                                  head={head}
                                                  active={activeTab==index}
                                                  changeTab={changeTab}/>)}
        </div>
        <div className={"tab-body"}>
            {children[activeTab]}
        </div>

    </div>);
}