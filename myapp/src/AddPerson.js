import React, { useState } from 'react';

function AddPerson({ addPerson }) {
    const [state, setState] = useState({
        name: null,
        age: null,
        Tshirt: null
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.id]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addPerson(event, state)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" onChange={handleChange}></input>
                <label htmlFor="age">Age: </label>
                <input type="text" id="age" onChange={handleChange}></input>
                <label htmlFor="Tshirt">T-shirt: </label>
                <input type="text" id="Tshirt" onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddPerson;
