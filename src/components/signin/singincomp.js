import styled from 'styled-components';
import Singin from '../../images/singup.jpeg'

export const SignCard =styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width:100%;
    margin-bottom:30px;
    background-image:url(${Singin});
`;

export const Card = styled.div`
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.9);
    padding: 20px 20px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    background-color:white;
    margin-bottom:30px;
    margin-top:30px;
`;

export const SignHead =styled.div`
    margin-bottom:30px;
`;

export const SignName =styled.div`
    margin-bottom:10px;
`;

export const SignLogin =styled.div`
    margin-top:2rem;
    border-radius:50px;
    background: lightgreen;
    white-space: nowrap;
    padding: 16px 64px;
    color:black;
    font-size:16px;
    outline:none;
    cursor:pointer;
    text-decoration:none;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: ease-out 0.5s;
    font-weight: bold;

    &:hover{
        box-shadow: inset 0rem 10rem 10rem 0rem black;
        color: white;
    }
`;