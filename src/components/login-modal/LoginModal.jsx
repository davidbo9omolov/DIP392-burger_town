import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-lg p-8 w-96"
                    onClick={e => e.stopPropagation()}
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Choose Login Option</h2>
                    <div className="space-y-4">
                        <button
                            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                            onClick={() => {
                                // Handle admin login
                                console.log('Admin login clicked');
                            }}
                        >
                            Login as Admin
                        </button>
                        <button
                            className="w-full py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                            onClick={() => {
                                // Handle guest login
                                console.log('Guest login clicked');
                            }}
                        >
                            Continue as Guest
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LoginModal; 