import React, { useCallback, useState } from "react";
import { Checkbox, Select, TextField, FormControlLabel } from "@material-ui/core";
import { Input, Label, Button, ModalFooter, ModalBody, Modal } from "reactstrap";
import { StickyTable, Rows, Cell } from 'react-sticky-table';
import MaterialIcon from '@material/react-material-icon';
import consultaproduto from '../ConsultaProduto/consultaproduto.css'
import $ from "jquery";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import api from "../../api";

const Consulta = (props) => {

    const [modal, setModal] = React.useState(false);
    const [value, setValue] = React.useState(false);

    function toggle(value) {
        setModal(!modal);
        setValue(`${value}`);
    }


    $('#opt').change(function () {
        var valor = $('#opt').val();
        $('#pai').children('div').hide();
        $('#pai').children(valor).show();
    });

    $('#opt1').change(function () {
        var valor = $('#opt1').val();
        $('#pai1').children('div').hide();
        $('#pai1').children(valor).show();
    });

    /*const [tabela, setTabela] = useState([]);

    const Tabelaconsulta = useCallback (() => {
        console.log(Tabela);
        api.get().then(response =>{
            setTabela(response.data)
        })
    })*/

    return (
        <div>
            <MenuSuperior />
            <div className="TituloConsulta">
                <h3>Fornecedores - Consulta de Produtos</h3>
                <hr></hr>
            </div>

            <div className="body-consulta-prod">
                <div className="Corpo-consulta-produto">
                    <div className="campo-esquerdo">

                        <div className="campo-linha1">
                            <div className="campo-checkbox">
                                <div>
                                    <FormControlLabel
                                    
                                        value="1"
                                        control={<Checkbox color="primary" />}
                                        label="Revista"
                                        labelPlacement="end"
                                    />

                                </div>
                                <div>
                                    <FormControlLabel
                                        
                                        value="1"
                                        control={<Checkbox color="primary" />}
                                        label="Coleções"
                                        labelPlacement="end"
                                    />
                                </div>
                            </div>

                            <h6 className="titulo-revista">Revista</h6>
                        
                            <div className="campo-linha2" >
                
                                <Select className='campo-selecione' >
                                    <option selected disabled value="">Selecione Opção</option>
                                </Select>

                                <div>
                                    <TextField id='campo-desc-basica' label='Desc. Básica' ></TextField>
                                    <Button id="botao-buscar" onClick={toggle}><i class="material-icons center">search</i></Button>
                                </div>

                                <Modal
                                  
                                    isOpen={modal}
                                    toggle={toggle}
                                >

                                    <ModalBody>
                                        <p className="titulo-modal">Lista de Descrição Básica</p>
                                        <hr></hr>

                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Bata</Button>
                                            <Button color="primary">Bermuda</Button>
                                            <Button color="primary">Bijuteria</Button>
                                            <Button color="primary">Blazer</Button>
                                            <Button color="primary">Blusa</Button>
                                            <Button color="primary">Body</Button>
                                        </div>

                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Bolero</Button>
                                            <Button color="primary">Bolsa</Button>
                                            <Button color="primary">Brinde</Button>
                                            <Button color="primary">Brinquedo</Button>
                                            <Button color="primary">Cachecol</Button>
                                            <Button color="primary">Calça</Button>
                                        </div>

                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Calçado</Button>
                                            <Button color="primary">Camisa</Button>
                                            <Button color="primary">Camiseta</Button>
                                            <Button color="primary">Camisete</Button>
                                            <Button color="primary">Cardigam</Button>
                                           
                                        </div>

                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Casaco</Button>
                                            <Button color="primary">Casaquinho</Button>
                                            <Button color="primary">Chapéu</Button>
                                            <Button color="primary">Chemisier</Button>
                                            <Button color="primary">Chemisiers</Button>
                                        </div>

                                        
                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Cigarrete</Button>
                                            <Button color="primary">Cinto</Button>
                                            <Button color="primary">Colete</Button>
                                            <Button color="primary">Conjunto</Button>
                                            <Button color="primary">Conjunto 2</Button>
                                        </div>

                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Cropped</Button>
                                            <Button color="primary">Cropped 2</Button>
                                            <Button color="primary">Cueca</Button>
                                            <Button color="primary">Jaqueta</Button>
                                            <Button color="primary">Jardineira</Button>
                                        </div>

                                         
                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Kaftans</Button>
                                            <Button color="primary">Legging</Button>
                                            <Button color="primary">Lenços/Charpes</Button>
                                            <Button color="primary">Macacão</Button>
                                            
                                        </div>

                                           
                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Macaquinho</Button>
                                            <Button color="primary">Maiô/Biquini</Button>
                                            <Button color="primary">Maxis</Button>
                                            <Button color="primary">Meia</Button>
                                            <Button color="primary">Pareo</Button>
                                        </div>

                                           
                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Peça intima</Button>
                                            <Button color="primary">Pijama/Camisola</Button>
                                            <Button color="primary">Quimono</Button>
                                            <Button color="primary">Regata</Button>                                           
                                        </div>

                                              
                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Saia</Button>
                                            <Button color="primary">Saída</Button>
                                            <Button color="primary">Semijoia</Button>
                                            <Button color="primary">Short</Button>  
                                            <Button color="primary">Slips</Button>  
                                            <Button color="primary">Top</Button>   
                                        </div>

                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">T-shirt</Button>
                                            <Button color="primary">T-shirts 2</Button>
                                            <Button color="primary">Tunica</Button>
                                            <Button color="primary">Vestido</Button>  
                                            <Button color="primary">Vestido curto</Button>  
                                        </div>

                                        <div className="linha-modal-descbasica">
                                            <Button color="primary">Vestido Longo</Button>  
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>

                                    </ModalFooter>
                                </Modal>
                            </div>
                        </div>

                        <div className="campo-linha3">

                            <TextField className='campo-nome-produto' label='Nome Produto'></TextField>

                            <TextField className='campo-nome-reffornecedor' label='Ref. Fornecedor'></TextField>

                            <Button color='primary' /* onClick={Tabelaconsulta} */ className='botao-consulta'>Filtrar<i class="material-icons right">search</i></Button>

                        </div>
                    </div>

                </div>

                <div className="tabela">
                    <StickyTable>
                        <Rows>
                            <Cell style={{ background: '#007bff', color: 'white' }}>N°</Cell>
                            <Cell style={{ background: '#007bff', color: 'white' }}>Descrição</Cell>
                            <Cell style={{ background: '#007bff', color: 'white' }}>Preço</Cell>
                            <Cell style={{ background: '#007bff', color: 'white' }}>Ref. Fornecedor</Cell>
                            <Cell style={{ background: '#007bff', color: 'white' }}>NCM</Cell>
                            <Cell style={{ background: '#007bff', color: 'white' }}>Grade Num</Cell>
                            <Cell style={{ background: '#007bff', color: 'white' }}>Resumo</Cell>
                            <Cell style={{ background: '#007bff', color: 'white' }}>Imprimir</Cell>
                        </Rows>

                        <Rows>
                            <Cell></Cell>
                            <Cell></Cell>
                            <Cell></Cell>
                            <Cell></Cell>
                            <Cell></Cell>
                            <Cell></Cell>
                            <Cell><Button id="tabela-botao-colresumo"><i class="material-icons">search</i></Button></Cell>
                            <Cell><Button id="tabela-botao-print"><i class="material-icons">print</i></Button></Cell>
                        </Rows>
                    </StickyTable>
                </div>
            </div>
        </div>
    )
}
export default Consulta;
