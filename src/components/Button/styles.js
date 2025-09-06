import styled from "styled-components";

export const Button = styled.button`

   border: ${(props) => (props.theme === 'primary' ? 'none' : '1px solid #fff')};
   background: 
  ${(props) => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent; font-weight: bold;'};   
    border-radius: 30px;
    font-size: 18px;
    max-width: bold;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover { 
        ${props => props.theme === 'primary' ? `
        opacity: 0.8;
        transform: scale(1.1);
    ` : `
        background: #fff;
        color: #ff6378;        
        font-weight: bold;
        border: 2px solid #ff6378;
    `}
    }

    &:active {
        transform: scale(0.9);
        opacity: 0.6;
    }
`