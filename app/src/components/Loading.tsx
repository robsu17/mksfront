import { AnimationDiv, LoadingAnimation } from './Loadingstyle'

export default function Loading() {
    return (
        <AnimationDiv 
            className="box"
            animate={{
                scale: [1, 1.2, 1.2, 1, 1],
                borderRadius: ["8px"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0.8
            }}
        >
            <h2>Carregando produtos...</h2>
            <LoadingAnimation 
                animate={{
                    width: [25, 50, 75, 100, 125, 175, 200, 250, 288]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity
                }}
            >
                <p></p>
            </LoadingAnimation>
        </AnimationDiv>
    )
}