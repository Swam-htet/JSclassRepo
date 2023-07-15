
export default function ItemList({data}){

    return (<div className={'container'}>
        <div className={'row'}>
            {data.map((item,index)=>{
                return(
                    <div className={'card p-4'}
                         key={index}>
                        <h4>Name : {item.name}</h4>
                        <p>Artist : {item.artist}</p>
                        <p>Description : {item.description}</p>
                        <img src={item.url} alt={item.alt}/>
                    </div>
                );
            })}
        </div>
    </div>);
}