export default function Hello() {
    return (
        <div>
            <h1>This is hello world Component</h1>
            <p>This is paragraph under hello world component</p>
            <AsYouLike/>
        </div>

    );
}

export function AsYouLike(){
    return (<div>
        <h3>Name import</h3>
        <p>This is paragraph under name import</p>
    </div>)
}
