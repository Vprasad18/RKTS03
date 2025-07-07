import { ArrowRight, Play } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../ui/Button"
import BackgroundCarousel from "../ui/BackgroundCarousel"
import coursel1 from "../../assests/carousel-1.jpg"
import coursel2 from "../../assests/carousel-2.jpg"

export default function Hero() {
 const heroImages = [coursel1, coursel2];


  return (
    <BackgroundCarousel
      images={heroImages}
      autoPlay={true}
      interval={5000}
      showControls={true}
      showIndicators={true}
      height="min-h-screen"
      overlay="bg-gradient-to-r from-black via-black/5 to-black/25"
    >
      <div className="container text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full mb-6 animate-fade-in-up">
            <span className="font-semibold font-tinos">14 YEARS OF WORKING EXPERIENCE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up font-tinos">
            Installation Service of <span className="text-red-600 font-tinos ">Safety and Security</span> System
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in-up font-newsreader">
            Professional technical support and installation services for comprehensive safety and security solutions.
            Trusted by businesses across the region.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link to="/contact">
              <Button className="bg-red-600 text-white hover:bg-red-800 px-8 py-4 text-lg transition-colors duration-300 font-serif">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link to="/services">
              <Button
                variant="outline"
                className="border-white border-x-2 border-y-2 text-slate-100 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg transition-colors duration-300 font-serif"
              >
                <Play className="mr-2 w-5 h-5" />
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </BackgroundCarousel>
  )
}
