function SugestoesProps(props){
    return(
        <div class="sugestao">
        <div class="usuario">
          <img src={props.url} alt={props.urlAlt}/>
          <div class="texto">
            <div class="nome">{props.user}</div>
            <div class="razao">{props.stats}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    )
}

export default SugestoesProps;