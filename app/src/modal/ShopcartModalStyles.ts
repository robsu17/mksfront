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
    top: 0;
    left: 70%;
    
    width: 485px;
    height: 100vh;
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
    padding: 36px 50px;
    height: 100%;
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
    font-size: 27px;
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
`