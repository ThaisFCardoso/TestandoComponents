import React from "react";
import Saudacao from "./components/Saudacao";
import Card from "./components/Card";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <h1>Atividade de Web 2 - Componentes com Props</h1>

      <Saudacao nome="Thaís" />
      <Saudacao nome="João" />
      <Saudacao nome="Professora" />

      <Card titulo="Componente com Props">
        <p>Esse card recebeu conteúdo via <b>children</b>!</p>
      </Card>

      <Card titulo="Outro Card">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Card>
    </Container>
  );
}

export default App;
