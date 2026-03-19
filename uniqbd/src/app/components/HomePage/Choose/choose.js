import React from 'react'

const Choose = () => {
    return (
      <div>
  <section className="relative py-20 overflow-hidden">

    {/* Glow Effect */}
    <div className="absolute w-96 h-96 bg-button/20 blur-[120px] top-10 left-20"></div>
    <div className="absolute w-96 h-96 bg-button/30 blur-[120px] bottom-10 right-20"></div>

    <h2 className="text-3xl font-bold text-center mb-14 relative z-10 text-gray-900">
      Why Choose UniQbd
    </h2>

    <div className="grid md:grid-cols-4 gap-10 px-6 md:px-10 max-w-7xl mx-auto relative z-10">

      <div className="backdrop-blur-lg bg-white/50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
        <div className="text-4xl mb-2"></div>
        <h3 className="font-semibold mt-4 text-lg text-gray-900">Instant Delivery</h3>
        <p className="text-sm mt-2 text-gray-700">
          Receive your top-up instantly
        </p>
      </div>

      <div className="backdrop-blur-lg bg-white/50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
        <div className="text-4xl mb-2"></div>
        <h3 className="font-semibold mt-4 text-lg text-gray-900">Secure Payment</h3>
        <p className="text-sm mt-2 text-gray-700">
          bKash, Nagad & Rocket supported
        </p>
      </div>

      <div className="backdrop-blur-lg bg-white/50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
        <div className="text-4xl mb-2"></div>
        <h3 className="font-semibold mt-4 text-lg text-gray-900">Trusted Store</h3>
        <p className="text-sm mt-2 text-gray-700">
          Thousands of gamers trust us
        </p>
      </div>

      <div className="backdrop-blur-lg bg-white/50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
        <div className="text-4xl mb-2"></div>
        <h3 className="font-semibold mt-4 text-lg text-gray-900">24/7 Support</h3>
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
