import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import Player from '../../components/Player/Player'
import HeaderTop from '../../components/HeaderTop/HeaderTop'

const Home = () =>{
  return <>
  <div className='app'>

    <div className="header">
    <Navbar/>
    </div>
    <div className="grid wide main-content">
      <HeaderTop />
      <Search/>
      <div class="row play-list">
        <div class="col l-4">
          <Card/>
        </div>
        <div class="col l-4">
          <Card/>
        </div>
        <div class="col l-4">
          <Card/>
        </div>
      </div>
    </div>
    <div className="col l-12 player">
        <Player/>
        </div>
    </div>

  </>
}
export default Home ;

