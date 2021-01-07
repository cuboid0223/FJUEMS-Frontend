import React from 'react'
import { useStateValue } from "../StateProvider";


const SearchPage = ({message, events}) => {
    const [{ query }, dispatch] = useStateValue();
    return (
      <div className="searchPage">
        <h1> {query} 的搜尋結果</h1>
        {events.length <= 0  && message }
      </div>
    );
}

export default SearchPage
