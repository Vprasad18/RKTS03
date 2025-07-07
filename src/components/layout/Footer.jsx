import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";

export default function Footer() {
  const handleDownloadPortfolio = () => {
    const link = document.createElement("a");
    link.href = "/portfolio.pdf";
    link.download = "RK-Technical-Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-red-600 text-white px-4 py-2 transform -skew-x-12 inline-block mb-4">
              <span className="font-bold transform font-tinos skew-x-12 block">
                R K TECHNICAL SUPPORT
              </span>
            </div>
            <p className="text-slate-100 font-serif text-justify mb-4 mr-4">
              Leading provider of safety and security system installations with
              14+ years of experience in delivering professional technical
              solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-red-600 cursor-pointer transition-colors duration-300" />
              <Linkedin className="w-5 h-5 hover:text-red-600 cursor-pointer transition-colors duration-300" />
              <Instagram className="w-5 h-5 hover:text-red-600 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-100 font-tinos font-medium hover:text-red-600 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-100 font-tinos font-medium hover:text-red-600 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-100 font-tinos font-medium hover:text-red-600 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio/completed"
                  className="text-slate-100 font-tinos font-medium hover:text-red-600 transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-100 font-tinos font-medium hover:text-red-600 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold font-tinos mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-slate-100 font-tinos font-medium">
              <li>CCTV Installation</li>
              <li>Fire Safety Systems</li>
              <li>Access Control</li>
              <li>Security Alarms</li>
              <li>Network Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold font-tinos mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-slate-100">+91 9874020650</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-slate-100">rk.technical@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-slate-100">
                  Howrah, West Bengal, India
                </span>
              </div>
              <button
                onClick={handleDownloadPortfolio}
                className="group flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-red-500 via-red-700 to-red-800 hover:from-red-800 hover:to-red-500 px-2 sm:px-4 py-1 sm:py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-bounce" />
                <span className="font-semibold font-tinos text-xs sm:text-sm hidden xs:inline">
                  Download Portfolio
                </span>
                <span className="font-semibold font-tinos text-xs sm:text-sm xs:hidden">
                  Download Portfolio
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-200 text-sm">
              © {new Date().getFullYear()} RK Technical Support. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0 items-center">
              <a
                href="https://mayanksinghrajput.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 text-sm font-tinos hover:text-red-600 transition-colors duration-300"
              >
                Designed by Mayank Singh
              </a>
              <Link
                to="/privacy"
                className="text-slate-200 hover:text-red-600 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-200 hover:text-red-600 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
