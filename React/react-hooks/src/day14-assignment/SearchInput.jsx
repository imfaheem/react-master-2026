export const SearchInput = ({
    searchValue,
    setSearchValue
}) => {
    console.log("Child: SearchInput rendered.");

    return (
        <section>
            <input
                type="text"
                value={searchValue}
                placeholder="Search Products..."
                onChange={(e)=> setSearchValue(e.target.value)}
            />
        </section>
    )
}
