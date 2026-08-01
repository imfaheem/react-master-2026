import { memo } from 'react'

export const ChildObject = memo(({user}) => {
    console.log("ChildObject Rendered");
    
    return (
        <div>
            <h4>ChildObject: {JSON.stringify(user)}</h4>
        </div>
    )
})
