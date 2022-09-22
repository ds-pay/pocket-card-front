import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <div className="browser">
        <input type="text" placeholder="Busca en Pocket" />
        <BiSearchAlt2 />
    </div>
  )
}

export default Search