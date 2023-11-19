import styled, { keyframes } from "styled-components";

import * as Dialog from '@radix-ui/react-dialog'

const contentShow = keyframes`
    from {
        opacity: 0;
        transform: translate(100%, 0%) scale(1);
    }
    to {
        opacity: 1;
        transform: translate(0%, 0%) scale(1);
    }
`

export const DialogContent = styled(Dialog.Content)`
    background-color: #0F52BA;
    position: fixed;
    top: 30%;
    left: 100%;
    transform: translate(-100%, -30%);
    
    width: 485px;
    height: 100vh;

    @media (max-width: 768px) {
        width: 50vh;
        height: 80vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        border-radius: 8px;
    }

    @media (max-width: 414px) {
        width: 100vw;
        height: 60vh;
    }

    animation: ${contentShow} 100ms ease-in;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

    display: flex;
    flex-direction: column;
`

export const DialogOverlay = styled(Dialog.Overlay)`
    background-color: rgba(150, 153, 150, 0.3);
    position: fixed;
    inset: 0;
    animation: overlayShow 500ms cubic-bezier(0.16, 1, 0.3, 1);
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

export const Content = styled.div`
    padding: 40px 40px;
    height: 100%;

    @media (max-width: 375px) {
        padding: 20px ;
    }
`

export const FinalizarCompra = styled.button`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    color: white;
    padding: 30px;

    font-size: 24px;
    font-weight: 700;
    line-height: 15px;

    @media (max-width: 768px) {
        border-radius: 0px 0px 8px 8px;
    }

    border: none;

    transition: background 0.2s;

    cursor: pointer;

    &:hover {
        background-color: #3d3d3d;
    }
`

export const DialogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`

export const DialogClose = styled(Dialog.Close)`
    width: 32px;
    height: 32px;

    border-radius: 100%;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 400;
    line-height: 15px;

    background-color: black;
    color: white;
    transition: background 0.2s;

    cursor: pointer;

    &:hover {
        background-color: #3d3d3d;
    }
`

export const DialogTitle = styled(Dialog.Title)`
    color: white;
    font-size: 24px;
`

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    color: white;
    padding: 30px;

    font-size: 24px;
    font-weight: 700;
    line-height: 15px;
`

export const ProductsInCart = styled.div`
    padding: 10px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;

    .emptyCart {
        color: #FFFFFF;
        font-weight: 500;
    }

    @media (max-width: 375px) {
        max-height: 250px;
    }

    @media (max-width: 414px) {
        max-height: 300px;
    }
`