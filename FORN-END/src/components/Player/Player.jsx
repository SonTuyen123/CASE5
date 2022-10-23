import { useEffect } from "react";
import { useSelector } from "react-redux";
const Player = (props) =>{
  let url = useSelector(res => res.player.url);
  let play = document.querySelector('.play-audio') ;
  useEffect(() =>{
    if(play){
      play.src = url
      play.play()
    }
  },[url])
return <>
      <audio controls className="play-audio">
        <source className="play" src={url} type="audio/mpeg" />
      </audio>
  </>
}
export default Player ;