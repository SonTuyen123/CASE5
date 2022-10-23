import playerSlice, { getUrl } from '../../redux/features/playerSlice';
import { useSelector, useDispatch } from 'react-redux';
const Card = (props) =>{
  let nameSong = props.name ;
  let image = props.image ;
  let mp3 = props.mp3;
  let dispatch = useDispatch() ;
  const handleClick = () =>{
    dispatch(getUrl(mp3))
  }
  return<>
  <div className="card-music" style={{backgroundImage : `url(${image})`}}>
  <h5 className="song-name">{}</h5>
    <p className="singler">{nameSong}</p>
    <div className="card-img">
    <div className="icon-card ">
    <i class="fa-sharp fa-solid fa-play icons-card btn-play-card" style={{display : 'none'}}></i>
    </div>
    <div className="icon-card btn-pause-card" style={{display : 'none'}}>
    <i class="fa-solid fa-pause" ></i>
    </div>
    </div>
    <div className="card-info">

    </div>
    <div className="btn">
    <button onClick={handleClick} className="btn-play-list">Phát bài hát</button>
      </div>
    </div>
  </>
}


export default Card ;