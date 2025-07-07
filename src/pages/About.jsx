import { Target, Eye, Heart } from "lucide-react"
import BackgroundCarousel from "../components/ui/BackgroundCarousel"
import about from "../assests/team-1.jpeg"

export default function About() {
  const aboutImages = [
    "/images/about-bg.png",
    "/placeholder.svg?height=600&width=1200&text=Our+Team",
    "/placeholder.svg?height=600&width=1200&text=Our+Experience",
    "/placeholder.svg?height=600&width=1200&text=Our+Values",
  ]

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide reliable, innovative, and cost-effective safety and security solutions that protect what matters most to our clients.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading provider of technical support services, setting industry standards for quality and customer satisfaction.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Integrity, excellence, innovation, and customer-centricity guide everything we do in our pursuit of technical perfection.",
    },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      experience: "15+ Years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Sharma",
      position: "Technical Director",
      experience: "12+ Years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Amit Patel",
      position: "Operations Manager",
      experience: "10+ Years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sunita Desai",
      position: "Quality Assurance Head",
      experience: "8+ Years",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main>
      {/* Hero Section with Carousel */}
      <BackgroundCarousel
        images={aboutImages}
        autoPlay={true}
        interval={6000}
        showIndicators={true}
        height="py-20"
        overlay="bg-gradient-to-r from-blue-900/90 via-purple-800/80 to-red-500/90"
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-tinos mb-6 animate-fade-in-up">About RK Technical Support</h1>
          <p className="text-xl md:text-2xl font-newsreader max-w-3xl mx-auto animate-fade-in-up">
            14+ years of excellence in providing professional safety and security solutions
          </p>
        </div>
      </BackgroundCarousel>

      {/* Rest of the component remains the same */}
      {/* Company Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold font-tinos text-gray-900 mb-6">Our Story</h2>
              <p className="text-slate-700 font-newsreader text-justify text-lg mb-6">
                Founded in 2010, RK Technical Support began as a small team of passionate engineers with a vision to
                revolutionize the <span className="text-red-600">safety and security industry</span>. What started as a local service provider has grown into
                a trusted name across the region.
              </p>
              <p className="text-slate-700 font-newsreader text-justify text-lg mb-6">
                Over the years, we have successfully completed over 1000 projects, ranging from small residential
                installations to large-scale industrial security systems. Our commitment to quality and customer
                satisfaction has been the driving force behind our growth.
              </p>
              <p className="text-slate-700 font-newsreader text-justify text-lg">
                Today, we continue to <span className="text-red-600">innovate and adapt to the latest technologies</span> , ensuring our clients receive the
                most advanced and reliable solutions available in the market.
              </p>
            </div>
            <div className="animate-fade-in-up">
              <img
                src={about}
                alt="RK Technical Support Journey"
                className="rounded-lg sm:ml-36 shadow-xl sm:w-[60%] sm:h-[50%] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-900 mb-3 animate-fade-in-up">Our Foundation</h2>
            <p className="text-slate-700 font-newsreader text-xl max-w-3xl mx-auto animate-fade-in-up">
              Built on strong principles and guided by clear objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                >
                  <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold font-tinos text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-slate-700 font-newsreader">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fade-in-up">
              Our experienced professionals are the backbone of our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center animate-fade-in-up">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-500 font-medium mb-1">{member.position}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  )
}
