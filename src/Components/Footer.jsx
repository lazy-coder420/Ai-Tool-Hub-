import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { GoContainer } from "react-icons/go";
import Container from '../Components/Container'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 px-8 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">DigiTools</h2>
          <p className="text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white">Features</a></li>
            <li><a className="hover:text-white">Pricing</a></li>
            <li><a className="hover:text-white">Templates</a></li>
            <li><a className="hover:text-white">Integrations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white">About</a></li>
            <li><a className="hover:text-white">Blog</a></li>
            <li><a className="hover:text-white">Careers</a></li>
            <li><a className="hover:text-white">Press</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-white">Documentation</a></li>
            <li><a className="hover:text-white">Help Center</a></li>
            <li><a className="hover:text-white">Community</a></li>
            <li><a className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Links (RIGHT SIDE) */}
        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>

          <div className="flex gap-4">
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate-900 hover:scale-110 transition">
              <FaInstagram />
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate-900 hover:scale-110 transition">
              <FaFacebookF />
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate-900 hover:scale-110 transition">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <Container>

      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-white">Privacy Policy</a>
          <a className="hover:text-white">Terms of Service</a>
          <a className="hover:text-white">Cookies</a>
        </div>
      </div>
      </Container>
     
    </footer>
  );
}