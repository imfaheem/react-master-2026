import React from 'react'

export const RenderCounter = React.memo(({ counter }) => {
    console.log("Render Counter");

    return (
        <section className='profile'>
            <h4>Render Counter</h4>
            <p>Parent: {counter}</p>
            <p>Profile: </p>
            <p>Products: </p>
            <p>Theme: </p>
        </section>
    )
})
