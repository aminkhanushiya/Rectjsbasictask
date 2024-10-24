import React from 'react'

function Capitalized() {

    const words = ['hello', 'world', 'javascript'];

    const fristCapial = (word) => {
        return word.toUpperCase();
    }

    const result = words.map(fristCapial)

    console.log(result);

    return (
        <>
            <h1>Capitalized</h1>

        </>
    )
}

export default Capitalized