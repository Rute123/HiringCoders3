import styled from 'styled-components';

export const HomeContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-content: center;
 justify-content: center;
 height: 80vh;
`;

export const Content = styled.div`
 width: 100px;
 margin: 0 auto;
 max-width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 10%;
`;

export const Input = styled.input`
 border: 1px solid #ddd;
 heigth: 2rem;
 border-radius: 1rem 0 0 1rem;
 color: ${props => props.inputColor || "#d36b00"};
  background: papayawhip;
  border: none;
  padding: 0.8rem;

 &:focus,
 &:active {
     outline: none;
     box-shadow: none;
    }
`;

export const Button = styled.button`
 heigth: 2rem;
 padding: 0.8rem;
 background: #f5a364;
 color: #fff;
 border-radius: 0 1rem 1rem 0;
 border: none;

 &:focus,
 &:active {
     outline: none;
     box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
 display: block;
 font-size: 0.65rem;
 color: red;
 font-weight: 600;
 margin: 0;
 position: absolute;
 top: 50%;
 left: 50%;
 margin-right: -50%;
 transform: translate(-50%, -50%)
`;




