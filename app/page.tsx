"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-lightBg font-sans text-gray-900 pb-20">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-dark">APEX AUTOS</span>
            <span className="text-2xl">🇳🇬</span>
          </Link>

          {/* Center Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <input
              type="text"
              placeholder="Search by make, model, or price..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
          </div>

          {/* Right Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-gray-700 hover:text-primary font-medium">Buy Cars</Link>
            <Link href="#" className="text-gray-700 hover:text-primary font-medium">Sell Car</Link>
            <Link href="#" className="text-gray-700 hover:text-primary font-medium">Financing</Link>
            <Link href="#" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
            <button className="bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary/90 transition">
              Post Your Car
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-dark focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search cars..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <Link href="#" className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100">Buy Cars</Link>
            <Link href="#" className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100">Sell Car</Link>
            <Link href="#" className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100">Financing</Link>
            <Link href="#" className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100">Contact</Link>
            <button className="bg-secondary text-white w-full py-3 rounded-lg font-semibold hover:bg-secondary/90 transition">
              Post Your Car
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[600px] bg-cover bg-center pt-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
              Find Your Perfect Ride in Nigeria
            </h1>
            <p className="text-white/90 text-xl mb-8 max-w-2xl">
              Thousands of verified cars. Trusted dealers. Fair prices.
            </p>
            <p className="text-white/80 text-lg mb-12">
              Buy directly from verified dealers across Lagos, Abuja, and more.
            </p>

            {/* SEARCH CARD */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

                {/* Make Dropdown */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">Make</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary bg-white appearance-none cursor-pointer text-gray-700">
                    <option>All Makes</option>
                    <option>Toyota</option>
                    <option>Honda</option>
                    <option>Mercedes</option>
                    <option>Lexus</option>
                    <option>BMW</option>
                    <option>Nissan</option>
                  </select>
                </div>

                {/* Model Dropdown */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">Model</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary bg-white appearance-none cursor-pointer text-gray-700">
                    <option>All Models</option>
                    <option>Camry</option>
                    <option>Accord</option>
                    <option>Corolla</option>
                    <option>RX350</option>
                  </select>
                </div>

                {/* Price Range Dropdown */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary bg-white appearance-none cursor-pointer text-gray-700">
                    <option>All Prices</option>
                    <option>₦500k - ₦1M</option>
                    <option>₦1M - ₦3M</option>
                    <option>₦3M - ₦5M</option>
                    <option>₦5M+</option>
                  </select>
                </div>

                {/* Location Dropdown */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary bg-white appearance-none cursor-pointer text-gray-700">
                    <option>All Nigeria</option>
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Port Harcourt</option>
                    <option>Ibadan</option>
                    <option>Kano</option>
                  </select>
                </div>

              </div>

              <button className="w-full bg-secondary text-white py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition shadow-md">
                Search Cars
              </button>

              <div className="text-sm text-gray-600 mt-4">
                Popular:
                <Link href="#" className="text-primary hover:underline ml-1">Toyota Camry</Link> |
                <Link href="#" className="text-primary hover:underline ml-1">Honda Accord</Link> |
                <Link href="#" className="text-primary hover:underline ml-1">Lexus RX350</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED CARS SECTION */}
      <section className="bg-lightBg py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl font-bold text-dark">Featured Listings</h2>
            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <span className="px-4 py-2 rounded-lg font-medium cursor-pointer bg-primary text-white text-sm whitespace-nowrap">All</span>
              <span className="px-4 py-2 rounded-lg font-medium cursor-pointer text-gray-600 hover:bg-gray-200 text-sm whitespace-nowrap">Tokunbo</span>
              <span className="px-4 py-2 rounded-lg font-medium cursor-pointer text-gray-600 hover:bg-gray-200 text-sm whitespace-nowrap">Nigerian Used</span>
              <span className="px-4 py-2 rounded-lg font-medium cursor-pointer text-gray-600 hover:bg-gray-200 text-sm whitespace-nowrap">Brand New</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Car 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600" alt="2018 Toyota Camry LE" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Verified</span>
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Hot Deal</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark mb-2">2018 Toyota Camry LE</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 border-b border-gray-100 pb-3">
                  <span className="flex items-center gap-1">📏 45,000 km</span>
                  <span className="flex items-center gap-1">⛽ Petrol</span>
                  <span className="flex items-center gap-1">⚙️ Automatic</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-3">₦4,500,000</div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                  <span>📍</span> Lagos, Ikeja
                </div>
                <button className="w-full border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Car 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600" alt="2020 Honda Accord EX" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Verified</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark mb-2">2020 Honda Accord EX</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 border-b border-gray-100 pb-3">
                  <span className="flex items-center gap-1">📏 32,000 km</span>
                  <span className="flex items-center gap-1">⛽ Petrol</span>
                  <span className="flex items-center gap-1">⚙️ Automatic</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-3">₦6,200,000</div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                  <span>📍</span> Abuja, Wuse
                </div>
                <button className="w-full border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Car 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600" alt="2017 Lexus RX350" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Verified</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark mb-2">2017 Lexus RX350</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 border-b border-gray-100 pb-3">
                  <span className="flex items-center gap-1">📏 58,000 km</span>
                  <span className="flex items-center gap-1">⛽ Petrol</span>
                  <span className="flex items-center gap-1">⚙️ Automatic</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-3">₦9,800,000</div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                  <span>📍</span> Lagos, VI
                </div>
                <button className="w-full border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Car 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1617531653520-bd466c697344?w=600" alt="2019 Mercedes C300" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Verified</span>
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Hot Deal</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark mb-2">2019 Mercedes C300</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 border-b border-gray-100 pb-3">
                  <span className="flex items-center gap-1">📏 28,000 km</span>
                  <span className="flex items-center gap-1">⛽ Petrol</span>
                  <span className="flex items-center gap-1">⚙️ Automatic</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-3">₦11,500,000</div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                  <span>📍</span> Lagos, Lekki
                </div>
                <button className="w-full border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Car 5 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600" alt="2016 Toyota Corolla S" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Verified</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark mb-2">2016 Toyota Corolla S</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 border-b border-gray-100 pb-3">
                  <span className="flex items-center gap-1">📏 67,000 km</span>
                  <span className="flex items-center gap-1">⛽ Petrol</span>
                  <span className="flex items-center gap-1">⚙️ Automatic</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-3">₦3,200,000</div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                  <span>📍</span> Port Harcourt
                </div>
                <button className="w-full border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Car 6 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600" alt="2021 Honda CR-V" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Verified</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark mb-2">2021 Honda CR-V</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 border-b border-gray-100 pb-3">
                  <span className="flex items-center gap-1">📏 19,000 km</span>
                  <span className="flex items-center gap-1">⛽ Petrol</span>
                  <span className="flex items-center gap-1">⚙️ Automatic</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-3">₦8,900,000</div>
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                  <span>📍</span> Abuja, Maitama
                </div>
                <button className="w-full border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">Why Nigerians Trust Apex Autos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Feature 1 */}
            <div className="text-center group p-4 rounded-xl hover:bg-gray-50 transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                <span className="text-3xl text-primary">✓</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Verified Sellers</h3>
              <p className="text-gray-600 text-sm">All dealers thoroughly vetted personally by our team.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group p-4 rounded-xl hover:bg-gray-50 transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                <span className="text-3xl text-primary">💳</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">Safe escrow transactions. Money is held until you verify.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group p-4 rounded-xl hover:bg-gray-50 transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                <span className="text-3xl text-primary">🔍</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Free Inspection</h3>
              <p className="text-gray-600 text-sm">Professional 150-point car checks available on request.</p>
            </div>

            {/* Feature 4 */}
            <div className="text-center group p-4 rounded-xl hover:bg-gray-50 transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                <span className="text-3xl text-primary">💰</span>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">Flexible Financing</h3>
              <p className="text-gray-600 text-sm">Partner with top Nigerian banks for monthly car payments.</p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-800 pb-8">

            {/* Column 1 */}
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                APEX AUTOS <span>🇳🇬</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Nigeria's trusted auto marketplace since 2024.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm block transition">Buy Cars</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm block transition">Sell Car</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm block transition">Financing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm block transition">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm block transition">Blog</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Popular Searches</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm block transition">Toyota Camry</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm block transition">Honda Accord</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm block transition">Lexus RX</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white text-sm block transition">Mercedes C Class</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm mb-2">123 Herbert Macaulay Way</li>
                <li className="text-gray-400 text-sm mb-2">Lagos, Nigeria</li>
                <li>
                  <a href="tel:+2348012345678" className="text-gray-400 text-sm mb-2 hover:text-white block transition">+234 801 234 5678</a>
                </li>
                <li>
                  <a href="mailto:hello@apexautos.ng" className="text-gray-400 text-sm mb-2 hover:text-white block transition">hello@apexautos.ng</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm pt-4">
            <p className="mb-4 md:mb-0 text-center md:text-left">&copy; 2024 Apex Autos Nigeria. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition">Terms</Link>
              <Link href="#" className="hover:text-white transition">Privacy</Link>
              <Link href="#" className="hover:text-white transition">Sitemap</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition cursor-pointer z-50 text-white text-2xl">
        💬
      </button>

    </main>
  );
}
