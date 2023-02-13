import Sugestoes from "./Sugestoes";
import React from "react";

function SideBar(){
  const [nomeDoUsuaio, setNomeDoUsuario] = React.useState("catanacomics");

  function alterarNomeDoUsuario(){
    let nu = prompt("Qual seu nome?");
    if(nu === null || nu === undefined || nu === ""){
      nu = "catanacomics";
    }
    setNomeDoUsuario(nu);
  }

  const [imagemDoUsuaio, setImagemDoUsuario] = React.useState("assets/img/catanacomics.svg");
  function alterarImagemDoUsuario(){setImagemDoUsuario(prompt("Passe um link para sua nova foto"));}

    return(
        <div class="sidebar">
        <div class="usuario">
          <button data-test="profile-image" className="botao" onClick={alterarImagemDoUsuario}><img src={imagemDoUsuaio} alt="imagem de perfil"/></button>
          <div class="texto">
            <span data-test="name">
              <strong data-test="name">{nomeDoUsuaio}</strong>
              <button data-test="edit-name" className="botao" onClick={alterarNomeDoUsuario}><ion-icon name="pencil"></ion-icon></button>
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