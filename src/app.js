import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Filmes from "./filmes";
import Sessoes from "./sessoes";

export default function App(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Filmes/>}></Route>
                <Route path="/sessoes/:idFilme" element={<Sessoes/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}