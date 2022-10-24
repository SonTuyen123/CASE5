import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import Player from "../../components/Player/Player";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/features/listMusicSlice";
import "../../../src/style.css";
export const getApi = async() =>{
  let data = await axios
      .get("http://localhost:8080/admin/listMp3")
      return data
}
const Home = () => {
  let [listMusic, setListMusic] = useState();
  let url = useSelector((res) => res.player.url);
  let data = useSelector(res => res.listMussic.data)
  let dispatch = useDispatch();
  useEffect(() => {
    getApi()
    .then((res) => {
      let data = res.data.list.reverse();
      dispatch(setData(data));
    })
    .catch((e) => console.log(e.message));
  }, [url]);
  console.log(1);

  return (
    <>
      <div className="app">
        <div className="header">
          <Navbar />
        </div>
        <div className="grids wide-1 main-content">
          <HeaderTop />
          <Search />
          <h2 className="preface">
            Tuổi trẻ là thứ quý giá nhất , chúng ta hãy chân tận dụng nó tốt
            nhất có thể nhé{" "}
          </h2>
          <div class="row1 play-list">
            {data.length !== 0 ?
              data.map((element) => {
                return (
                  <>
                    <div class="col-1 ll-4" key={element.id}>
                      <Card
                        name={element.name}
                        image={element.image}
                        mp3={element.mp3}
                      />
                    </div>
                  </>
                );
              }) : <p style={{textAlign : 'center' , position : 'relative' , left : '50%' , transform : 'translateX(-50%)' , fontSize : '24px' , color : 'red' }}>Bài hát tìm kiếm không tồn tại</p>}
          </div>
          <div className="footter">
            <Footer />
          </div>
        </div>
        <div className="col l-12 player">
          <Player />
        </div>
      </div>
    </>
  );
};
export default Home;
