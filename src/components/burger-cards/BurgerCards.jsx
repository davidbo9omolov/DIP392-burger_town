import {clsx} from "clsx";
import {motion} from "framer-motion";

const BurgerCards = ({index, active, setActiveCard}) => (
    <motion.div
        className={clsx(
            "group relative flex justify-center bg-primary rounded-md w-[175px] h-[100px] outline-none",
            "hover:outline hover:outline-2 hover:outline-secondary hover:outline-offset-[5px]",
            active && "outline outline-2 outline-secondary outline-offset-[5px]"
        )}
        onClick={() => setActiveCard(index)}
        initial={{opacity: 0, scale: 0.9}}
        animate={{opacity: 1, scale: 1}}
        whileHover={{scale: 1.05}}
        transition={{type: "spring", stiffness: 200, damping: 15}}
    >
        <motion.span
            className={clsx(
                "hidden sm:block absolute -top-[25px] -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-secondary",
            )}
            initial={{opacity: 0, y: -10}}
            animate={{opacity: active ? 1 : 0, y: active ? 0 : -10}}
            transition={{duration: 0.2}}
        />
    </motion.div>
);

export default BurgerCards;