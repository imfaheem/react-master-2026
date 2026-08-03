import React from 'react'

export const Theme = React.memo(({ theme }) => {
    console.log("Theme: ", theme)
    return (
        <section className='theme'>
            <h4>Theme</h4>

        </section>
    )
})
