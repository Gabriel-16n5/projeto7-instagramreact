import usuario from "../components/Usuario";

const infoPost = [
    {
        urlUser: "assets/img/barked.svg",
        altUser: "barked",
        user: "barked",
        urlContent: "assets/img/dog.svg",
        altContent: "dog",
        urlLike: "assets/img/adorable_animals.svg",
        altLike: "adorable_animals",
        texto: `Curtido por ${usuario[1].u1} e outras ${usuario[0].p1} pessoas`
    },
    {
        urlUser: "assets/img/meowed.svg",
        altUser: "meowed",
        user: "meowed",
        urlContent: "assets/img/gato-telefone.svg",
        altContent: "gato-telefone",
        urlLike: "assets/img/respondeai.svg",
        altLike: "respondeai",
        texto: `Curtido por ${usuario[1].u2} e outras ${usuario[0].p2} pessoas`
    },
    {
        urlUser: "https://www.frazes.com.br/wp-content/uploads/Quando-o-poder-do-amor-se-sobrepuser-ao-amor-pelo-poder-o-mundo-conhecera-a-paz.%F0%9F%99%8F%F0%9F%92%96.jpg",
        altUser: "Poder Do Amor",
        user: "Poder Do Amor",
        urlContent: "https://www.frazes.com.br/wp-content/uploads/Quando-o-poder-do-amor-se-sobrepuser-ao-amor-pelo-poder-o-mundo-conhecera-a-paz.%F0%9F%99%8F%F0%9F%92%96.jpg",
        altContent: "frase-motivacional",
        urlLike: "https://conteudo.imguol.com.br/c/entretenimento/2c/2020/12/14/amor-relacionamento-casal-paixao-apaixonados-1607980291163_v2_900x506.jpg.webp",
        altLike: "respondeai",
        texto: `Curtido por ${usuario[1].u3} e outras ${usuario[0].p3} pessoas`
    }
];

export default infoPost;