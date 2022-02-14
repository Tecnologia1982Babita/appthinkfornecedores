import React, { Component, useState } from "react";
import { TextField, Button, Checkbox, Input} from "@material-ui/core";
import { styled } from "@material-ui/styles";

import MenuSuperior from "../menuSuperior/MenuSuperior";
import { Card, ModalBody, ModalFooter, Modal, Label } from "reactstrap";
import MaterialIcon from "@material/react-material-icon";


import "./cadastro_produto.css";


const Cadastro = (props) => {

    const Input = styled('input')({
        display: 'none',
    });


    //FUNÇÕES PARA ABRIR MODAL
    const [modal, setModal] = React.useState(false);
    const [value, setValue] = React.useState(false);

    function toggle(value) {
        setModal(!modal);
        setValue(`${value}`);
    }


    const [modal1, setModal1] = React.useState(false);
    const [value1, setValue1] = React.useState(false);


    function toggle1(value) {
        setModal1(!modal);
        setValue1(`${value}`);
    }




    const [modal2, setModal2] = React.useState(false);
    const [value2, setValue2] = React.useState(false);

    function toggle2(value) {
        setModal2(!modal);
        setValue2(`${value}`);
    }


    const [modal3, setModal3] = React.useState(false);
    const [value3, setValue3] = React.useState(false);

    function toggle3(value) {
        setModal3(!modal);
        setValue3(`${value}`);
    }




    return (


        <div >
            <MenuSuperior />
            <div className="Corpo">
                <div className="Titulo">
                    <h3>Fornecedores - Cadastro de Produtos</h3>
                    <hr id="LinhaTitulo"></hr>
                </div>


                <div className="Linha1">
                    <div>
                        <TextField label='Descrição do Produto'></TextField>
                    </div>
                    <div className="campo2">
                        <TextField label='Valor'></TextField>
                    </div>
                </div>

                <div className="Linha2">
                    <TextField id="campo-linha2" label='Desc. Básica'><i class="material-icons right">search</i></TextField>

                    <TextField id="campo-linha2" label='Código Fornecedor'></TextField>
                    <TextField id="campo-linha2" label='Ref. Fornecedor'></TextField>
                    <TextField id="campo-linha2" label='NCM'></TextField>
                </div>

                <div className="Linha3">
                    <Button className="botaodetalhe" id='estilo1' onClick={toggle}>+Detalhes</Button>
                    <div className='campo-detalhes'>
                        <TextField placeholder="0" > </TextField>
                    </div>

                    <Modal
                        className="estilo-modal-layout"
                        isOpen={modal}
                        toggle={toggle}
                    >
                        <ModalBody id='estilo-modal'>
                            <div>
                                <Checkbox ></Checkbox>
                                <Label>Abertura em Zíper</Label>
                                <Checkbox ></Checkbox>
                                <Label>Acessório</Label>
                                <Checkbox ></Checkbox>
                                <Label>Amarração</Label>
                            </div>
                            <div>

                                <Checkbox ></Checkbox>
                                <Label>Babados</Label>
                                <Checkbox ></Checkbox>
                                <Label>Bolso Frontral (camisa)</Label>


                            </div>
                            <Checkbox ></Checkbox>
                            <Label>Bolsos Falsos Frontais</Label>
                            <Checkbox ></Checkbox>
                            <Label>Bolsos Falsos Traseiros</Label>
                            <div>

                            </div>

                            <div>

                                <Checkbox ></Checkbox>
                                <Label>Bolsos Frontrais (calça)</Label>
                                <Checkbox ></Checkbox>
                                <Label>Bolsos Transeiros (calça)</Label>
                            </div>

                            <div>
                                <Checkbox ></Checkbox>
                                <Label>Bordado</Label>
                                <Checkbox ></Checkbox>
                                <Label>Carcela</Label>
                                <Checkbox ></Checkbox>
                                <Label>Cinto</Label>
                            </div>

                            <div>
                                <Checkbox ></Checkbox>
                                <Label>Zíper na Barra</Label>
                                <Checkbox ></Checkbox>
                                <Label>Cós Alto</Label>
                                <Checkbox ></Checkbox>
                                <Label>Cós Baixo</Label>
                            </div>

                            <div>
                                <Checkbox ></Checkbox>
                                <Label>Decote</Label>
                                <Checkbox ></Checkbox>
                                <Label>Decote Costas</Label>
                                <Checkbox ></Checkbox>
                                <Label>Detalhe em Zíper</Label>
                            </div>

                            <div>
                                <Checkbox ></Checkbox>
                                <Label>Elastano</Label>
                                <Checkbox >Estampa</Checkbox>
                                <Label>Estampa</Label>
                                <Checkbox ></Checkbox>
                                <Label>Estampa Exclusiva</Label>
                            </div>

                            <div>
                                <Checkbox ></Checkbox>
                                <Label>Fechamento em Zíper</Label>
                                <Checkbox ></Checkbox>
                                <Label>Guipir</Label>
                                <Checkbox ></Checkbox>
                                <Label>Ilhós</Label>
                            </div>

                            <div>
                                <Checkbox ></Checkbox>
                                <Label>Martingale</Label>
                                <Checkbox ></Checkbox>
                                <Label>Passantes (calça)</Label>
                                <Checkbox ></Checkbox>
                                <Label>Poá</Label>
                            </div>

                            <div>
                                <Checkbox ></Checkbox>
                                <Label>Recortes</Label>
                                <Checkbox ></Checkbox>
                                <Label>Renda</Label>
                                <Checkbox ></Checkbox>
                                <Label>Rolotê</Label>
                            </div>

                            <div>
                                <Checkbox ></Checkbox>
                                <Label>Strass</Label>
                                <Checkbox ></Checkbox>
                                <Label>Tiras</Label>
                                <Checkbox ></Checkbox>
                                <Label>Tule</Label>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button id='estilo-botao-salvard'>Salvar Detralhes<i class="material-icons right">done</i></Button>
                        </ModalFooter>
                    </Modal>

                    {/*<Button className="botaosalvardetalhe" id='estilo1'>Salvar Detalhes</Button>*/}

                    <div className="campo-tamanho">
                        <div className="campo-tamanho-text">
                            <Button className="botaotamanhos" id='estilo1' onClick={toggle1}>+Tamanhos</Button>
                            <div className='campo-tam'>
                                <TextField placeholder="0" > </TextField>
                            </div>
                        </div>
                    </div>
                    <Modal

                        isOpen={modal1}
                        toggle={toggle1}
                    >

                        <ModalBody>

                            <h6>Qual Tipo De Grade?</h6>
                            <hr></hr>
                            <div className="campos-tamanhos">
                                <Button id='estilo1' onClick={toggle2}>Númerica (38,40, ...)</Button>

                                <Modal

                                    isOpen={modal2}
                                    toggle={toggle2}>
                                    <ModalBody>
                                        <div>
                                            <Checkbox></Checkbox>
                                            <Label>Único</Label>
                                            <Checkbox></Checkbox>
                                            <Label>4</Label>
                                            <Checkbox></Checkbox>
                                            <Label>6</Label>
                                            <Checkbox></Checkbox>
                                            <Label>8</Label>
                                            <Checkbox></Checkbox>
                                            <Label>10</Label>
                                            <Checkbox></Checkbox>
                                            <Label>12</Label>
                                            <Checkbox></Checkbox>
                                            <Label>14</Label>

                                        </div>

                                        <div>
                                            <Checkbox></Checkbox>
                                            <Label>34</Label>
                                            <Checkbox></Checkbox>
                                            <Label>36</Label>
                                            <Checkbox></Checkbox>
                                            <Label>38</Label>
                                            <Checkbox></Checkbox>
                                            <Label>40</Label>
                                            <Checkbox></Checkbox>
                                            <Label>42</Label>
                                            <Checkbox></Checkbox>
                                            <Label>44</Label>
                                            <Checkbox></Checkbox>
                                            <Label>46</Label>
                                        </div>
                                        <div>
                                            <Checkbox></Checkbox>
                                            <Label>48</Label>
                                            <Checkbox></Checkbox>
                                            <Label>50</Label>
                                            <Checkbox></Checkbox>
                                            <Label>52</Label>
                                            <Checkbox></Checkbox>
                                            <Label>54</Label>
                                            <Checkbox></Checkbox>
                                            <Label>56</Label>
                                            <Checkbox></Checkbox>
                                            <Label>58</Label>
                                            <Checkbox></Checkbox>
                                            <Label>60</Label>
                                        </div>

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button id='estilo1'>Salvar Tamanhos<i class="material-icons right">done</i></Button>
                                    </ModalFooter>
                                </Modal>
                                <Button id='estilo1' onClick={toggle3}>Não Númerica (P,M, ...)</Button>
                                <Modal
                                    isOpen={modal3}
                                    toggle={toggle3}>
                                    <ModalBody>
                                        <div>
                                            <Checkbox></Checkbox>
                                            <Label>PP</Label>
                                            <Checkbox></Checkbox>
                                            <Label>P</Label>
                                            <Checkbox></Checkbox>
                                            <Label>M</Label>
                                            <Checkbox></Checkbox>
                                            <Label>G</Label>
                                            <Checkbox></Checkbox>
                                            <Label>GG</Label>
                                            <Checkbox></Checkbox>
                                            <Label>EG</Label>
                                            <Checkbox></Checkbox>
                                            <Label>XG</Label>
                                        </div>
                                        <div>
                                            <Checkbox></Checkbox>
                                            <Label>EXG</Label>
                                            <Checkbox></Checkbox>
                                            <Label>EXGG</Label>
                                            <Checkbox></Checkbox>
                                            <Label>XL</Label>
                                            <Checkbox></Checkbox>
                                            <Label>G1</Label>
                                            <Checkbox></Checkbox>
                                            <Label>G2</Label>
                                            <Checkbox></Checkbox>
                                            <Label>G3</Label>
                                            <Checkbox></Checkbox>
                                            <Label>G4</Label>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button id='estilo1'>Salvar Tamanhos</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>


                        </ModalBody>
                        <ModalFooter>
                            <Button id='estilo1'>Salvar Tamanhos<i class="material-icons right">done</i></Button>
                        </ModalFooter>
                    </Modal>
                    <div className="campo-nomecor">
                        <div className="campo-nomecor-text">
                            <div>
                                <TextField label='Nome da Cor' id='estilo-cor'></TextField>
                            </div>
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                    <Button variant="contained"  id='estilo1-mais' component="span"><i class="material-icons right">add</i></Button>
                                </label>                           
                        </div>
                    </div>
                </div>

                <TextField className="campo1linha4" label="Escreva suas observações: "></TextField>
                <Button className="botaogeraritens" id='estilo' variant="contained">Gerar Itens<i class='material-icons right'>send</i></Button>

            </div>
        </div>
    )

}
export default Cadastro;