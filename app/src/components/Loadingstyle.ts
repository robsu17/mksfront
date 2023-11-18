import styled from "styled-components";

import { motion } from 'framer-motion'

export const AnimationDiv = styled(motion.div)`
    width: fit-content;
    height: fit-content;
    background-color: #0F52BA;

    color: #FFFFFF;
    
    padding: 10px;
`

export const LoadingAnimation = styled(motion.div)`
    margin-top: 8px;
    color: #FFFFFF;
    p {
        height: 3px;
        background-color: #FFFFFF;
        border-radius: 8px;
    }
`