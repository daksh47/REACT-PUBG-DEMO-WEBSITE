import styled from 'styled-components';
import background from '../../images/bg.jpeg';

export const PlayContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    background-image: url(${background});
`;

export const PlayHead = styled.h1`
    text-align:center;
    font-size:3rem;
    margin-top:3rem;
    color:white;
`;

export const PlayBody = styled.body`
    margin-top:3rem;
    text-align:center;
    display: flex;
    font-weight:bold;
    justify-content:space-around;
    margin-bottom:5rem;

    @media screen and (max-width:800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`;

export const PlayStep1 = styled.div`
    text-align:center;
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin-bottom:5rem;
    width:15rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    background-color: white;
    cursor:pointer;
    padding: 20px 0px;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.9);
    }
`;

export const PlayStep2 = styled.div`
    text-align:center;
    display: flex;
    flex-direction:column;
    justify-content: center;margin-bottom:5rem;
    width:15rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    padding: 20px 0px;
    background-color: white;
    cursor:pointer;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.9);
    }
`;

export const PlayStep3 = styled.div`
    text-align:center;
    display: flex;
    flex-direction:column;margin-bottom:5rem;
    justify-content: center;
    width:15rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    padding: 20px 0px;
    background-color: white;
    cursor:pointer;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.9);
    }
`;

export const Step1Image = styled.img`
width:14rem;
height:14rem;
`;

export const Step2Image = styled.img`
width:14rem;
`;

export const Step3Image = styled.img`
width:14rem;
`;

export const Step1Text = styled.p`
font-size:1.4rem;
`;

export const Step2Text = styled.p`
font-size:1.4rem;
`;

export const Step3Text = styled.p`
font-size:1.4rem;
`;
