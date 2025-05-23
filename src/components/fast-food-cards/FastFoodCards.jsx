import { motion } from "framer-motion";
import {clsx} from "clsx";

const FastFoodCards = ({className,image,scale=1.05,item}) => {
    return (
        <motion.img
            src={item?.src || image}
            alt="Fast Food Card"
            className={clsx("bg-primary rounded-md z-10",className)}
            whileHover={{
                scale: scale,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                transition: { type: "spring", stiffness: 300 },
            }}
        />
    );
};

export default FastFoodCards;
