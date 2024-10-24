import React from 'react'

function Filtermap() {

    const products = [
        { name: 'Product A', price: 520 },
        { name: 'Product B', price: 120 },
        { name: 'Product C', price: 95 }
    ];


    const bigvalue = products.filter((value) => value.price > 100).map(x => x.name)
    console.log(bigvalue);

    return (
        <>


        </>
    )
}

export default Filtermap