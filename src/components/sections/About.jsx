import { CheckCircle, Users, Award, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../ui/Button"
import service from "../../assests/vikashservicemain.jpeg"

export default function About() {
  const stats = [
    { icon: Users, number: "85+", label: "Happy Clients" },
    { icon: Award, number: "14+", label: "Years Experience" },
    { icon: CheckCircle, number: "100+", label: "Projects Completed" },
    { icon: Clock, number: "24/7", label: "Support Available" },
  ]

  const features = [
    "Professional Installation Services",
    "Certified Technical Experts",
    "24/7 Customer Support",
    "Quality Assurance Guarantee",
    "Competitive Pricing",
    "Timely Project Delivery",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <span className="text-red-500 font-semibold font-tinos text-lg">ABOUT RK TECHNICAL SUPPORT</span>
              <h2 className="text-4xl md:text-5xl font-bold font-newsreader text-gray-900 mt-3 mb-6">
                Leading Provider of <span className="text-red-500">Technical Solutions</span>
              </h2>
              <p className="text-gray-600 text-lg text-justify font-serif leading-relaxed mb-6">
                With over 14 years of experience in the industry, RK Technical Support has established itself as a
                trusted name in safety and security system installations. We specialize in providing comprehensive
                technical solutions that ensure the safety and security of your premises.
              </p>
              <p className="text-gray-600 text-lg text-justify font-serif leading-relaxed mb-8">
                Our team of certified professionals is committed to delivering high-quality services with attention to
                detail and customer satisfaction at the forefront of everything we do.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button className="bg-red-600 text-white hover:bg-red-800 transition-colors duration-300">
                Learn More About Us 
              </Button>
            </Link>
          </div>

          {/* Image and Stats */}
          <div className="animate-fade-in-up">
            <div className="relative">
              <img
                src={service}
                alt="RK Technical Support Team"
                className="rounded-lg shadow-xl w-[90%]"
              />

              {/* Stats Overlay */}
              <div className="absolute -bottom-6 left-36 bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-10">
                {stats.slice(0, 2).map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold font-tinos text-gray-900">{stat.number}</div>
                      <div className="text-sm font-newsreader text-slate-700">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.slice(2).map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <Icon className="w-10 h-10 text-red-500 mx-auto mb-3" />
                    <div className="text-3xl font-tinos font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-slate-700 font-newsreader">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
