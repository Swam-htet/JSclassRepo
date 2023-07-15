function ChildEvent({onClick}) {
    return(<div>
        <button className={"btn btn-warning"} onClick={onClick}>Click Here</button>
    </div>)
}

export default function EventDemo() {
    function onClickHandler() {
        console.log("Click Handler");
    }

    return (<div>
        <ChildEvent onClick={onClickHandler}/>
    </div>)
}