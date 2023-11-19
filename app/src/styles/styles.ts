import styled from "styled-components";

export const Navbar = styled.div`
    background-color: #0F52BA;
    min-height: 100px;
    width: 100%;
    padding: 0px 65px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: baseline;
        gap: 8px;
    }

    @media (max-width: 414px) {
        div {
            display: flex;
            flex-direction: column;
            gap: 0;
            align-items: center;
        }
    }

    div h1 {
        color: white;
        font-size: 40px;
        font-weight: 600;
    }

    div p {
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 300;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    width: 90px;
    height: 45px;
    background-color: white;
    border-radius: 8px;
    border: none;

    cursor: pointer;

    span {
        font-weight: 700;
        font-size: 18px;
    }
`

export const Footer = styled.footer`
    width: 100%;
    padding: 9px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 12px;
    line-height: 14.63px;

    background-color: #EEEEEE;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem 0rem;
   
    min-height: 768px;
`

export const Contents = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 100%;
    width: 1000px;
    gap: 24px;
`