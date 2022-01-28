import React, { useState } from "react";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import { Label, Input, Button } from "reactstrap";
import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import consulta_romaneio from "../ConsultaRomaneio/consulta_romaneio.css";
import { MenuItem, Select, TextField } from "@material-ui/core";

const ConsultaRomaneio = (props) => {



    function hoje() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var formatado = dd + '/' + mm + '/' + yyyy;
        var bd = yyyy + '' + mm + '' + dd;
        var valores = { 'formatado': formatado, 'bd': bd };
        return valores;
    }


    const [selectDateIni, setSelectDateIni] = useState(null);
    const [isActive, setIsActive] = useState(false)
    function onChange(ev) {
        const {
            name, value
        } = ev.target;
        setSelectDateIni(value); console.log(value)
        if (ev !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const datainicial = moment(selectDateIni).format("YYYYMMDD")

    return (
        <div>
            <MenuSuperior />
            <div className="CorpoConsultaR">
                <div>
                    <h3>Fornecedor - Consultar Romaneio</h3>
                    <hr></hr>
                </div>

                <div>
                    <h6>Filtrar Por Data:</h6>

                    <div className="SelecaoConsRomaneio">
                        <Input type='checkbox'></Input>
                        <Label>Envio</Label>
                        <div className="estiloconsr">
                            <Input type='checkbox'></Input>
                            <Label>Recebimento</Label>
                        </div>
                    </div>


                    <div className="dataromaneio">
                        
                        <TextField
                            label='De:'
                            id='datalancamento'
                            onChange={onChange}
                            locale={ptBR}
                            dateFormat="P"
                            withPortal
                            type='date'
                        />
                        <div className="dataromaneio1">
                            <TextField
                                label='Até'
                                id='datalancamento'
                                onChange={onChange}
                                locale={ptBR}
                                dateFormat="P"
                                withPortal
                                type='date'
                            />
                        </div>
                    </div>

                    <div>
                        <h6>Status</h6>
                        <Select id='selecionestatus'>
                            <MenuItem  selected disabled value="">Selecione Opção</MenuItem>
                            <MenuItem>1 - Cadastro Fornecedor</MenuItem>
                            <MenuItem>2 - Tramite</MenuItem>
                            <MenuItem>3 - Cadastro Logistica</MenuItem>
                            <MenuItem>4 - Gerada Via Cega</MenuItem>
                            <MenuItem>5 - Em Validação Pelo Coordenador</MenuItem>
                            <MenuItem>6 - Inspenção De Qualidade</MenuItem>
                            <MenuItem>7 - Gerando Etiquetas</MenuItem>
                            <MenuItem>8 - Etiquetando</MenuItem>
                            <MenuItem>9 - Aguardando Gerar Entrada</MenuItem>
                            <MenuItem>10 - Entrada Gerada</MenuItem>
                            <MenuItem>11 - Todos</MenuItem>
                        </Select>
                    </div>

                    
                    <div className="SelecaoConsRomaneio">
                        <Input type='checkbox'></Input>
                        <Label>Revista</Label>
                        <div className="estiloconsr">
                            <Input type='checkbox'></Input>
                            <Label>Coleção</Label>
                        </div>
                    </div>

                    <Button>Filtrar</Button>
                </div>
            </div>
        </div>
    )
}

export default ConsultaRomaneio;