const Card = () =>{
  return<>
  <div className="card-music">
  <h5 className="song-name">Cơn mưa ngang qua</h5>
    <p className="singler">Sơn Tùng MTP</p>
    <div className="card-img">
    <div className="icon-card">
    <i class="fa-sharp fa-solid fa-play icons-card"></i>
    </div>
    <div className="icon-card" style={{display : 'none'}}>
    <i class="fa-solid fa-pause" ></i>
    </div>
    </div>
    <div className="card-info">

    </div>
    <div className="btn">
    <button className="btn-play-list">Yêu thích</button>
      </div>
    </div>
  </>
}


export default Card ;