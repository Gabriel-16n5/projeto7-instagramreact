import infoPost from "../data/infoPost";
import PostProps from "./PostProps";

function Posts(){
    return(
        <div class="posts">
          {infoPost.map((p) => (<PostProps
          urlUser={p.urlUser}
          user={p.user}
          altUser={p.user}
          urlContent={p.urlContent}
          altContent={p.altContent}
          urlLike={p.urlLike}
          altLike={p.altLike}
          texto={p.texto}
          />))}
        </div>
    )
}

export default Posts;