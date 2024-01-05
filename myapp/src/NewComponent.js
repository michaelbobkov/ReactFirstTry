function NewComponent({people}) {
    const list = people.map(person => {
        return(
        <li className="NewComponent" key={person.id}>
            <div>Name: {person.name}</div>
            <div>Age: {person.age}</div>
            <div>T-shirt: {person.Tshirt}</div>
        </li>
        )
         
    })
    return <ul className="list">{list}</ul>
   
  }
  
  export default NewComponent; 