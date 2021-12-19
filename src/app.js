import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Corpo from "./corpo";
import Sessoes from "./sessoes";

export default function App(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Corpo/>}></Route>
                <Route path="/sessoes" element={<Sessoes/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}