import React, { useState } from 'react';
import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import { TextField } from '@material-ui/core';
import consultaentrada from '../ConsultaEntrada/consultaentrada.css';
import MenuSuperior from '../menuSuperior/MenuSuperior';
import { Button } from 'reactstrap';
import { StickyTable, Rows, Cell } from 'react-sticky-table';

const ConsultaEntrada = (props) => {

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

            <div className='CorpoRetro'>
                <div className='TituloRetro'>
                    <h3>Entrada - Retrologistica</h3>
                    <hr></hr>
                </div>

                <div className='CorpoRetro2'>
                    <div className="dataretro">

                        <TextField
                            label='De:'
                            id='datalancamento'
                            onChange={onChange}
                            locale={ptBR}
                            dateFormat="P"
                            withPortal
                            type='date'
                        />
                        <div className="datareto1">
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

                    <div className='TabelaRetro'>
                        <StickyTable>
                            <Rows>
                                <Cell>#</Cell>
                                <Cell>Loja</Cell>
                                <Cell>Data</Cell>
                                <Cell>Documento Loja</Cell>
                                <Cell>Itens</Cell>
                                <Cell>Valor</Cell>
                            </Rows>


                            <Rows>
                                <Cell></Cell>
                            </Rows>
                        </StickyTable>
                    </div>


                </div>

                <div>
                    <TextField label='Cod. Fornecedor'></TextField>
                    <Button>Buscar</Button>
                </div>

            </div>

        </div>
    )
}
export default ConsultaEntrada;