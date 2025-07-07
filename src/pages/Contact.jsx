"use client"
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react"
import { Card, CardContent } from "../components/ui/Card"
import Button from "../components/ui/Button"
import BackgroundCarousel from "../components/ui/BackgroundCarousel"

export default function Contact() {
  const contactImages = [
    "/placeholder.svg?height=600&width=1200&text=Contact+Us",
    "/placeholder.svg?height=600&width=1200&text=Professional+Support",
    "/placeholder.svg?height=600&width=1200&text=24/7+Service",
    "/placeholder.svg?height=600&width=1200&text=Expert+Consultation",
  ]

  const handleCallClick = () => {
    window.location.href = "tel:+919874020650"
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:rk.technical@hotmail.com"
  }

  const handleDirectionClick = () => {
    const address = "Near Shani Madil, 2, Bhujang Dhar Rd, Liluah, Howrah, West Bengal 711204"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  return (
    <main>
      {/* Hero Section with Carousel */}
      <BackgroundCarousel
        images={contactImages}
        autoPlay={true}
        interval={5000}
        showIndicators={true}
        height="py-20"
        overlay="bg-gradient-to-r from-blue-900/90 via-purple-800/80 to-red-500/90"
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">
            Get in touch with our experts for your safety and security needs
          </p>
        </div>
      </BackgroundCarousel>

      {/* Contact Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">Get In Touch</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fade-in-up">
              Ready to secure your property? Contact our team of experts today for immediate assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <Card className="text-center p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up group bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-orange-400 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                  Phone Number
                </h3>
                <div className="space-y-3 mb-8">
                  <p className="text-gray-700 text-lg font-semibold hover:text-red-500 transition-colors duration-300">
                    +91 9874020650
                  </p>
                  <p className="text-gray-600 hover:text-red-500 transition-colors duration-300">+012 345 67890</p>
                </div>
                <Button
                  onClick={handleCallClick}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:animate-pulse"
                >
                  Call Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="text-center p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up group bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                  Email Address
                </h3>
                <div className="space-y-3 mb-8">
                  <p className="text-gray-700 text-lg font-semibold hover:text-blue-500 transition-colors duration-300">
                    rk.technical@hotmail.com
                  </p>
                  <p className="text-gray-600 hover:text-blue-500 transition-colors duration-300">support@rktechs.co</p>
                </div>
                <Button
                  onClick={handleEmailClick}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:animate-pulse"
                >
                  Email Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="text-center p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up group bg-white border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-10 h-10 text-white group-hover:bounce transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-6 group-hover:text-blue-700 transition-colors duration-300">
                  COMPANY ADDRESS 
                </h3>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-700 font-semibold hover:text-green-500 transition-colors duration-300">
                    2, Bhujangadhar Road, Patuapara
                  </p>
                  <p className="text-gray-600 hover:text-green-500 transition-colors duration-300">
                    Liluah, Howrah - 711204, West Bengal
                  </p>
                  <p className="text-gray-600 hover:text-green-500 transition-colors duration-300">711204</p>
                  <p className="text-gray-600 font-medium hover:text-green-500 transition-colors duration-300">
                    +91 9874020650
                  </p>
                </div>
                <Button
                  onClick={handleDirectionClick}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:animate-pulse"
                >
                  Direction
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours & Emergency */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Information</h2>

              <Card className="mb-6 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-red-500 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                    <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                    </p>
                    <p>
                      <strong>Saturday:</strong> 9:00 AM - 4:00 PM
                    </p>
                    <p>
                      <strong>Sunday:</strong> Emergency calls only
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-6 h-6 text-red-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-red-800">Emergency Support</h3>
                  </div>
                  <p className="text-red-700">
                    For urgent security matters, call us directly at <strong>+91 9874020650</strong>. We provide 24/7
                    emergency support for critical situations.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Why Contact Us */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Contact Us?</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Free Consultation",
                    description: "Get expert advice on your security needs at no cost",
                    icon: "💡",
                  },
                  {
                    title: "Quick Response",
                    description: "We respond to all inquiries within 2 hours during business hours",
                    icon: "⚡",
                  },
                  {
                    title: "Custom Solutions",
                    description: "Tailored security solutions designed for your specific requirements",
                    icon: "🎯",
                  },
                  {
                    title: "Professional Team",
                    description: "Certified experts with 14+ years of industry experience",
                    icon: "👥",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="text-2xl group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-red-500 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">Find Us</h2>
            <p className="text-gray-600 animate-fade-in-up">Visit our office for in-person consultations</p>
          </div>

          {/* Google Maps Integration */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in-up hover:shadow-2xl transition-shadow duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1234567890123!2d88.3456789!3d22.6123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d1234567890%3A0x1234567890abcdef!2sBhujang%20Dhar%20Rd%2C%20Liluah%2C%20Howrah%2C%20West%20Bengal%20711204!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RK Technical Support Office Location"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 group animate-fade-in-up">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-red-500 mx-auto mb-4 group-hover:bounce transition-transform duration-300" />
                <h3 className="font-semibold text-gray-900 mb-2">COMPANY ADDRESS </h3>
                <p className="text-gray-600 text-sm">
                 2, Bhujangadhar Road, Patuapara
                  <br />
                  Liluah, Howrah - 711204, West Bengal
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 group animate-fade-in-up">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-red-500 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="font-semibold text-gray-900 mb-2">Direct Contact</h3>
                <p className="text-gray-600 text-sm">
                  +91 9874020650
                  <br />
                  Available 24/7
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 group animate-fade-in-up">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-red-500 mx-auto mb-4 group-hover:spin transition-transform duration-1000" />
                <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon-Fri: 9AM-6PM
                  <br />
                  Sat: 9AM-4PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
