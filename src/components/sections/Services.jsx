import { Link } from "react-router-dom";
import Button from "../ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import {
  Camera,
  AlarmClock,
  Flame,
  Droplet,
  Lock,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Camera,
      title: "CCTV Surveillance & Monitoring",
      description:
        "High-definition and IP-based surveillance camera solutions for real-time monitoring and security.",
      features: [
        "HD & 4K Camera Systems",
        "Remote Monitoring Capabilities",
        "Night Vision Technology",
        "24/7 Recording & Storage",
        "Mobile App Integration",
        "Motion Detection Alerts",
      ],
    },
    {
      icon: AlarmClock,
      title: "Fire Alarm Systems",
      description:
        "Installation of intelligent and conventional fire alarm systems, control panels, and detection devices for early warning and emergency response.",
      features: [
        "Intelligent Fire Alarm Panels",
        "Conventional Detection Systems",
        "Smoke & Heat Detectors",
        "Manual Call Points & Hooters",
        "BMS & Security Integration",
      ],
    },
    {
      icon: Flame,
      title: "Fire Suppression Systems",
      description:
        "Specialized gas-based, water mist, and foam-based fire suppression systems for high-risk environments.",
      features: [
        "FM-200, NOVEC 1230, CO2",
        "Water Mist Systems",
        "Foam-Based Suppression",
        "Automatic Discharge Mechanisms",
        "Testing & Commissioning",
        "Fire Alarm Integration",
      ],
    },
    {
      icon: Phone,
      title: "Public Address & Voice Evacuation",
      description:
        "Integrated solutions for clear and effective communication during emergencies.",
      features: [
        "Emergency Broadcast Systems",
        "Zone-Wise Audio Control",
        "Voice Evacuation Integration",
        "Fire Alarm Compatibility",
        "Speakers & Amplifiers",
        "Facility-Wide Communication",
      ],
    },
    {
      icon: Lock,
      title: "Access Control & Security Systems",
      description:
        "Secure your premises with cutting-edge access control solutions integrated with safety protocols.",
      features: [
        "RFID/Biometric Systems",
        "Smart Card Readers",
        "Turnstile Integration",
        "Real-Time Entry Logs",
        "Multi-Zone Authorization",
        "Fire Alarm Compatibility",
      ],
    },
    {
      icon: Droplet,
      title: "WLD Systems",
      description:
        "Sensor-based water leak detection systems for server rooms, data centers, and critical facilities.",
      features: [
        "Leak Detection Sensor Installation",
        "Zone-Based Monitoring",
        "Real-Time SMS/Email Alerts",
        "BMS Integration",
        "Wired & Wireless Options",
        "Auto Shutdown on Detection",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold font-tinos text-lg">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-newsreader text-gray-900 mt-4 mb-3">
            Professional{" "}
            <span className="text-red-600">Technical Services</span>
          </h2>
          <p className="text-slate-700 font-serif text-lg max-w-3xl mx-auto">
            We offer a comprehensive range of safety and security solutions
            tailored to meet your specific needs and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 group animate-fade-in-up"
              >
                <CardHeader>
                  <div className="bg-red-600 rounded-lg w-12 h-12 flex items-center justify-center mb-2 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 font-tinos">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-700 font-newsreader ">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-700 "
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-red-600 group-hover:text-white group-hover:border-red-800 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center">
          <Link to="/services">
            <Button className="bg-red-600 text-white hover:bg-red-800 transition-colors duration-300">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
