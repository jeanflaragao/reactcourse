import React from "react";
import "./App.css";

import First from "./components/basics/First";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Desafio1 from "./components/basics/Desafio1";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAluno from "./components/repeticao/ListaAluno";
import ListaProduto from "./components/repeticao/ListaProduto";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/Megasena/Mega";

export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#13 - Mega " color="#B9006E">
        <Mega qtde={8}></Mega>
      </Card>

      <Card titulo="#12 - Contador " color="#424242">
        <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo="#11 - Componente Controlado " color="#E45F56">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação Indireta " color="#8BAD39">
        <IndiretaPai />
      </Card>

      <Card titulo="#09 - Comunicação Direta " color="#59323C">
        <DiretaPai />
      </Card>
      <Card titulo="#08 - Renderização Condicional " color="#982395">
        <ParOuImpar numero={20} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{ email: "Fernando" }} />
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
        <ListaProduto />
      </Card>

      <Card titulo="#06 - Repetição" color="#CCCCFF">
        <ListaAluno />
      </Card>

      <Card titulo="#05 - Componente Filho" color="#6495ED">
        <Familia sobrenome="Aragão">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Jean" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio aleatório" color="#080">
        <Desafio1 min="1" max="10" />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 - ComParametro">
        <ComParametro titulo="Situação do aluno" aluno="Pedro" nota="9.3" />
      </Card>
      <Card titulo="#01 - Primeiro componente">
        <First />
      </Card>
    </div>
  </div>
);
