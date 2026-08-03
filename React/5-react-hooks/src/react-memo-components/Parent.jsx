import { useState } from 'react'
import { Profile } from './Profile';
import { Products } from './Products';
import { Theme } from './Theme';
import { RenderCounter } from './RenderCounter';

export const Parent = () => {
    const [counter, setCounter] = useState(0);
    console.log(counter);

    return (
        <div className='react-memo-components'>
            <section className='parent'>
                <h4>Parent Counter : {counter}</h4>
                <button onClick={()=> setCounter(prev => prev+1)}>Add Counter</button>
            </section>
            <Profile users={{name: "Faheem", age: 35 }} />
            <Products />
            <Theme theme="dark" />
            <RenderCounter counter={counter} />
        </div>
    )
}
