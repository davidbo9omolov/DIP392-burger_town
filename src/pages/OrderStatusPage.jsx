import React from 'react';

const OrderStatusPage = () => {
    // This component will display order details and status
    return (
        <div className="bg-[#0d0d0d] text-white min-h-screen font-[Kavoon] px-6 md:px-20 py-10">
            <h2 className="text-4xl text-center mb-8">Order Status</h2>
            <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg">
                <p>Order ID: #12345 (Placeholder)</p>
                <p>Status: Order Received (Placeholder)</p>
                {/* More order details can be added here */}
            </div>
        </div>
    );
};

export default OrderStatusPage; 