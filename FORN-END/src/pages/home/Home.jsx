import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import Player from '../../components/Player/Player'
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () =>{
  let [listMusic , setListMusic] = useState();
  let url = useSelector(res => res.player.url);
  useEffect(() =>{
    axios.get('http://localhost:8080/admin/listMp3')
    .then(res =>{ setListMusic(res.data.list)})
    .catch(e =>  console.log(e.message))
  },[url])
  return <>
  <div className='app'>
    <div className="header">
    <Navbar/>
    </div>
    <div className="grid wide main-content">
      <HeaderTop />
      <Search/>
      <h2 className="preface">Tuổi trẻ là thứ quý giá nhất , chúng ta hãy chân tận dụng nó tốt nhất có thể nhé </h2>
      <div class="row play-list">
        {listMusic && listMusic.map((element=>{
          return <>
          <div class="col l-4" key={element.id}>
          <Card name={element.name} image={element.image} mp3={element.mp3}/>
        </div>
          </>
        }))}
      </div>
    </div>
    <div className="col l-12 player">
        <Player/>
        </div>
    </div>

  </>
}
export default Home ;

