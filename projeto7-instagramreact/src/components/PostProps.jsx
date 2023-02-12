import { useState } from "react";
import infoPost from "../data/infoPost";
import usuario from "./Usuario";
function PostProps(props){
  const [post, setPost] = useState(false);
  function postEscolhido(user){setPost(user);}
  const [like, setLike] = useState(false);
  function LikeEscolhido(user){setPost(user);}
  
    return(
        <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.urlUser} alt={props.user}/>
            <p>{props.user}</p>
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <button className="botao"onClick={() => setLike(!like)}><img src={props.urlContent} alt={props.altContent}/></button>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <button className="botao" onClick={() => setLike(!like)}><ion-icon size="large" name={ like ? "heart" : "heart-outline"}  ></ion-icon></button>
              <ion-icon size="large" name="chatbubble-outline"></ion-icon>
              <ion-icon size="large" name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <button className="botao" onClick={() => setPost(!post)}><ion-icon size="large" name={ post ? "bookmark" : "bookmark-outline"}></ion-icon></button> 
            </div>
          </div>

          <div class="curtidas">
            <img src={props.urlLike} alt={props.altLike}/>
            <div class="texto">
              <p>{props.texto}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PostProps;