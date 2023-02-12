import Sugestoes from "./Sugestoes";
import React from "react";

function SideBar(){
  const [nomeDoUsuaio, setNomeDoUsuario] = React.useState("catanacomics");
  function alterarNomeDoUsuario(){setNomeDoUsuario(prompt("Qual seu nome?"));}

  const [imagemDoUsuaio, setImagemDoUsuario] = React.useState("assets/img/catanacomics.svg");
  function alterarImagemDoUsuario(){setImagemDoUsuario(prompt("Passe um link para sua nova foto"));}

    return(
        <div class="sidebar">
        <div class="usuario">
          <button className="botao" onClick={alterarImagemDoUsuario}><img src={imagemDoUsuaio} alt="imagem de perfil"/></button>
          <div class="texto">
            <span>
              <strong>{nomeDoUsuaio}</strong>
              <button className="botao" onClick={alterarNomeDoUsuario}><ion-icon name="pencil"></ion-icon></button>
            </span>
          </div>
        </div>
        <Sugestoes />
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}



export default SideBar;