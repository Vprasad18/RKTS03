import { Link } from "react-router-dom"
import Button from "../ui/Button"
import CompanyCard from "../ui/CompanyCard"
import { ArrowRight, Building, Users, Award, TrendingUp } from "lucide-react"
import polixel from "../../assests/polixel.jpg"
import sterling from "../../assests/Sterling.png"
import honey from "../../assests/honeywell.png"
import land from "../../assests/landt.jpg"
import bnb from "../../assests/bnbsecurity.jpg"

export default function Portfolio() {
  const companies = [
    {
      id: 1,
      name: "L&T TECHNOLOGY SERVICES LTD",
      image: land,
      location: "Kolkata, West Bengal",
      year: "2012 - 2015",
      value: "",
      status: "Completed",
      description:
        "Here we have worked on Installation of FIRE ALAM, CCTC, ACESS CONTROL, BMS, DATA & VOICE, PA",
      projects: [
        "FIRE SAFTEY SERVICES" ,
        "HOSPITAL PROJECT DUMKA HOSPITAL PROJECT JHARKHAND"],
      additionalInfo: [
        { label: "Project Type", value: "FIRE SAFTEY SERVICES" },
        { label: "Location", value: "JHARKHAND" },
        { label: "Duration", value: "DECEMBER 2021" },
        { label: "Services", value: " Fire Safety" },
        { label: "Project Value", value: "₹8,50,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 2,
      name: "STERLING & WILSON PVT LTD",
      image: sterling,
      location: "Pangarh, Raigarh",
      year: "2014 - 2015",
      value: "",
      status: "Completed",
      description:
        "Here we worked as FIRE ALARM, CCTV, ACCESS, BMS & BOOM BARRIER.",
      projects: [
        "JINDAL STEEL - 2014 RAIGARH",
        "NISER - 2015 PANAGARH",
        "AIRFORCE STATION - 2015",
      ],
      additionalInfo: [
        { label: "Project Type", value: "Safety Systems" },
        { label: "Location", value: "RAIGARH, PANAGARH" },
        { label: "Duration", value: "2014 - 2015" },
        { label: "Services", value: "FIRE ALARM, CCTV, ACCESS, BMS & BOOM BARRIER." },
        { label: "Project Value", value: "₹15,20,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 3,
      name: "BNB SECURITY & AUTOMATION",
      image: bnb,
      location: "Kolkata, Ahemdabad,",
      year: "2020 - 2024",
      value: "",
      status: "Completed",
       description:
        "We have been working for this company for the last 4 years as a CCTV, ACCESS CONTROL, FIRE ALAM, BMS, FIRE SUPPRESSION, FM 200 GAS SYSTEM, PA SYSTEMS",
      projects: [
        "ITC SAKRAIL: ITC FOOD WAREHOUSE AT KOLKATA - SAKRAIL",
        "ITC KHURDA: ITC FOOD & BEVERAGE FACTORY",
        "ITC MUNGER: DAIRY PLANT AT MUNGER",
        "ITC GUNTUR: ITC FOOD WAREHOUSE & BEVERAGE, HYDREBAD - GUNTUR",
        "ITC AHEMDABAD: ITC FOOD & BEVERAGE AT GUJARAT - AHEMDABAD",
        "ITC RAJMUNDRY: ITC WAREHOUSE AT RAJMUNDRY - HYDREBAD",
        "CTS KOLKATA: IT SECTOR - KOLKATA - WEST BENGAL",
        "AMAZON KOLKATA: WAREHOUSE - AMAZON, ULBERIA - WEST BENGAL",
        "LEGATO: IT SECTOR - LEGATO - BANGLORE",
        "ITC PACHLA: FOOD FACTORY - PACHLA - WEST BENGAL",
      ],
      additionalInfo: [
        { label: "Project Type", value: "SECURITY SYSTEMS INSTALLATIONS" },
        { label: "Location", value: "KHURDA, MUNGER, GUNTUR, AHEMDABAD, RAJMUNDRY, KOLKATA, PACHLA," },
        { label: "Duration", value: "2020 - 2024" },
        { label: "Services", value: " CCTV, ACCESS CONTROL, FIRE ALAM, BMS, FIRE SUPPRESSION, FM 200 GAS SYSTEM, PA SYSTEMS." },
        { label: "Project Value", value: "₹18,50,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 4,
      name: "POLIXEL INDIA",
      image: polixel,
      location: "Kolkata",
      year: "2012 - 2015",
      value: "",
      status: "Completed",
      description:
        "This was one of our First Project in Kolkata here we worked over here as an Installation of CCTV Cameras, FIRE, Safety, and Security Systems.",
      projects: [
        "Unitech BUILDING in the Year - 2012",
        "Coal India NS ROAD - 2015",
      ],
      additionalInfo: [
        { label: "Project Type", value: "SECURITY SYSTEMS INSTALLATIONS" },
        { label: "Location", value: " KOLKATA" },
        { label: "Duration", value: "2012 - 2015" },
        { label: "Services", value: "CCTV Cameras, FIRE, Safety, and Security Systems." },
        { label: "Project Value", value: "₹18,50,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 5,
      name: "HONEYWELL",
      image: honey,
      location: "West Bengal",
      year: "2014",
      value: "",
      status: "Completed",
      description:
        "Honeywell KOLKATA Project has been the most challenging and learning Project for our Team, here we worked as a third-hand party for HONEYWELL, where we worked on the Installation of a FIRE ALARM SYSTEM & SYSTEM.",
      projects: [
        "NETAJI SUBASH CAHNDRA BOSE INTERNATIONAL AIRPORT - 2014",
        "KOLKATA AIRPORT - WEST BENGAL",
      ],
      additionalInfo: [
        { label: "Project Type", value: "FIRE ALARM SECURITY & SYSTEM." },
        { label: "Location", value: "WEST BENGAL" },
        { label: "Duration", value: "2014" },
        { label: "Services", value: "Campus Security, Digital Infrastructure, Safety Systems" },
        { label: "Project Value", value: "₹25,30,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
  ]

  const stats = [
    { icon: Building, number: "85+", label: "Projects Completed", color: "text-blue-600" },
    { icon: Users, number: "100+", label: "Happy Clients", color: "text-green-600" },
    { icon: Award, number: "14+", label: "Years Experience", color: "text-purple-600" },
    { icon: TrendingUp, number: "99%", label: "Success Rate", color: "text-red-600" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-full text-sm font-semibold font-tinos mb-4">
            OUR PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl font-newsreader font-bold text-gray-900 mt-2 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Trusted Partners
            </span>
          </h2>
          <p className="text-slate-700 text-lg font-serif max-w-3xl mx-auto leading-relaxed">
            Explore our successful partnerships and projects with leading companies across various industries. Click on
            any card to see detailed project information and implementation stories.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold font-tinos mb-4">Ready to Start Your Project?</h3>
          <p className="text-blue-100 mb-6 font-serif max-w-2xl mx-auto">
            Join our growing list of satisfied clients and let us help you implement the perfect security solution for
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio/completed">
              <Button className="bg-red-600 text-white hover:bg-red-800 transition-colors duration-300">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
