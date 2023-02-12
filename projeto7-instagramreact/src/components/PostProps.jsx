import infoPost from "../data/infoPost";
function PostProps(props){
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
          <img src={props.urlContent} alt={props.altContent}/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
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