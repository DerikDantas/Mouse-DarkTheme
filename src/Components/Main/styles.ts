import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  place-items: center;

  .titulo-fundo{
      position: absolute;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      font-size: 180px;
      color: #E78A00;
      font-weight: 500;
      opacity: ${({ theme }) => theme.textOpacity};
  }

  img{
      position: relative;
      z-index: 99;
  }

  .btn-buy{
      z-index: 99;
      color: #111;
      text-decoration: none;
      background-color: #E78A00;
      padding: 10px 25px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      margin-top: 10px;

      &:hover{
          text-decoration: underline;
          border: 1px solid ${({ theme }) => theme.toggleBorder};
      }
  }

  .barra-1{
      height: 13px;
      width: 246px;
      border-radius: 25px;
      background: ${({ theme }) => theme.text};
      position: absolute;
      left: -10px;
      top: 250px;
  }
  .barra-2{
      height: 13px;
      width: 160px;
      border-radius: 25px;
      background: #E78A00;
      position: absolute;
      left: -10px;
      top: 280px;
  }


  .circles{
      position: absolute;
      bottom: -200px;
      right: 200px;
  }
  .circle-1{
    width: 400px;
    height: 400px;
    background: #222222;
    border-radius: 200px;
    position: absolute;
    bottom: 0;
    z-index: 3
  }
  .circle-2{
    width: 500px;
    height: 500px;
    background: #2A2A2A;
    border-radius: 250px;
    position: absolute;
    bottom: -50px;
    right: -450px;
    z-index: 2
  }
  .circle-3{
    width: 600px;
    height: 600px;
    background: #303030;
    border-radius: 300px;
    position: absolute;
    bottom: -95px;
    right: -500px;
    z-index: 1
  }
`;
