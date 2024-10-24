import React from 'react'

function People() {
    const people = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 }
    ];
    const names = people.map(x => {
        return x.name
    });
    console.log(names);

    return (
        <>

            <h2>People Name</h2>
        </>
    )
}

export default People;