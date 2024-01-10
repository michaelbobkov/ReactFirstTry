function NewComponent({deletePerson, people}) {
    const list = people.map(person => {
    if (person.age > 20){
        return(
        <li className="NewComponent" key={person.id}>
            <div>Name: {person.name}</div>
            <div>Age: {person.age}</div>
            <div>T-shirt: {person.Tshirt}</div>
            <button onClick={(event) => { deletePerson(event, person.id) }}>Delete person</button>
        </li>
        )
    } else{
        return null
    }
         
    })
    return <ul className="list">{list}</ul>
   
  }
  
  export default NewComponent; 