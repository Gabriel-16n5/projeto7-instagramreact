function StoryProps(props){
    return(
        <div class="story">
          <div class="imagem">
            <img src={props.url} alt={props.user} />
            </div>
            <div class="usuario">
                <p>{props.userSub}</p>
            </div>  
        </div>
    )
}

export default StoryProps;