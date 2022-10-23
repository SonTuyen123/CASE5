import { useState } from "react";
import { useSelector } from "react-redux";

const Search = () =>{
  let [valueSearch , setValueSearch] = useState('')
  let [isSubSearch , setSubSearch] = useState('none')
  let [dataSearch , setDataSearch] = useState([]) ;
  let data = useSelector(res => res.listMussic.data)
  const handleChange = (e) =>{
    setValueSearch(e.target.value)
  }
  const handleFocus = () =>{
    setSubSearch('block')
    setDataSearch(data)
  }
  const handleFocusOut = () =>{
    setSubSearch('none')
  }
  return <>
  <div className="search">
  <div className="search-header">
    <div className="search-form">
    <input type="text" onFocus={handleFocus} onBlur={handleFocusOut} className="search-input" onChange={handleChange} value={valueSearch} placeholder='Nhập tên bài hát'/>
    <button className='search-btn'><i class="fa-solid fa-magnifying-glass search-icons"></i></button>

    </div>

  </div>
  <ul className="suggest" style={{display : isSubSearch}}>
    {dataSearch.map(e =>{
      return <li className="sub-suggest">{e.name}</li>
    })}
  </ul>
  </div>
      </>
}
export default Search ;