import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled.div`
    min-height: 285px;
    width: 218px;
    display: flex;
    flex-direction: column;

    border-radius: 8px;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`

export const ProductContents = styled.div`
    min-height: 320px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0px 14px;
    border-radius: 8px 8px 0px 0px;
    padding-bottom: 8px;
`

export const NameProduct = styled.div`
    display: flex;
    align-items: top;
    justify-content: space-between;
    
    span {
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: #2C2C2C;
    }

    div {
        margin-left: 8px;

        height: fit-content;
        padding: 4px 7px;
        font-size: 15px;
        font-weight: 700;
        line-height: 15px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #373737;
        border-radius: 5px;

        color: white;
    }
`

export const ProductImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 14px;

    img {
        width: 80%;
    }
`

export const CardButton = styled(motion.button)<{ $primary?: boolean; }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    border: none;
    padding: 7px;
    background-color: ${props => props.$primary ? "#02d406" : "#0F52BA"};
    border-radius: 0px 0px 8px 8px;
    
    cursor: pointer;
    font-size: ${props => props.$primary ? "12px" : "14px"};
    font-weight: 600;
    line-height: 18px;
    color: white;
    text-transform: uppercase;

    transition: background 0.2s;

    cursor: ${props => props.$primary ? "not-allowed" : "pointer"};

    img {
        color: white;
    }
`

export const Description = styled.div`
    font-size: 12px;
    line-height: 12px;
    font-weight: 300;
    color: #2C2C2C;
`