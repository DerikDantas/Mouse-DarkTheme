import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;

  .nav-row{
    height: 100%;
    align-items: center;
    padding: 20px;

  }

  .linha-links{
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    
    a{
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      font-weight: 500;
      font-size: 16px
    }
    a:hover{
      font-weight: bold;
      text-decoration: underline
    }
  }

  h1{
    margin: 0;
    font-weight: 700;
    font-size: 32px;
  }

  button{
    background: none;
    border: 1px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 10px;
    padding: 5px 15px;
  }
`;
