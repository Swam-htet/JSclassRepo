// item
function TodoItem({item}) {
    return (<li>
        <div className={"border m-2"}>
            <h5>Name : {item.name}</h5>
            <h5>Profession : {item.profession}</h5>
            <h5>Accomplishment : {item.accomplishment}</h5>
            <img src={getImageUrl(item)} alt={item.name}/>
        </div>
    </li>)
}

function getImageUrl(person) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    );
}

// list component
function TodoList({items}) {
    return (<ul>

        {items.map(item => <TodoItem key={item.id} item={item}/>)}
    </ul>)
}

// main component
export default function ListRendering() {
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
    }];

    return (<div>
        <TodoList items={people}/>
    </div>)

}