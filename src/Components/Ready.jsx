import React from 'react'

const Ready = () => {
  return (
    <>
      <section class="min-h-[500px] flex items-center justify-center text-center text-white 
bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6">

  <div class="max-w-2xl">
    <h1 class="text-4xl md:text-5xl font-bold mb-4">
      Ready To Transform Your Workflow?
    </h1>

    <p class="text-lg opacity-90 mb-8">
      Join thousands of professionals who are already using Digitools to work smarter.
      Start your free trial today.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="btn btn-primary rounded-full px-6">
        Explore Products
      </button>
      <button class="btn btn-outline text-white border-white hover:bg-white hover:text-purple-600 rounded-full px-6">
        View Pricing
      </button>
    </div>

    <p class="mt-6 text-sm opacity-80">
      14-day free trial • No credit card required • Cancel anytime
    </p>
  </div>
</section>
    </>
  )
}

export default Ready
