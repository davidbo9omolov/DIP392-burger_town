import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const SearchInput = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(prev => !prev);
    };

    return (
        <motion.div
            className="bg-primary rounded-full flex justify-end items-center absolute top-0 right-0 px-2"
            animate={{
                width: expanded ? 250 : 48,
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 22
            }}
        >
            <AnimatePresence>
                {expanded && (
                    <motion.input
                        key="search-input"
                        type="text"
                        placeholder="Search..."
                        className="flex-1 h-full w-full px-2 text-tertiary bg-transparent outline-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0 }}
                        autoFocus
                    />
                )}
            </AnimatePresence>
            <button onClick={handleExpand} className="p-2 bg-primary text-tertiary rounded-full">
                <IoSearch />
            </button>
        </motion.div>
    );
};

export default SearchInput;
