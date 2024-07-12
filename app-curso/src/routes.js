import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Produto from './pages/Produto'

import PageErro from './pages/PageErro'

function RoutesApp() {

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Sobre' element={<Sobre/>} />
                <Route path='/Produto/:id' element={<Produto/>} />
                
                
                <Route path='*' element={<PageErro/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp

