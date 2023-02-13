import { useState } from "react";
import infoPost from "../data/infoPost";
import usuario from "./Usuario";
function PostProps(props){
  const [post, setPost] = useState(false);
  function postEscolhido(user){setPost(user);}
  const [like, setLike] = useState(false);
  function LikeEscolhido(user){setPost(user);}
  const [likeClass, setLikeClass] = useState("")
  function liker(){
    setLike(!like);
    setLikeClass(!likeClass);
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
          <button data-test="post-image" className="botao"onClick={liker}><img src={props.urlContent} alt={props.altContent}/></button>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <button data-test="like-post" className="botao" onClick={liker}><ion-icon size="large" name={ like ? "heart" : "heart-outline"} class={likeClass ? "vermelho" : ""} ></ion-icon></button>
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
              <p data-test="likes-number">{props.texto}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PostProps;