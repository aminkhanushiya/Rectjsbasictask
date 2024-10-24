import React from 'react'

function Greeting() {
    const isLogged = false
    return (
        <>
            {
                isLogged ? (<h1>Welcome to React'</h1>) :
                    (<h1>Please login to further process</h1>)
            }
        </>
    )
}

export default Greeting