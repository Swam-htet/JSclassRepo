export  default function Profile({data}){
    return (<div>
        <h3>{data.name}</h3>
        <img src={data.imageUrl}
             alt={"image-"+data.name}
             style={{
                 width:data.imageSize,
                 height:data.imageSize
             }
             }/>
    </div>);
}