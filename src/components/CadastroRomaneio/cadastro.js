import React from "react";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import { Button, Input, Label } from "reactstrap";
import { Select, TextField } from "@material-ui/core";
import { StickyTable, Rows, Cell } from 'react-sticky-table';
import cadastro_romaneio from '../CadastroRomaneio/cadastro_romaneio.css';

const CadastroRomaneio = (props) => {
    return (
        <div>
            <MenuSuperior />
            <div className="CorpoRomaneio">
                <div>
                    <h3>Fornecedores - Cadastro Romaneio</h3>
                    <hr></hr>
                </div>

                <div className="SelecaoRomaneio">
                    <Input type='checkbox'></Input>
                    <Label>Revista</Label>
                    <div>
                        <Input type='checkbox'></Input>
                        <Label>Coleção</Label>
                    </div>
                </div>

                {/* Revista */}
                <div className="LinhaRomaneio">
                    <h6>Revista</h6>
                    <div className="SelecaoRomaneio1">
                        <Select id='campromaneio'>
                            <option selected disabled value="">Selecione Opção</option>
                        </Select>
                    </div>
                </div>


                <div className="SelecaoRomaneio2">
                    <Input type='checkbox'></Input>
                    <Label>Nome Produto</Label>
                    <div>
                        <Input type='checkbox'></Input>
                        <Label>Referência Fornecedor</Label>
                    </div>


                </div>

                <Button className="BotaoRomaneio" id='estiloBotaoR'>Filtrar</Button>


                {/*Coleções */}
                <div>

                    <div>
                        <TextField label='Código Fornecedor:'></TextField>
                    </div>

                    <div className="SelecaoRomaneio2">
                        <Input type='checkbox'></Input>
                        <Label>Nome Produto</Label>
                        <div>
                            <Input type='checkbox'></Input>
                            <Label>Referência Fornecedor</Label>
                        </div>


                    </div>
                </div>


                {/*Tabela */}
                <div>
                    <p>Itens:</p>
                    <StickyTable>
                        <Rows>
                            <Cell>Cod. For</Cell>
                            <Cell>Referência</Cell>
                            <Cell>Item</Cell>
                            <Cell>Descrição</Cell>
                            <Cell>Referência For</Cell>
                            <Cell>Tamanho</Cell>
                            <Cell>Preço</Cell>
                            <Cell>Cor</Cell>
                            <Cell>Qtd. Estoque</Cell>
                        </Rows>


                        <Rows>
                            <Cell></Cell>
                        </Rows>
                    </StickyTable>

                    <Button>Inserir</Button>
                </div>

                <div>
                    <p>Previsão Romaneio:</p>
                    <StickyTable>
                        <Rows>
                            <Cell>Revista</Cell>
                            <Cell>Referência</Cell>
                            <Cell>Item</Cell>
                            <Cell>Descrição</Cell>
                            <Cell>Referência For</Cell>
                            <Cell>Tamanho</Cell>
                            <Cell>Preço</Cell>
                            <Cell>Cor</Cell>
                            <Cell>Qtd. Estoque</Cell>
                            <Cell>Excluir</Cell>
                        </Rows>


                        <Rows>
                            <Cell></Cell>
                        </Rows>
                    </StickyTable>

                    <Button>Enviar Log</Button>
                </div>

            </div>
        </div>
    )
}
export default CadastroRomaneio;