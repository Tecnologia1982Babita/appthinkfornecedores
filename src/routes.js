import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/login/Login';
import VendaEstoque from './components/vendaEstoque/VendaEstoque';
import GoogleDrive from './components/googledrive/googledrive';
import checkpromo from "./components/checkpromo/checkpromo";
import consultaprodutos from "./components/consultaprodutos/consultaprodutos";
import movimentacao from "./components/movimentacao/movimentacao";
import Cadastro from "./components/CadastroProduto/cadastro";
import Consulta from "./components/ConsultaProduto/consulta";
import CadastroRomaneio from "./components/CadastroRomaneio/cadastro";
import ConsultaRomaneio from "./components/ConsultaRomaneio/consulta";
import ConsultaEntrada from "./components/ConsultaEntrada/consulta";
import ConsultaDevolucao from "./components/ConsultaDevolução/consulta";


export default function Routes (){
    return(
     <BrowserRouter>

         <Route path="login"  component={Login} /> 
         <Route path="/" exact component={VendaEstoque} /> 
         <Route path="/googledrive" component={GoogleDrive} /> 
         <Route path="/checkpromo" component={checkpromo}/>
         <Route path="/consultaprodutos" component={consultaprodutos}/>
         <Route path="/movimentacao" component={movimentacao}/>
         <Route path="/cadastro" component={Cadastro}/>
         <Route path='/consulta' component={Consulta}/>
         <Route path='/cadastroromaneio' component={CadastroRomaneio}/>
         <Route path="/consultaromaneio" component={ConsultaRomaneio}/>
         <Route path="/consultaentrada/" component={ConsultaEntrada}/>
         <Route path="/consultadevolucao" component={ConsultaDevolucao}/>
         
         
     </BrowserRouter>
    );
}