import { useEffect, useState } from "react";

export const useDebounce = (data) => {
    const [searchItem, setSearchItem] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    const handleSearchItem = (e)=> {
		setSearchItem(e.target.value);
	}

    useEffect(()=> {
		const timer = setTimeout(()=> {
			const filteredData = data?.filter(list => {
                const targetText = list.name || list.title || "";
                return targetText.toLowerCase().includes(searchItem.toLocaleLowerCase());
            })
            setFilteredList(filteredData);
        }, 1000);

		return ()=> clearTimeout(timer);
	}, [data, searchItem]);

    return {
        searchItem,
        handleSearchItem,
        filteredList
    }
}
