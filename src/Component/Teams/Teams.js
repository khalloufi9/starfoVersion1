import React from 'react'
import Slider from "react-slick";
import '.././Body/About/About.css'
import './Teams.css'
const Teams = () => {
    const settings = {
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        
      };
    const tab=[{id:1,name:"1",photo:"https://voi.img.pmdstatic.net/fit/https.3A.2F.2Fs1.2Edmcdn.2Enet.2Fv.2FTTPwB1XvotyyUqhFY/1280x720/quality/80/voici-cristiano-ronaldo-la-nouvelle-coupe-du-joueur-provoque-l-hilarite-des-internautes.jpg"},
    {id:2,name:"2",photo:"https://dzballon.com/wp-content/uploads/2021/05/PicsArt_05-04-06.31.08.jpg"},{id:3,name:"3",photo:"https://www.lequipe.fr/_medias/img-photo-jpg/apres-une-saison-a-l-inter-milan-achraf-hakimi-s-apprete-a-signer-au-psg-lapresse-icon-sport/1500000001512303/0:0,1998:1332-828-552-75/6ce6a"},
    {id:3,name:"4",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_RaDa0dXarkQ0b2i9hTkzaBUzJul3jb9CMZUXZoHmdBkrfvFmg54EziIxALCGhF0pWA&usqp=CAU"},
    {id:3,name:"5",photo:"https://us.123rf.com/450wm/luismolinero/luismolinero1610/luismolinero161000830/63538844-homme-noir-jouant-au-football.jpg?ver=6"},
    {id:3,name:"6",photo:"https://www.realmadrid.com/img/vertical_380px/courtois_380x501_20210826062816.jpg"}]
  return (
    <div className='back'>
        <div style={{backgroundColor:"black",marginTop:"25px",opacity:"0.9",height:"400px",width:"1100px"}}>
      <h2 style={{color:"white",marginTop:"10px"}}> Team 1</h2>
      <Slider {...settings}>
          {tab.map(el=><div  className='joueur'style={{marginTop:"20px"}} >
          <img style={{width:"250px", height:"250px",marginLeft:"70px",marginTop:"20px",borderRadius:"120px"}} src={el.photo}/>
          <h3 style={{color:"white",marginTop:"10px"}}>My Name is : {el.name}</h3>
        </div>)}
        
      </Slider>
    </div>
    </div>
  )
}

export default Teams