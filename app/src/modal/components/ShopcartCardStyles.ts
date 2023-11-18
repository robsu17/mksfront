import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    background-color: #FFFFFF;
    border-radius: 8px;
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
    }

    p {
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
    }
`

export const ButtonClose = styled.button`
    position: absolute;
    top: 4%;
    left: 94%;
    width: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 100%;
    background-color: black;

    color: white;

    transition: background 0.2s;
    cursor: pointer;

    &:hover {
        background-color: #3d3d3d;
    }
`