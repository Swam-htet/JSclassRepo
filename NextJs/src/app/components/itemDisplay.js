import {useState} from "react";

export default function ItemDisplay({data}) {
    let [index, setIndex] = useState(0);
    let checkNext = index < data.length - 1;
    let onclickHandler = () => {
        if (checkNext) {
            setIndex(index + 1);
        } else {
            setIndex(0)
        }
    }
    return (<div className={'container'}>
        <div className={'p-4'}>
            <button onClick={onclickHandler}
                    className={'btn btn-outline-warning'}>
                Next
            </button>
        </div>
        <div className={'card p-3'}>
            <h4>ID : {index}</h4>

            <h4>Name : {data[index].name}</h4>
            <h5>Artise : {data[index].artist}</h5>
            <p>Description : {data[index].description}</p>
            <img className={'card-img'}
                 src={data[index].url}
                 alt={data[index].alt}/>


        </div>
    </div>);
}