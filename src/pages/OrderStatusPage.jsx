import React, { useState, useEffect } from 'react';
import { WebRoutes } from '../constants/routes'; // Assuming WebRoutes is needed
import { useNavigate } from 'react-router-dom'; // Assuming navigation might be needed, e.g., after finishing

const OrderStatusPage = ({ lastOrder, updateOrderStatus }) => {
    const navigate = useNavigate();
    const [displayStatus, setDisplayStatus] = useState(lastOrder?.status || 'Unknown');
    const [remainingTime, setRemainingTime] = useState(lastOrder?.preparationTime * 60 || 0); // Convert minutes to seconds
    const [showFinishButton, setShowFinishButton] = useState(false);

    // Sync internal state with lastOrder prop when it changes
    useEffect(() => {
        if (lastOrder) {
            setDisplayStatus(lastOrder.status);
            // Only start timer if status is Accepted and preparationTime is available
            if (lastOrder.status === 'Accepted' && lastOrder.preparationTime > 0) {
                 setRemainingTime(lastOrder.preparationTime * 60); // Start timer with prep time
                 setShowFinishButton(false); // Hide finish button when a new order is accepted
            } else if (lastOrder.status === 'Ready'){
                 setRemainingTime(0); // Timer is finished if status is Ready
                 setShowFinishButton(true); // Show finish button if status is Ready
            }
             else {
                 setRemainingTime(0); // No timer for other statuses
                 setShowFinishButton(false);
             }
        } else {
             setDisplayStatus('No recent order found.');
             setRemainingTime(0);
             setShowFinishButton(false);
        }
    }, [lastOrder]);

    // Timer effect for Accepted status
    useEffect(() => {
        let timerId;
        if (displayStatus === 'Accepted' && remainingTime > 0) {
            timerId = setInterval(() => {
                setRemainingTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (displayStatus === 'Accepted' && remainingTime <= 0) {
            // Timer finished, update status to Ready
             setDisplayStatus('Ready');
             // Optionally call updateOrderStatus to update the global state in App.jsx
             if (lastOrder) {
                 updateOrderStatus(lastOrder.id, 'Ready');
             }
        }

        return () => clearInterval(timerId);
    }, [displayStatus, remainingTime, lastOrder, updateOrderStatus]);

     // Effect for 5-second delay after Ready status before showing Delivered
    useEffect(() => {
         let delayTimerId;
         if (displayStatus === 'Ready') {
             delayTimerId = setTimeout(() => {
                 setDisplayStatus('Delivered');
                 setShowFinishButton(true); // Show finish button after Delivered
                  // Optionally call updateOrderStatus to update the global state
                 if (lastOrder) {
                      updateOrderStatus(lastOrder.id, 'Delivered');
                 }
             }, 5000); // 5 seconds delay
         }

         return () => clearTimeout(delayTimerId);
    }, [displayStatus, lastOrder, updateOrderStatus]);

    // Format time in minutes and seconds
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

     const handleFinishOrder = () => {
         console.log('Finishing order', lastOrder?.id);
         // Here you would typically mark the order as completed/archived in your backend or state
         // For this example, we might just clear the lastOrder or navigate away
         // Let's just log for now.

         // Optionally navigate back to a different page, e.g., menu or home
         // navigate(WebRoutes.MENU);
     };

    return (
        <div className="bg-[#0d0d0d] text-white min-h-screen font-[Kavoon] px-6 md:px-20 py-10 flex flex-col items-center">
            <h2 className="text-4xl text-center mb-8">Order Status</h2>
            <div className="max-w-md w-full mx-auto bg-gray-800 p-6 rounded-lg text-center">
                {lastOrder ? (
                    <>
                        <p className="text-xl mb-4">Order #{lastOrder.id} Status: <span className="text-secondary">{displayStatus}</span></p>
                        {displayStatus === 'Accepted' && remainingTime > 0 && (
                            <p className="text-lg">Estimated Time Remaining: <span className="font-bold">{formattedTime}</span></p>
                        )}
                         {displayStatus === 'Pending' && (
                             <p className="text-lg">Waiting for admin to accept order...</p>
                         )}
                         {displayStatus === 'Ready' && (
                             <p className="text-lg text-green-500 font-semibold">Order is Ready for Pickup!</p>
                         )}
                          {displayStatus === 'Delivered' && (
                             <p className="text-lg text-green-600 font-semibold">Order Delivered!</p>
                         )}
                         {showFinishButton && ( // Show Finish button based on state
                            <button
                                 onClick={handleFinishOrder}
                                 className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
                            >
                                 Finish Order
                            </button>
                         )}
                    </>
                ) : (
                    <p className="text-lg">No recent order found.</p>
                )}
            </div>
        </div>
    );
};

export default OrderStatusPage; 