import React, {useEffect, useState} from 'react';
import {clsx} from "clsx";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {WebRoutes} from "../../constants/routes";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={'flex flex-col md:hidden justify-center bg-primary rounded-full p-2 w-9 h-9 cursor-pointer z-[60]'}
                 onClick={() => setIsOpen(!isOpen)}>
                <span className={clsx('bg-black rounded-full h-[2px] w-full transition-all duration-300 ease-in-out',
                    isOpen && '-rotate-45 translate-y-[2px]'
                )}></span>
                <span className={clsx('bg-black rounded-full h-[2px] w-full my-1',
                    isOpen && 'hidden'
                )}></span>
                <span className={clsx('bg-black rounded-full h-[2px] w-full transition-all duration-300 ease-in-out',
                    isOpen && 'rotate-45'
                )}></span>
            </div>
            <motion.div
                initial={{
                    width: '1.75rem',
                    height: '1.75rem',
                    top: '20px',
                    right: '52px',
                    scale:1,
                    zIndex: -1,
                }}
                animate={isOpen ? {
                    scale:150,
                    top: '0px',
                    left: '0px',
                    zIndex: 50,
                } : {
                    scale: 1,
                    top: '20px',
                    left:'auto',
                    right: '52px',
                    zIndex: -1,
                }}
                transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                }}
                className="block md:hidden absolute rounded-full bg-secondary"
            />
            <motion.div
                className="fixed flex md:hidden flex-col justify-center items-center w-1/2 h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: {
                        pointerEvents: "auto",
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.2,
                        },
                    },
                    closed: {
                        pointerEvents: "none",
                        transition: {
                            staggerChildren: 0.1,
                            staggerDirection: -1,
                        },
                    },
                }}
            >
                {["Home", "Menu", "About"].map((label) => (
                    <motion.div
                        key={label}
                        variants={{
                            open: { x: 0, opacity: 1 },
                            closed: { x: -350, opacity: 0 },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut", type:'spring', stiffness: 100, damping: 12 }}
                        className={'mb-12'}
                    >
                        <Link
                            to={WebRoutes[label.toUpperCase()]}
                            className="text-3xl"
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </Link>
                    </motion.div>
                ))}
                <motion.div
                    variants={{
                        open: { x: 0, opacity: 1 },
                        closed: { x: -350, opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut", type:'spring', stiffness: 100, damping: 12 }}
                    className={'mb-12'}
                >
                    <Link
                        to={WebRoutes.LOGIN}
                        className="text-3xl text-secondary font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        Register
                    </Link>
                </motion.div>
            </motion.div>
        </>
    );
};

export default BurgerMenu;