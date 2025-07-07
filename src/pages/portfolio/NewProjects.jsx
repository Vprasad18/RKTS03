import { Card, CardContent } from "../../components/ui/Card"
import Button from "../../components/ui/Button"
import { Calendar, MapPin, Users, Building, Star, ArrowRight } from "lucide-react"
import BackgroundCarousel from "../../components/ui/BackgroundCarousel"

export default function NewProjects() {
  const newProjectImages = [
    "/placeholder.svg?height=600&width=1200&text=New+Opportunities",
    "/placeholder.svg?height=600&width=1200&text=Airport+Security",
    "/placeholder.svg?height=600&width=1200&text=Government+Projects",
    "/placeholder.svg?height=600&width=1200&text=Metro+Rail+Security",
    "/placeholder.svg?height=600&width=1200&text=Smart+Township",
  ]

  const newProjects = [
    {
      title: "International Airport Security Upgrade",
      category: "Aviation Security",
      location: "Chhatrapati Shivaji International Airport, Mumbai",
      estimatedStart: "June 2025",
      client: "Mumbai International Airport Ltd",
      duration: "18 months",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Comprehensive security upgrade for one of India's busiest airports. Implementation of next-generation security screening, biometric systems, baggage tracking, and integrated threat detection systems.",
      status: "Proposal Submitted",
      features: ["Biometric Security", "Baggage Tracking", "Threat Detection", "Passenger Screening", "Command Center"],
      estimatedBudget: "₹15+ Crores",
      priority: "High",
    },
    {
      title: "Smart Government Complex",
      category: "Government Security",
      location: "Mantralaya, Mumbai",
      estimatedStart: "August 2025",
      client: "Government of Maharashtra",
      duration: "12 months",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Digital transformation and security upgrade for state government offices. Installing smart access control, visitor management, digital surveillance, and integrated communication systems.",
      status: "Under Evaluation",
      features: [
        "Smart Access Control",
        "Visitor Management",
        "Digital Surveillance",
        "Communication Systems",
        "Data Security",
      ],
      estimatedBudget: "₹8+ Crores",
      priority: "High",
    },
    {
      title: "Metro Rail Security Network",
      category: "Transportation Security",
      location: "Pune Metro Rail Project",
      estimatedStart: "September 2025",
      client: "Maharashtra Metro Rail Corporation",
      duration: "15 months",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Complete security solution for Pune Metro Rail network covering 30+ stations. Implementation of passenger safety systems, platform monitoring, emergency response, and integrated control systems.",
      status: "Technical Discussion",
      features: [
        "Platform Monitoring",
        "Passenger Safety",
        "Emergency Response",
        "Control Systems",
        "Real-time Analytics",
      ],
      estimatedBudget: "₹12+ Crores",
      priority: "Medium",
    },
    {
      title: "Industrial Park Security Infrastructure",
      category: "Industrial Security",
      location: "Aurangabad Industrial City (AURIC)",
      estimatedStart: "July 2025",
      client: "AURIC Development Authority",
      duration: "10 months",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Security infrastructure for new industrial park spanning 10,000 acres. Installing perimeter security, access control, environmental monitoring, and smart city features for industrial zone.",
      status: "Proposal Stage",
      features: [
        "Perimeter Security",
        "Environmental Monitoring",
        "Smart City Features",
        "Access Control",
        "Industrial Safety",
      ],
      estimatedBudget: "₹6+ Crores",
      priority: "Medium",
    },
    {
      title: "Healthcare City Security",
      category: "Healthcare Security",
      location: "Hinjewadi Healthcare City, Pune",
      estimatedStart: "October 2025",
      client: "Healthcare City Development Corporation",
      duration: "8 months",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Specialized security solution for integrated healthcare facility housing multiple hospitals and research centers. Focus on patient safety, data security, and emergency response systems.",
      status: "Initial Inquiry",
      features: [
        "Patient Safety",
        "Data Security",
        "Emergency Response",
        "Access Control",
        "Medical Equipment Security",
      ],
      estimatedBudget: "₹5+ Crores",
      priority: "Low",
    },
    {
      title: "Smart Township Development",
      category: "Residential Security",
      location: "Lavasa Smart City, Pune",
      estimatedStart: "November 2025",
      client: "Lavasa Corporation Limited",
      duration: "14 months",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Comprehensive smart city infrastructure for planned township. Implementation of integrated security, smart utilities monitoring, traffic management, and community safety systems.",
      status: "Feasibility Study",
      features: [
        "Integrated Security",
        "Smart Utilities",
        "Traffic Management",
        "Community Safety",
        "Environmental Monitoring",
      ],
      estimatedBudget: "₹10+ Crores",
      priority: "Low",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Proposal Submitted":
        return "bg-blue-100 text-blue-800"
      case "Under Evaluation":
        return "bg-yellow-100 text-yellow-800"
      case "Technical Discussion":
        return "bg-purple-100 text-purple-800"
      case "Proposal Stage":
        return "bg-green-100 text-green-800"
      case "Initial Inquiry":
        return "bg-gray-100 text-gray-800"
      case "Feasibility Study":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-500"
      case "Medium":
        return "text-yellow-500"
      case "Low":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <main>
      {/* Hero Section with Carousel */}
      <BackgroundCarousel
        images={newProjectImages}
        autoPlay={true}
        interval={5000}
        showIndicators={true}
        height="py-20"
        overlay="bg-gradient-to-r from-blue-900/90 via-purple-800/80 to-red-500/90"
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">New Projects</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">
            Upcoming opportunities and projects in various stages of planning and proposal
          </p>
        </div>
      </BackgroundCarousel>

      {/* Pipeline Stats */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">6</div>
              <div className="text-gray-600">Projects in Pipeline</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">₹56+Cr</div>
              <div className="text-gray-600">Estimated Value</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">2</div>
              <div className="text-gray-600">High Priority</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-red-500 mb-2">85%</div>
              <div className="text-gray-600">Win Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New Opportunity
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className={`flex items-center ${getPriorityColor(project.priority)}`}>
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium bg-white px-2 py-1 rounded">
                        {project.priority} Priority
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2 text-red-500" />
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-red-500" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-red-500" />
                      <span>{project.estimatedStart}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-red-500" />
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Scope of Work:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="text-sm text-gray-500">Estimated Value:</span>
                        <div className="text-lg font-bold text-red-500">{project.estimatedBudget}</div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-300"
                    >
                      Express Interest
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
            We're always looking for new opportunities to showcase our expertise. Contact us to discuss your upcoming
            security and technical projects.
          </p>
          <a href="/contact">
            <Button className="bg-red-500 hover:bg-red-600 transition-colors duration-300 animate-fade-in-up">
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>
    </main>
  )
}
