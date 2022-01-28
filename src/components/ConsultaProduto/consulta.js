import { Select, TextField } from "@material-ui/core";
import React from "react";
import { Input, Label, Button } from "reactstrap";
import MaterialIcon from '@material/react-material-icon';
import consultaproduto from '../ConsultaProduto/consultaproduto.css'

import MenuSuperior from "../menuSuperior/MenuSuperior";

const Consulta = (props) => {
    return (
        <div >
            <MenuSuperior />
            <div className="CorpoConsulta">
                <div className="TituloConsulta">
                    <h3>Fornecedores - Consulta de Produtos</h3>
                    <hr></hr>
                </div>

                <div className="selecao">
                    <Input id='estilocheckbox' type='checkbox'></Input>
                    <Label>Revista</Label>
                    <div>
                        <Input id='estilocheckbox' type='checkbox'></Input>
                        <Label>Coleção</Label>
                    </div>
                </div>
                
                {/*Revista*/}
                <div className="Line1">
                    <h6>Revista</h6>
                    <div className="camposelecao">

                        <Select id='estiloselecao' >
                            <option selected disabled value="">Selecione Opção</option>                           
                        </Select>
                        <TextField label='Desc. Básica' ></TextField>
                    </div>
                   
                </div>

                <div className="Line2">
                    <div>
                        <TextField id='estiloselecao2' label='Nome Produto'></TextField>
                    </div>
                    <div>
                        <TextField id='estiloselecao2' label='Ref. Fornecedor'></TextField>
                    </div>
                </div>

                <Button id='botaoconsulta'>Filtrar<i class="material-icons-outlined">search</i></Button>
            </div>
        </div>
    )
}
export default Consulta;
