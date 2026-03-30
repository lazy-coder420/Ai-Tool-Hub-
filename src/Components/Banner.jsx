import React from 'react'
import BannerImage from '../assets/imageFolder/BannerImage.png'

import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <>
       <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
      <p className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm mb-6">
        ● New: AI-Powered Tools Available
      </p>


      <h1 className="text-6xl font-bold leading-tight text-gray-900 mb-6">
        Supercharge Your <br /> Digital Workflow
      </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and
        productivity software—all in one place. Start creating
        faster today.
          </p>

          {/* <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-red-600 hover:bg-red-500 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-red-500/30 flex items-center gap-3 group text-white">
              Get Unlimited Access
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div> */}

          {/* <div className="flex items-center gap-8 text-sm text-zinc-600 pt-6">
            <div>✓ 50+ Frontier Models</div>
            <div>✓ No Usage Limits</div>
            <div>✓ Cancel Anytime</div>
          </div> */}


<div className="flex gap-4">
<button className='btn bg-purple-600 text-white rounded-full px-6 border-none hover:bg-purple-700'>
    Explore Products
</button>
<button className="btn btn-outline border-purple-600 text-purple-600 rounded-full px-6">
          <FaPlay />
          Watch Demo
        </button>


</div>






        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl "
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>


<section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-12 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-3 text-center">
        <div>
          <h2 className="text-5xl font-bold">50K+</h2>
          <p className="mt-2">Active Users</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">200+</h2>
          <p className="mt-2">Premium Tools</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">4.9</h2>
          <p className="mt-2">Rating</p>
        </div>
      </div>
    </section>


    </>
  )
}

export default Banner
