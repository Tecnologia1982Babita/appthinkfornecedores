import React from "react";
import { TextField, Button } from "@material-ui/core";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import { Input, Card } from "reactstrap";

import cadastro_produto from '../CadastroProduto/cadastro_produto.css';

const Cadastro = (props) => {



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
                    <TextField label='Desc. Básica'><i class="material-icons-outlined">search</i></TextField>
                    <TextField label='Código Fornecedor'></TextField>
                    <TextField label='Ref. Fornecedor'></TextField>
                    <TextField label='NCM'></TextField>
                </div>

                <div className="Linha3">
                    <Button className="botaodetalhe" id='estilo1'>+Detalhes</Button>
                        <Card >
                            <div>
                                <Input type="checkbox">Abertura em Zíper</Input>
                                <Input type="checkbox">Acessório</Input>
                                <Input type="checkbox">Amarração</Input>
                            </div>

                            <div>
                                <Input type="checkbox">Babados</Input>
                                <Input type="checkbox">Bolso Frontral (camisa)</Input>
                                <Input type="checkbox">Bolsos Falsos Frontais</Input>
                            </div>

                            <div>
                                <Input type="checkbox">Bolsos Falsos Traseiros</Input>
                                <Input type="checkbox">Bolsos Frontrais (calça)</Input>
                                <Input type="checkbox">Bolsos Transeiros (calça)</Input>
                            </div>

                            <div>
                                <Input type="checkbox">Bordado</Input>
                                <Input type="checkbox">Carcela</Input>
                                <Input type="checkbox">Cinto</Input>
                            </div>

                            <div>
                                <Input type="checkbox">Zíper na Barra</Input>
                                <Input type="checkbox">Cós Alto</Input>
                                <Input type="checkbox">Cós Baixo</Input>
                            </div>

                            <div>
                                <Input type="checkbox">Decote</Input>
                                <Input type="checkbox">Decote Costas</Input>
                                <Input type="checkbox">Detalhe em Zíper</Input>
                            </div>

                            <div>
                                <Input type="checkbox">Elastano</Input>
                                <Input type="checkbox">Estampa</Input>
                                <Input type="checkbox">Estampa Exclusiva</Input>
                            </div>

                            <div>
                                <Input type="checkbox">Fechamento em Zíper</Input>
                                <Input type="checkbox">Guipir</Input>
                                <Input type="checkbox">Ilhós</Input>
                            </div>

                            <div>
                                <Input type="checkbox">Martingale</Input>
                                <Input type="checkbox">Passantes (calça)</Input>
                                <Input type="checkbox">Poá</Input>
                            </div>

                            <div>
                                <Input type="checkbox">Recortes</Input>
                                <Input type="checkbox">Renda</Input>
                                <Input type="checkbox">Rolotê</Input>
                            </div>

                            <div>
                                <Input type="checkbox">Strass</Input>
                                <Input type="checkbox">Tiras</Input>
                                <Input type="checkbox">Tule</Input>
                            </div>

                            <Button className="botaosalvardetalhe" id='estilo1'>Salvar Detalhes</Button>

                        </Card>
                    <Button className="botaotamanhos" id='estilo1'>+Tamanhos</Button>
                    <Card>
                        <h6>Qual Tipo De Grade?</h6>
                        <hr></hr>
                        <div>
                            <Button id='estilo1'>Númerica (38,40, ...)</Button>
                            <Button id='estilo1'>Não Númerica (P,M, ...)</Button>
                        </div>

                        <Button id='estilo1'>Salvar Tamanhos</Button>
                    </Card>

                    <TextField label='Nome da Cor'></TextField>
                    <Button id='estilo1'>+</Button>
                </div>

                <TextField id="campo1linha4" label="Escreva suas observações: "></TextField>
                <Button className="botaogeraritens" id='estilo' variant="contained">Gerar Itens<i class='material-icons right'>send</i></Button>
            </div>
        </div>
    )

}
export default Cadastro;