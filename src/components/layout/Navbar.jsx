"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronUp, ChevronDown, Phone, Facebook, Linkedin, Instagram, Download } from "lucide-react"
import logo from "../../assests/logo.jpg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const isActive = (path) => {
    return location.pathname === path
  }

  const isPortfolioActive = () => {
    return location.pathname.startsWith("/portfolio")
  }

  const handleDownloadPortfolio = () => {
    const link = document.createElement("a")
    link.href = "/portfolio.pdf"
    link.download = "RK-Technical-Portfolio.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-3">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center font-tinos font-medium sm:text-sm space-x-4">
            <span>Follow Us:</span>
            <div className="flex space-x-2 sm:gap-1 md:gap-2">
              <Facebook className="sm:w-5 sm:h-5 h-4 w-4  hover:text-red-500 cursor-pointer transition-colors duration-300" />
              <Linkedin className="sm:w-5 sm:h-5 h-4 w-4 hover:text-red-500 cursor-pointer transition-colors duration-300" />
              <Instagram className="sm:w-5 sm:h-5 h-4 w-4 hover:text-red-500 cursor-pointer transition-colors duration-300" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleDownloadPortfolio}
              className="group flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-red-500 via-red-700 to-red-800 hover:from-red-800 hover:to-red-500 px-2 sm:px-4 py-1 sm:py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-bounce" />
              <span className="font-semibold font-tinos text-xs sm:text-sm hidden xs:inline">Download Portfolio</span>
              <span className="font-semibold font-tinos text-xs sm:text-sm xs:hidden">Download Portfolio</span>
            </button>

            {/* Phone Number */}
            <div className="flex items-center space-x-1 sm:space-x-2 bg-red-600 hover:bg-red-600 px-2 sm:px-4 py-1 sm:py-2 rounded-full transition-all duration-300 transform hover:scale-105">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-semibold font-tinos text-xs sm:text-sm hidden sm:inline">+91 9874020650</span>
              <span className="font-semibold font-serif text-xs sm:hidden">Call</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="bg-red-600 text-white px-4 sm:px-7 py-2 sm:py-3 transform -skew-x-12 hover:bg-red-800 transition-colors duration-300"
              >
                <span className="font-bold text-sm sm:text-xl transform skew-x-12 block font-tinos">
                  R K TECHNICAL SUPPORT
                </span>
              </Link>

              {/* Animated Logo */}
              <div
                className={`ml-2 sm:ml-4 transition-all duration-1000 ease-out ${
                  logoVisible ? "transform translate-x-0 opacity-100" : "transform -translate-x-full opacity-0"
                }`}
              >
                <img
                  src={logo}
                  alt="RK Technical Support Logo"
                  className="h-8 sm:h-12 md:h-14 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-semibold text-xl font-tinos transition-colors duration-300 ${
                  isActive("/") ? "text-red-600" : "text-gray-700 hover:text-red-800"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-semibold text-xl font-tinos transition-colors duration-300 ${
                  isActive("/about") ? "text-red-600" : "text-gray-700 hover:text-red-800"
                }`}
              >
                About
              </Link>

              {/* Portfolio Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                  className={`flex items-center font-semibold text-xl font-tinos transition-colors duration-300 ${
                    isPortfolioActive() ? "text-red-600" : "text-gray-700 hover:text-red-800"
                  }`}
                >
                  Portfolio
                  <ChevronDown className="ml-1 w-5 h-5" />
                </button>
                {isPortfolioOpen && (
                  <div className="absolute top-full -left-10 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <Link
                      to="/portfolio/ongoing"
                      className="block px-4 py-2 font-semibold text-base font-tinos text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-300"
                      onClick={() => setIsPortfolioOpen(false)}
                    >
                      Ongoing Projects
                    </Link>
                    <Link
                      to="/portfolio/completed"
                      className="block px-4 py-2 font-semibold text-base font-tinos text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-300"
                      onClick={() => setIsPortfolioOpen(false)}
                    >
                      Completed Projects
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/services"
                className={`font-semibold text-xl font-tinos transition-colors duration-300 ${
                  isActive("/services") ? "text-red-600" : "text-gray-700 hover:text-red-800"
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`font-semibold text-xl font-tinos transition-colors duration-300 ${
                  isActive("/contact") ? "text-red-600" : "text-gray-700 hover:text-red-800"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 font-semibold text-xl font-tinos hover:text-red-500  transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="text-gray-700 hover:text-red-500 font-semibold text-xl font-tinos transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                {/* Portfolio Dropdown */}
                <button
                  className="text-gray-700 hover:text-red-500 font-semibold text-xl font-tinos transition-colors duration-300 flex justify-between items-center"
                  onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                >
                  <span>Portfolio</span>
                  {isPortfolioOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {isPortfolioOpen && (
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link
                      to="/portfolio/ongoing"
                      className="text-gray-600 font-semibold  font-tinos hover:text-red-500 text-sm transition-colors duration-300"
                      onClick={() => {
                        setIsOpen(false)
                        setIsPortfolioOpen(false)
                      }}
                    >
                      Ongoing Projects
                    </Link>
                    <Link
                      to="/portfolio/completed"
                      className="text-gray-600 hover:text-red-500 font-semibold font-tinos text-sm transition-colors duration-300"
                      onClick={() => {
                        setIsOpen(false)
                        setIsPortfolioOpen(false)
                      }}
                    >
                      Completed Projects
                    </Link>
                  </div>
                )}

                <Link
                  to="/services"
                  className="text-gray-700 hover:text-red-500 font-semibold text-xl font-tinos transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>

                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-red-500 font-semibold text-xl font-tinos transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
