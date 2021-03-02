import React from 'react';

import { Container } from './styles';

function Spech() {
  return (
    <Container>
      <div className="container">
        <h1>TECH SPECH</h1>

        <table>
        <tr>
          <td><span><p>DPI</p></span></td>
          <td><p>400 - 2.000</p></td>
        </tr>
        <tr>
          <td><span><p>BOTÕES</p></span></td>
          <td><p>6 BOTÕES</p></td>
        </tr>
        <tr>
          <td><span><p>BATERIA</p></span></td>
          <td><p>1 pilha AA (inclusa)</p></td>
        </tr>
        <tr>
          <td><span><p>CONEXÃO</p></span></td>
          <td><p>USB 2.4 GHz</p></td>
        </tr>
        <tr>
          <td><span><p>PESO</p></span></td>
          <td><p>145,8 g</p></td>
        </tr>
      </table>
      </div>
      
    </Container>
  )
}

export default Spech;