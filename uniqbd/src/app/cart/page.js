import React from 'react'

const Cart = () => {
    return (
        <div className="min-h-screen bg-gray-800 py-10 px-4">
            <div className="max-w-6xl mx-auto bg-black shadow-lg rounded-2xl p-8">

                <h1 className="text-3xl font-bold mb-8 text-gray-200">
                    Shopping Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT SIDE - Cart Items */}
                    <div className="lg:col-span-2">

                        {/* Header */}
                        <div className="hidden md:grid grid-cols-4 font-semibold text-gray-200 border-b pb-4">
                            <h1>Product</h1>
                            <h1>Price</h1>
                            <h1>Quantity</h1>
                            <h1>Subtotal</h1>
                        </div>

                        {/* Product Row */}
                        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 py-6 border-b">

                            {/* Product Info */}
                            <div className="flex items-center gap-4">
                                <img 
                                    src="https://via.placeholder.com/80"
                                    alt="product"
                                    className="w-20 h-20 rounded-lg object-cover"
                                />
                                <div>
                                    <h2 className="font-semibold text-gray-200">
                                        Pubg mobile uc
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        UniQbd
                                    </p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="text-gray-700 font-medium">
                                ৳1500
                            </div>

                            {/* Quantity */}
                            <div>
                                <input
                                    type="number"
                                    min="1"
                                    defaultValue="1"
                                    className="w-20 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            {/* Subtotal */}
                            <div className="font-semibold text-gray-200">
                                ৳1500
                            </div>
                        </div>

                        {/* Update Button */}
                        <div className="mt-6">
                            <button className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                                UPDATE CART
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Cart Totals */}
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-md h-fit">

                        <h2 className="text-2xl font-bold mb-6">
                            Cart Totals
                        </h2>

                        <div className="flex justify-between mb-4 text-gray-600">
                            <span>Subtotal</span>
                            <span>৳1500</span>
                        </div>

                        <div className="border-t pt-4 flex justify-between font-semibold text-lg text-gray-200">
                            <span>Total</span>
                            <span>৳1500</span>
                        </div>

                        <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                            PROCEED TO CHECKOUT
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cart