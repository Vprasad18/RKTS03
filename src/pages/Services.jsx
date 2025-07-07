import {
  AlarmClock,
  Camera,
  Shield,
  Lock,
  Phone,
  Flame,
  Cpu,
  BugOff,
  Wrench,
  Droplet,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import Button from "../components/ui/Button";
import BackgroundCarousel from "../components/ui/BackgroundCarousel";

export default function Services() {
  const servicesImages = [
    "/placeholder.svg?height=600&width=1200&text=Professional+Services",
    "/placeholder.svg?height=600&width=1200&text=CCTV+Installation",
    "/placeholder.svg?height=600&width=1200&text=Fire+Safety+Systems",
    "/placeholder.svg?height=600&width=1200&text=Access+Control",
    "/placeholder.svg?height=600&width=1200&text=Network+Solutions",
  ];

  const services = [
    {
      icon: Camera,
      title: "CCTV Surveillance & Monitoring",
      description:
        "Installation of intelligent and conventional fire alarm systems, control panels, and detection devices for early warning and emergency response.",
      features: [
        "HD & 4K Camera Systems",
        "Remote Monitoring Capabilities",
        "Night Vision Technology",
        "24/7 Recording & Storage",
        "Mobile App Integration",
        "Motion Detection Alerts",
      ],
      // price: "Starting from ₹15,000",
    },
    {
      icon: AlarmClock,
      title: "Fire Alarm Systems",
      description:
        "Installation of intelligent and conventional fire alarm systems, control panels, and detection devices for early warning and emergency response.",
      features: [
        "Installation of Intelligent Fire Alarm Panels",
        "Conventional Fire Detection Systems",
        "Smoke and Heat Detectors",
        "Manual Call Points and Hooters",
        "Early Warning Emergency Response Integration",
        "Fire Alarm System Integration with BMS & Security Systems",
      ],
      // price: "Starting from ₹25,000",
    },
    {
      icon: Flame,
      title: "Fire Suppression Systems",
      description:
        "Specialized in gas-based, water mist, and foam-based fire suppression systems for high-risk environments.",
      features: [
        "Gas-Based Suppression (FM-200, NOVEC 1230, CO2)",
        "Water Mist Systems",
        "Foam-Based Fire Suppression",
        "Automated Release Mechanisms",
        "Suppression System Testing & Commissioning",
        "System Integration with Fire Alarm and BMS",
      ],
      // price: "Starting from ₹20,000",
    },
    {
      icon: Phone,
      title: "Public Address & Voice Evacuation Systems",
      description:
        "Integrated solutions for clear and effective communication during emergencies.",
      features: [
        "Emergency Broadcast System Setup",
        "Zone-Wise Audio Management",
        "Voice Evacuation System for High-Risk Areas",
        "Integration with Fire Alarm Systems",
        "Speaker & Amplifier Installation",
        "Clear Audio Distribution Across Large Facilities",
      ],
      // price: "Starting from ₹12,000",
    },
    {
      icon: Lock,
      title: "Access Control & Security Systems",
      description:
        "Secure your premises with cutting-edge access control solutions that seamlessly work with fire safety protocols.",
      features: [
        "RFID/Biometric Access Systems",
        "Smart Card Readers",
        "Turnstile and Flap Barrier Integration",
        "Real-Time Entry/Exit Logs",
        "Multi-Layered Access Authorization",
        "Integration with Fire and Alarm Systems",
      ],
      // price: "Starting from ₹18,000",
    },
    {
      icon: Droplet,
      title: "WLD SYSTEMS",
      description:
        "Sensor-based water leak detection systems for server rooms, data centers, and critical facilities.",
      features: [
        "Installation of Water Leak Detection Sensors",
        "Zone-Based Monitoring System",
        "Real-Time Leak Alerts via SMS/Email",
        "Integration with BMS and Fire Systems",
        "Wired and Wireless Sensor Options",
        "Automatic Shutdown/Control Trigger on Leak Detection",
      ],
      // price: "Starting from ₹10,000",
    },
    {
      icon: Cpu,
      title: "BMS SYSTEMS",
      description:
        "Smart building automation systems integrating safety, HVAC, lighting, and energy systems.",
      features: [
        "Centralized Monitoring of HVAC, Lighting, and Safety",
        "Automation of Safety Protocols",
        "Integration with Fire and Access Systems",
        "Energy Consumption Monitoring",
        "Real-Time System Diagnostics",
        "Custom Dashboard Interfaces",
      ],
      // price: "Starting from ₹10,000",
    },
    {
      icon: BugOff,
      title: "RODENT REPPLER SYSTEMS ",
      description:
        "Electronic rodent repeller systems for industrial and food-grade environments, using non-toxic deterrents.",
      features: [
        "Ultrasonic Repeller Installation",
        "Coverage Planning for Sensitive Zones",
        "Non-Toxic Pest Deterrent Solutions",
        "24/7 Operational Systems",
        "Power-Efficient Hardware",
        "Maintenance and Monitoring",
      ],
      // price: "Starting from ₹10,000",
    },
    {
      icon: Shield,
      title: "Gas Suppression Systems",
      description:
        "Clean agent gas suppression systems for mission-critical areas like server rooms and data centers.",
      features: ["NOVAC 1230", "FM 200", "CO2", "Energen Systems"],
      // price: "Starting from ₹10,000",
    },
    {
      icon: Wrench,
      title: "Annual Maintenance Contracts (AMC)",
      description:
        "Preventive and corrective maintenance for all safety and security systems through cost-effective AMC plans.",
      features: [
        "Scheduled System Inspections",
        "On-Site Repairs & Replacements",
        "Testing of Fire, Safety & Security Systems",
        "24/7 Technical Support",
      ],
      // price: "Starting from ₹10,000",
    },
  ];

  return (
    <main>
      {/* Hero Section with Carousel */}
      <BackgroundCarousel
        images={servicesImages}
        autoPlay={true}
        interval={5000}
        showIndicators={true}
        height="py-20"
        overlay="bg-gradient-to-r from-blue-900/90 via-purple-800/80 to-red-500/90"
      >
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive safety and security solutions tailored to your needs
          </p>
        </div>
      </BackgroundCarousel>

      {/* Rest of the component remains the same */}
      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="bg-red-500 rounded-lg w-12 h-12 flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">
                          {service.title}
                        </CardTitle>
                        <div className="text-red-500 font-semibold">
                          {service.price}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fade-in-up">
              Simple, transparent, and efficient process from consultation to
              completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Free site survey and requirement analysis",
              },
              {
                step: "02",
                title: "Planning",
                description: "Custom solution design and quotation",
              },
              {
                step: "03",
                title: "Installation",
                description:
                  "Professional installation by certified technicians",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and 24/7 support",
              },
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in-up">
                <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
