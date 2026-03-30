export default function PricingSection() {
  return (
    <div className="bg-base-200 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-12">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Starter */}
          <div className="card bg-base-100 shadow-md p-8 text-left">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-gray-500 text-sm mb-4">
              Perfect for getting started
            </p>

            <h2 className="text-3xl font-bold mb-6">
              $0 <span className="text-base font-normal">/Month</span>
            </h2>

            <ul className="space-y-2 mb-6 text-sm">
              <li>✔ Access to 10 free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="btn bg-gradient-to-r from-purple-500 to-purple-700 text-white border-none rounded-full">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="card text-white shadow-lg p-8 text-left relative bg-gradient-to-br from-purple-600 to-indigo-600">
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 badge badge-warning text-xs">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold mt-4">Pro</h3>
            <p className="text-sm mb-4 opacity-80">
              Best for professionals
            </p>

            <h2 className="text-3xl font-bold mb-6">
              $29 <span className="text-base font-normal">/Month</span>
            </h2>

            <ul className="space-y-2 mb-6 text-sm">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="btn bg-white text-purple-600 border-none rounded-full">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="card bg-base-100 shadow-md p-8 text-left">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-gray-500 text-sm mb-4">
              For teams and businesses
            </p>

            <h2 className="text-3xl font-bold mb-6">
              $99 <span className="text-base font-normal">/Month</span>
            </h2>

            <ul className="space-y-2 mb-6 text-sm">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <button className="btn bg-gradient-to-r from-purple-500 to-purple-700 text-white border-none rounded-full">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}