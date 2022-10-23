import { useEffect ,useState } from "react";
import { useSelector } from "react-redux";
const Player = (props) =>{
  let url = useSelector(res => res.player.url);
  let [isPlay , setPlay] = useState('none')
  let play = document.querySelector('.play-audio') ;


  useEffect(() =>{
    if(play){
      play.src = url
      play.play()
      setPlay('block')
    }
  },[url])
return <>
      <audio controls className="play-audio" style={{display : isPlay}}>
        <source className="play" src={url} type="audio/mpeg" />
      </audio>
  </>
}
export default Player ;