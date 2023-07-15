//
"use client";

import {useState} from "react";

const initialList = [
    {id: 0, title: 'Big Bellies', seen: false},
    {id: 1, title: 'Lunar Landscape', seen: false},
    {id: 2, title: 'Terracotta Army', seen: true},
];

export default function ListCheck({list}) {
    let [myList, setMyList] = useState(list);

    function handleToggleMyList(artworkId, nextSeen) {
        const myNextList = [...myList];
        const artwork = myNextList.find(
            a => a.id === artworkId
        );
        artwork.seen = nextSeen;
        setMyList(myNextList);
    }

    return (<div>
        <ItemList artworks={initialList} onToggle={toggleHandler}/>
    </div>);
}


function ItemList({artworks, onToggle}) {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        {artwork.title}
                    </label>
                    <input type="checkbox" checked={artwork.seen} onChange={e => {onToggle(artwork.id,e.target.checked);}}/>
                </li>
            ))}
        </ul>
    );
}