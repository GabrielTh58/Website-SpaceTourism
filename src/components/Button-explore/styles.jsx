import styled from "styled-components"

const Button = styled.button`
    background-color: #fff;
    color: #0B0D17;
    border: none;
    width: 270px;
    height: 270px;
    border-radius: 100%;
    font-size: 32px;
    text-transform: uppercase;
    font-family: 'Bellefair', sans-serif;
    z-index: 1;

    &:hover{
        cursor: pointer;
    }

    @media (max-width: 520px){
        width: 150px;
        height: 150px;
        font-size: 20px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    width: 450px;
    height: 450px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100%;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: rgba(255,255,255,0.2);        
    }

    @media (max-width: 1000px){
        width: 300px;
        height: 300px;
        margin-top: 20px;
    }

    @media (max-width: 520px){
        width: 200px;
        height: 200px;
        margin-top: 0;
    }
`

export { Button, ButtonContainer }