export default function Conditional({data}){
    return (<div>
        {data==="Success"?"Success Return":"Error Return"}
    </div>);
}