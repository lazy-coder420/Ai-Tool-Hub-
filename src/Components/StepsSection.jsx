import React from 'react'
import make from '../assets/imageFolder/make.png'
import box from '../assets/imageFolder/box.png'
import str from '../assets/imageFolder/str.png'


const StepsSection = () => {
  return (
    <>

     <div className="bg-base-200 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-md p-8 relative">
            <div className="absolute top-4 right-4 badge badge-primary">01</div>
            
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-5 rounded-full">
                <img src={make} alt="" className='size-16' />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Create Account
            </h3>
            <p className="text-gray-500 text-sm">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-md p-8 relative">
            <div className="absolute top-4 right-4 badge badge-primary">02</div>

            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-5 rounded-full">
                <img src={box} alt="" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Choose Products
            </h3>
            <p className="text-gray-500 text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-md p-8 relative">
            <div className="absolute top-4 right-4 badge badge-primary">03</div>

            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-5 rounded-full">
                <img src={str} alt="" className='size-16'/>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Start Creating
            </h3>
            <p className="text-gray-500 text-sm">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
      
    </>
  )
}

export default StepsSection
