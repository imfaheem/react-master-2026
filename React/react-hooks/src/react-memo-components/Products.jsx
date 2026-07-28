import React from 'react'

export const Products = React.memo(() => {
    console.log("Products");

    return (
        <section className='products'>
            <h4>Products List</h4>

        </section>
    )
})
