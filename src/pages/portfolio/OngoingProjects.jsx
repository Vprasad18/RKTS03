import BackgroundCarousel from "../../components/ui/BackgroundCarousel"
import CompanyCard from "../../components/ui/CompanyCard"
import { TrendingUp, Clock, Users, DollarSign } from "lucide-react"

export default function OngoingProjects() {
  const ongoingImages = [
    "/images/ongoing-bg.png",
    "/placeholder.svg?height=600&width=1200&text=Smart+City+Projects",
    "/placeholder.svg?height=600&width=1200&text=Banking+Security",
    "/placeholder.svg?height=600&width=1200&text=Hotel+Security",
    "/placeholder.svg?height=600&width=1200&text=University+Campus",
  ]

  const ongoingCompanies = [
    {
      id: 1,
      name: "",
      image: "",
      location: "",
      year: "",
      value: "",
      status: "",
      progress: "",
      description:
        "",
      projects: [
      ],
      additionalInfo: [],
    },
  ]

  const stats = [
    { icon: TrendingUp, number: "4", label: "Active Projects", color: "text-blue-600" },
    // { icon: DollarSign, number: "₹8.45Cr", label: "Total Value", color: "text-green-600" },
    { icon: Users, number: "45+", label: "Team Members", color: "text-purple-600" },
    { icon: Clock, number: "21%", label: "Avg Progress", color: "text-orange-600" },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-500"
      case "Planning":
        return "bg-yellow-500"
      case "Installation":
        return "bg-green-500"
      case "Initial Phase":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <main>
      {/* Hero Section with Carousel */}
      <BackgroundCarousel
        images={ongoingImages}
        autoPlay={true}
        interval={6000}
        showIndicators={true}
        height="py-20"
        overlay="bg-gradient-to-r from-blue-900/90 via-purple-800/80 to-red-500/90"
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-tinos font-bold mb-6 animate-fade-in-up">Ongoing Projects</h1>
          <p className="text-xl md:text-2xl max-w-3xl font-newsreader mx-auto animate-fade-in-up">
            Current projects in progress showcasing our commitment to excellence and timely delivery
          </p>
        </div>
      </BackgroundCarousel>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl font-tinos font-bold ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-slate-600 font-newsreader text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block font-tinos bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              PROJECTS IN PROGRESS
            </div>
            <h2 className="text-4xl font-bold font-tinos text-gray-900 mb-6 animate-fade-in-up">Current Implementations</h2>
            <p className="text-slate-600 font-newsreader text-lg max-w-3xl mx-auto animate-fade-in-up">
              Track our ongoing projects and see the progress of our current implementations. Click on any project card
              to view detailed progress information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingCompanies.map((company) => (
              <div key={company.id} className="relative">
                <CompanyCard company={company} />

                {/* Progress Indicator */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(company.status)}`}></div>
                      <span className="text-xs font-semibold text-gray-700">{company.progress}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Timeline */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-tinos font-bold mb-4">Project Timeline Overview</h2>
            <p className="text-blue-100 font-newsreader text-lg max-w-2xl mx-auto">
              Our systematic approach ensures timely delivery and quality implementation across all ongoing projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: "Planning", description: "Site survey and requirement analysis", percentage: "100%" },
              { phase: "Design", description: "System design and approval", percentage: "75%" },
              { phase: "Installation", description: "Equipment installation and setup", percentage: "45%" },
              { phase: "Testing", description: "System testing and optimization", percentage: "20%" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                <p className="text-blue-100 text-sm mb-3">{phase.description}</p>
                <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-white h-full rounded-full transition-all duration-1000"
                    style={{ width: phase.percentage }}
                  ></div>
                </div>
                <span className="text-xs text-blue-200 mt-1 block">{phase.percentage} Complete</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
