export const Navbars = ({
    setUseEffect,
    setUseRef,
    setContextApi,
    setReactMemo,
}) => {
    return (
        <nav>
            <ul>
                <li onClick={()=> setUseEffect(prev => !prev)}>Use Effect Hook</li>
                <li onClick={()=> setUseRef(prev => !prev)}>Use Ref</li>
                <li onClick={()=> setContextApi(prev => !prev)}>ContextAPI: UseContext</li>
                <li>Use Memo</li>
                <li>Use Callback</li>
                <li onClick={()=> setReactMemo(prev => !prev)}>React.memo</li>
            </ul>
        </nav>
    )
}
