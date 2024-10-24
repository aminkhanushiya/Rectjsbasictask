import React, { useState } from 'react'

function Readinglist() {

    const products = [
        { name: 'Product A', price: 80 },
        { name: 'Product B', price: 120 },
        { name: 'Product C', price: 95 }
    ];


    const names = products.map(x => {
        return (
            ` <li>
                <span> name :${x.name} </span>
                <span>Price :${x.price}</span>
            </li>`

        )
    });

    console.log(names);
    return (
        <>
            <h1>Hello</h1>
            {
                products.map(x =>
                    <li>
                        <span> name :{x.name} </span>
                        <span>Price :{x.price}</span>
                    </li>

                )
            }
        </>
    )
}

export default Readinglist