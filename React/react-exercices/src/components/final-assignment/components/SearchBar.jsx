const SearchBar = ({ title, searchItem, handleSearchItem }) => {
    return (
		<div>
			<input 
				type="text"
				value={searchItem}
				placeholder={`Search ${title}`}
				onChange={(e)=> handleSearchItem(e)}
			/>
		</div>
    )
}

export default SearchBar;