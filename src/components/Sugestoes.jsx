import infoSugestoes from "../data/infoSugestoes";
import SugestoesProps from "./SugestoesProps";

function Sugestoes(){
    return(
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {infoSugestoes.map((info) => (<SugestoesProps
        url={info.url}
        urlAlt={info.urlAlt}
        user={info.user}
        stats={info.stats}
        />))}
      </div>
    )
}

export default Sugestoes;