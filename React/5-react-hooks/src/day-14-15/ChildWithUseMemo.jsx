import React from 'react'

export const ChildWithUseMemo = React.memo(({user, arrayList}) => {
    console.log("ChildWithUseMemo Rendered");

    return (
        <div>
            <p>ChildWithUseMemo:</p>
            <h4>User: {JSON.stringify(user)}</h4>
            <h4>ArrayList: {JSON.stringify(arrayList)}</h4>
        </div>
    )
})
