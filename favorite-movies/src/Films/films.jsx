import "./films.css"

export default function Films(props){
  const handleImgClickInfo = (e) => {
    alert(JSON.stringify(props.mass[e.target.dataset.onclickparam]));
  }
  return(
    <div class="films">
    <img src={"https://avatars.dzeninfra.ru/get-zen_doc/1525719/pub_624b016535b7a25737e0095e_624b02b342b6d465f4d9a612/scale_1200"} alt="film1"onClick={handleImgClickInfo} data-onclickparam={0}/>
  <img src={"https://cdn1.ozone.ru/s3/multimedia-n/6509170235.jpg"} alt="film2"onClick={handleImgClickInfo} data-onclickparam={1}/>
  <img src={"https://trueposters.ru/pictures/product/big/5859_big.jpg"} alt="film3"onClick={handleImgClickInfo} data-onclickparam={2}/>
  <img src={"https://xl.movieposterdb.com/15_08/2015/3787590/xl_3787590_b2ee5388.jpg"} alt="film4"onClick={handleImgClickInfo} data-onclickparam={3}/>
  </div>
  );
}