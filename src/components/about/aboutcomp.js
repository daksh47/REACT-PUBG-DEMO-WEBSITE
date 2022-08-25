import styled from 'styled-components';
import bg1 from '../../images/bg1.jpg';

export const AboutPage=styled.div`
    color:white;
    background-image:url(${bg1});
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`;

export const AboutHead=styled.h1`
    padding : 10px 0px 0px 0px;
    text-align:center;
    font-weight:bold;
`;

export const AboutBody=styled.body`
    padding : 20px 20px 20px 20px; 
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    width:80%;
    background-color: black;
    color: white;
    margin-top:10px;
    margin-bottom:10px;

    @media screen and (max-width:700px){
        font-size:12px;
    }
`;