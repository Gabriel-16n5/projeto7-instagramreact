import { useState } from "react";
import infoPost from "../data/infoPost";
import usuario from "./Usuario";
function PostProps(props){
  const [post, setPost] = useState(false);
  function postEscolhido(user){setPost(user);}
  const [like, setLike] = useState(false);
  function LikeEscolhido(user){setPost(user);}
  const [likeClass, setLikeClass] = useState("")
  const [likeCount, setLikeCount] = useState(props.nlikes)
  function liker(){
    setLike(!like);
    setLikeClass(!likeClass);
    if(like !== "heart-outline" && likeClass !== "preto"){
      setLikeCount(likeCount - 1);
     }else {
       setLikeCount(likeCount + 1);
     }
  }
  function likerPost(){
    setLike("heart");
    setLikeClass("vermelho");
    if(like === "heart" && likeClass === "vermelho"){
      setLikeCount(likeCount - 1);
    }else {
      setLikeCount(likeCount + 1);
    }
  }

    return(
        <div data-test="post" class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.urlUser} alt={props.user}/>
            <p>{props.user}</p>
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div data-test="post-image" class="conteudo">
          <button data-test="post-image" className="botao" onClick={likerPost}><img src={props.urlContent} alt={props.altContent}/></button>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <button data-test="like-post" className="botao" onClick={liker}><ion-icon size="large" name={ like ? "heart" : "heart-outline"} class={likeClass ? "vermelho" : "preto"} ></ion-icon></button>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <button data-test="save-post" className="botao" onClick={() => setPost(!post)}><ion-icon size="large" name={ post ? "bookmark" : "bookmark-outline"}></ion-icon></button> 
            </div>
          </div>

          <div class="curtidas">
            <img src={props.urlLike} alt={props.altLike}/>
            <div class="texto">
              <p data-test="likes-number"> Curtido por {props.texto} e outras {likeCount} pessoas </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PostProps;