import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    background-color: #FFFFFF;
    border-radius: 8px;

    min-width: 150px;

    padding: 5px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
   
    position: relative;

    div {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        line-height: 17px;
        font-weight: 400;
    }
    
    div p {
        max-width: 70px;
    }

    div img {
        max-width: 60px;
        @media (max-width: 375px) {
            display: none;
        }
    }

    p {
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
    }

    .price {
        min-width: 100px;
    }
`

export const ButtonClose = styled.button`
    position: absolute;
    top: 0%;
    left: 100%;
    width: 18px;
    height: 18px;
    border: none;

    transform: translate(-60%, -40%);

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    background-color: black;

    color: white;
    text-transform: uppercase;

    transition: background 0.2s;
    cursor: pointer;

    &:hover {
        background-color: #3d3d3d;
    }
`

export const Quantity = styled.div`
    border: 1px solid #BFBFBF;
    border-radius: 4px;
    
    display: flex;
    justify-content: space-between;
    
    button {
        border: none;
        padding: 6px 8px;
        cursor: pointer;
        transition: background 0.2s;
        
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 16px;

        @media (max-width: 375px) {
            padding: 2px 8px;
        }

        @media (max-width: 414px) {
            display: flex;
            flex-direction: column;
        }
    }

    .one {
        border-radius: 4px 0px 0px 4px;
    }

    .two {
        border-radius: 0px 4px 4px 0px;
    }

    button:hover {
        background-color: #BFBFBF;
    }

    p {
        text-align: center;
        vertical-align: middle;
        width: fit-content;
        padding: 4px;
    }
`