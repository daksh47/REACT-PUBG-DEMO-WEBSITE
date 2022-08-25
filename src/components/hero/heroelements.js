import styled from 'styled-components';

export const HeroContainer = styled.div`
    background:#0c0c0c;
    display:flex;
    jsutify-content:center;
    align-items:center;
    padding: 0 30 px;
    position:relative;
    z-index:1;
    height:32rem;
`;

export const HeroBg = styled.div`
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    height:100%;
    width:100%;
    overflow:hidden;
`;

export const VideoBg = styled.video`
    -o-object-fit:cover;
    object-fit:cover;
    background:#23a34;
    height:100%;
    width:100%;
    
`;

export const HeroContent= styled.div`
    z-index:3;
    position:absolute;
    padding:8px 24px; 
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`;

export const HeroTitle= styled.h1`
    color:#fff;
    font-size:2.6rem;
    text-align:center;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.6) 100%) repeat 0 0;
    font-weight: 700;

    @media screen and (max-width:768px){
        font-size:2.0rem;
    }
`;

export const HeroPara= styled.p`
    margin-top:1rem;
    color:#fff;
    font-size:1.6rem;
    text-align:center;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.6) 100%) repeat 0 0;
    font-weight: 300;

    @media screen and (max-width:768px){
        font-size:1.0rem;
    }
`;
export const HeroBtn= styled.div`
    margin-top:2rem;
    border-radius:50px;
    background: #f9e506;
    white-space: nowrap;
    padding: 16px 64px;
    color:black;
    font-size:16px;
    outline:none;
    cursor:pointer;
    text-decoration:none;
    box-shadow: inset 0 0 0 0 #f9e506;
    transition: ease-out 0.5s;
    font-weight: bold;

    &:hover{
        box-shadow: inset 0rem 10rem 10rem 0rem black;
        color: white;
    }

    @media screen and (max-width:370px){
        padding: 12px 30px;
    }
`;