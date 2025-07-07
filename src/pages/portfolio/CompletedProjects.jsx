import BackgroundCarousel from "../../components/ui/BackgroundCarousel";
import CompanyCard from "../../components/ui/CompanyCard";
import polixel from "../../assests/polixel.jpg";
import sterling from "../../assests/Sterling.png";
import honey from "../../assests/honeywell.png";
import land from "../../assests/landt.jpg";
import bnb from "../../assests/bnbsecurity.jpg";

export default function CompletedProjects() {
  const completedImages = [
    "/placeholder.svg?height=600&width=1200&text=Completed+Projects",
    "/placeholder.svg?height=600&width=1200&text=Corporate+Security",
    "/placeholder.svg?height=600&width=1200&text=Residential+Safety",
    "/placeholder.svg?height=600&width=1200&text=Industrial+Solutions",
    "/placeholder.svg?height=600&width=1200&text=Educational+Infrastructure",
  ];

  const completedCompanies = [
    {
      id: 1,
      name: "POLIXEL INDIA",
      image: polixel,
      description:
        "This was one of our First Project in Kolkata here we worked over here as an Installation of CCTV Cameras, FIRE, Safety, and Security Systems",
      projects: [
        "Unitech BUILDING in the Year - 2012",
        "Coal India NS ROAD - 2015",
      ],
      additionalInfo: [
        { label: "Project Type", value: "SECURITY SYSTEMS INSTALLATIONS" },
        { label: "Location", value: " KOLKATA" },
        { label: "Duration", value: "2012 - 2015" },
        {
          label: "Services",
          value: "CCTV Cameras, FIRE, Safety, and Security Systems.",
        },
        { label: "Project Value", value: "₹18,50,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 2,
      name: "STERLING & WILSON PVT LTD",
      image: sterling,
      description: " We worked as FIRE ALARM, CCTV, ACCESS, BMS & BOOM BARRIER",
      projects: [
        "JINDAL STEEL - 2014 RAIGARH",
        "NISER - 2015 PANAGARH",
        "AIRFORCE STATION - 2015",
      ],
      additionalInfo: [
        { label: "Project Type", value: "Safety Systems" },
        { label: "Location", value: "RAIGARH, PANAGARH" },
        { label: "Duration", value: "2014 - 2015" },
        {
          label: "Services",
          value: "FIRE ALARM, CCTV, ACCESS, BMS & BOOM BARRIER.",
        },
        { label: "Project Value", value: "₹15,20,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 3,
      name: "HoneyWell",
      image: honey,
      description:
        "Honeywell KOLKATA Project has been the most challenging and learning Project for our Team, here we worked as a third-hand party for HONEYWELL, where we worked on the Installation of a FIRE ALARM SYSTEM & SYSTEM. ",
      projects: [
        "NETAJI SUBASH CAHNDRA BOSE INTERNATIONAL AIRPORT - 2014",
        "KOLKATA AIRPORT - WEST BENGAL",
      ],
      additionalInfo: [
        { label: "Project Type", value: "FIRE ALARM SECURITY & SYSTEM." },
        { label: "Location", value: "WEST BENGAL" },
        { label: "Duration", value: "2014" },
        {
          label: "Services",
          value: "Campus Security, Digital Infrastructure, Safety Systems",
        },
        { label: "Project Value", value: "₹25,30,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 4,
      name: "L&T Technology Services Ltd",
      image: land,
      description:
        "L & T TECHNOLOGY SERVICES LTD We have worked on Installation of FIRE ALAM, CCTC, ACESS CONTROL, BMS, DATA & VOICE, PA, Gas Systems. ",
      projects: [
        "HOSPITAL PROJECT DUMKA HOSPITAL PROJECT JHARKHAND",
        "IIT PATNA – 2022",
        "IIT KANPUR - 2025 ",
      ],
      additionalInfo: [
        { label: "Project Type", value: "FIRE SAFTEY SERVICES" },
        { label: "Location", value: "JHARKHAND, PATNA, KANPUR" },
        { label: "Duration", value: "DECEMBER 2021" },
        { label: "Services", value: " Fire Safety" },
        { label: "Project Value", value: "₹8,50,000" },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
    {
      id: 5,
      name: "BNB Security & Automation",
      image: bnb,
      description:
        "We have been working for this company for as a CCTV, ACCESS CONTROL, FIRE ALAM, BMS, FIRE SUPPRESSION, FM 200 GAS SYSTEM, PA SYSTEMS.",
       projects: [
        "ITC SAKRAIL: ITC FOOD WAREHOUSE AT KOLKATA – SAKRAIL- 2023",
        "ITC KHURDA: ITC FOOD & BEVERAGE FACTORY - 2019",
        "ITC MUNGER: DAIRY PLANT AT MUNGER - 2020",
        "ITC GUNTUR: ITC FOOD WAREHOUSE & BEVERAGE, HYDREBAD – GUNTUR - 2018",
        "ITC AHEMDABAD: ITC FOOD & BEVERAGE AT GUJARAT – AHEMDABAD - 2023",
        "ITC RAJMUNDRY: ITC WAREHOUSE AT RAJMUNDRY – HYDREBAD - 2018",
        "CTS KOLKATA: IT SECTOR – NEW TOWN - WEST BENGAL",
        "AMAZON KOLKATA: WAREHOUSE - AMAZON, ULBERIA - WEST BENGAL - 2021 ",
        "AMAZON HYDREBAD - 2024 ",
        "LEGATO: IT SECTOR - LEGATO – BANGLORE – 2019 ",
        "ITC PACHLA: FOOD FACTORY - PACHLA - WEST BENGAL – 2024 ",
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
  ];

  return (
    <main>
      {/* Hero Section with Carousel */}
      <BackgroundCarousel
        images={completedImages}
        autoPlay={true}
        interval={5000}
        showIndicators={true}
        height="py-20"
        overlay="bg-gradient-to-r from-blue-900/90 via-purple-800/80 to-red-500/90"
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-tinos font-bold mb-6 animate-fade-in-up">
            Completed Projects
          </h1>
          <p className="text-xl md:text-2xl font-newsreader max-w-3xl mx-auto animate-fade-in-up">
            Showcasing our successful implementations and satisfied clients
            across various industries
          </p>
        </div>
      </BackgroundCarousel>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold font-tinos text-red-500 mb-2">1000+</div>
              <div className="text-slate-600 font-newsreader">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold font-tinos text-red-500 mb-2">500+</div>
              <div className="text-slate-600 font-newsreader">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold font-tinos text-red-500 mb-2">14+</div>
              <div className="text-slate-600 font-newsreader">Years Experience</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold font-tinos text-red-500 mb-2">99%</div>
              <div className="text-slate-600 font-newsreader">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-tinos text-gray-900 mb-6 animate-fade-in-up">
              Our Success Stories
            </h2>
            <p className="text-slate-600 font-newsreader text-lg max-w-3xl mx-auto animate-fade-in-up">
              Click on any company card to view detailed project information and
              implementation details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
