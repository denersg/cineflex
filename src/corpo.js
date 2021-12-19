import axios from "axios";
import { useEffect, useState } from "react";

function Filme(props){
    return(
        <div className="filme">
            <img src={props.imagem} alt="Cineflex"/>
        </div>
    );
}

function Filmes(){
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

export default function Corpo(){
    return(
        <div className="conteudo">
            <header className="topo">CINEFLEX</header>

            <div className="topo-status">
                Selecione o filme
            </div>

            <Filmes/>

        </div>
    );
}