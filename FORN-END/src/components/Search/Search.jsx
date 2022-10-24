import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toNonAccentVietnamese from "../accentVietnamese";
import { setData } from "../../redux/features/listMusicSlice";
import { getApi } from "../../pages/home/Home";

const Search = (props) =>{
  let [valueSearch , setValueSearch] = useState('')
  let [isSubSearch , setSubSearch] = useState('none')
  let [dataSearch , setDataSearch] = useState([]) ;
  let data = useSelector(res => res.listMussic.data) ;
  let dispatch = useDispatch()
  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          document.querySelector('.suggest').style.display = 'none' ;
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  const handleChange = (e) =>{
    setValueSearch(e.target.value)
    getApi()
    .then(res =>{ dispatch(setData(res.data.list)) ;})
    .catch(e =>  console.log(e.message))
  }



  const handleFocus = () =>{
    document.querySelector('.suggest').style.display = 'block' ;
    setSubSearch('block')
    setDataSearch(data)
  }

  function handleClickOutSide(e) {
    document.querySelector('.suggest').style.display = 'none' ;
  }

  const handleClick = (id) =>{
   data.forEach(e =>{
      if(e._id === id){
        setValueSearch(e.name)
        setDataSearch([e])
      }
    })
    document.querySelector('.suggest').style.display = 'none' ;
  }

  const handleClickBtnSearch = () =>{
    dispatch(setData(dataSearch))
  }

  return <>
  <div className="search">
  <div className="search-header">
    <div className="search-form">
    <input type="text"  onFocus={handleFocus}  className="search-input" onChange={handleChange} value={valueSearch} placeholder='Nhập tên bài hát'/>
    <button className='search-btn' onClick={handleClickBtnSearch}><i class="fa-solid fa-magnifying-glass search-icons"></i></button>
    </div>

  </div>
  <div >
  <ul className="suggest" ref={wrapperRef} onClick={handleClickOutSide}   style={{display : isSubSearch}}>
    {data.map(e =>{
      let name = toNonAccentVietnamese(e.name).toLowerCase();
      let value = toNonAccentVietnamese(valueSearch).toLowerCase();
      if(name.includes(value)){
        return <li key={e._id} className='sub-suggest' onClick={() =>handleClick(e._id)}>{e.name}</li>
      }else{
        return ''
      }
    })}
  </ul>

  </div>

  </div>
      </>
}
export default Search ;