export const Navbar = ({
    setUseEffect
}) => {
    return (
        <nav>
            <ul>
                <li onClick={()=> setUseEffect(prev => !prev)}>Use Effect Hook</li>
                <li>Use Memo</li>
                <li>Use Ref</li>
                <li>Use Callback</li>
            </ul>
        </nav>
    )
}
