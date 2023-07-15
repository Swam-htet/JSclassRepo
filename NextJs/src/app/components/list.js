function Item({item}) {
    return <li>
        {item.title}
    </li>;
}

export default function List({data}){
    return (<ul>
        {data.map(item=>{
            return (<Item key={item.id} item={item}/>)
        })}
    </ul>);
}