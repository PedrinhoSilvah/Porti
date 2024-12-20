import styled from "styled-components";


export const Link = styled.a`
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6c5ce7;
    border: 1px solid #6c5ce7;
    color: #fff;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        background-color: transparent;
        color: #2f3640;
        border: 1px solid #6c5ce7;
        
    }

    @media (max-width: 760px) {
        font-size: 13px;
        width: 120px;
        
    }
`