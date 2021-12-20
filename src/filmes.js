import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Filme(props){
    return(
        <div className="filme">
            <Link to={`/sessoes/${props.imagem.id}`}>{/* É AQUI QUE TÁ O PROBLEMA.
            Quando eu clico na imagem o link vai pra http://localhost:3000/sessoes/undefined e num vai pra onde eu quero
            Mas quando eu faço http://localhost:3000/sessoes/1 ele vai pro lugar certo*/}
                <img src={props.imagem} alt="Cineflex"/>
            </Link>
        </div>
    );
}

function CriaFilmes(){
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

        promessa.then(resposta => {
            setImagens(resposta.data);
        });
    }, [] );
    
    return(
        <div className="catalogo">

            {imagens.map((imagem) => {
                return <Filme imagem={imagem.posterURL} />
            })}

        </div>
    );
}

export default function Filmes(){
    return(
        <div className="conteudo">
            <header className="topo">CINEFLEX</header>

            <div className="topo-status">
                Selecione o filme
            </div>

            <CriaFilmes/>

        </div>
    );
}