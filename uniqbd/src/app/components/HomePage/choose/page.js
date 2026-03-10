import React from 'react'

const Choose = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">

                {/* Glow Effect */}
                <div className="absolute w-96 h-96 bg-purple-400 blur-[120px] opacity-30 top-10 left-20"></div>
                <div className="absolute w-96 h-96 bg-blue-400 blur-[120px] opacity-30 bottom-10 right-20"></div>

                <h2 className="text-3xl font-bold text-center mb-14 relative z-10">
                    Why Choose UniQbd
                </h2>

                <div className="grid md:grid-cols-4 gap-10 px-10 max-w-7xl mx-auto relative z-10">

                    <div className="backdrop-blur-2xl bg-white/40 border border-white/40 rounded-2xl p-8 shadow-xl">
                        <div className="text-4xl"></div>
                        <h3 className="font-semibold mt-4 text-lg">Instant Delivery</h3>
                        <p className="text-sm mt-2 text-gray-700">
                            Receive your top-up instantly
                        </p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-8 shadow-xl">
                        <div className="text-4xl"></div>
                        <h3 className="font-semibold mt-4 text-lg">Secure Payment</h3>
                        <p className="text-sm mt-2 text-gray-700">
                            bKash, Nagad & Rocket supported
                        </p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-8 shadow-xl">
                        <div className="text-4xl"></div>
                        <h3 className="font-semibold mt-4 text-lg">Trusted Store</h3>
                        <p className="text-sm mt-2 text-gray-700">
                            Thousands of gamers trust us
                        </p>
                    </div>

                    <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-8 shadow-xl">
                        <div className="text-4xl"></div>
                        <h3 className="font-semibold mt-4 text-lg">24/7 Support</h3>
                        <p className="text-sm mt-2 text-gray-700">
                            Always ready to help
                        </p>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Choose
