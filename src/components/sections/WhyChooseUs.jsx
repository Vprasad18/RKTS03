"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { Play, Pause, Shield, Users, Clock, Award } from "lucide-react";
import video from "../../assests/vikashservice.jpeg"

export default function WhyChooseUs() {
  const [isPlaying, setIsPlaying] = useState(false);

  const reasons = [
    {
      icon: Shield,
      title: "Trusted Security",
      description:
        "Industry-leading security solutions with proven track record",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with extensive technical expertise",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support and maintenance services",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description:
        "Premium quality installations with comprehensive warranties",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold font-tinos text-lg">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-newsreader text-gray-900 mt-3 mb-6">
            Why We're the <span className="text-red-500">Right Choice</span> for
            You
          </h2>
          <p className="text-slate-700  font-serif text-lg max-w-3xl mx-auto">
            Discover what sets RK Technical Support apart from the competition
            and why thousands of clients trust us with their safety and security
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={video}
                alt="RK Technical Support Video"
                className="w-full h-80 object-contain"
              />

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-red-600 hover:bg-red-800 text-white rounded-full w-16 h-16 p-0 transition-colors duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </Button>
              </div>

              {/* YouTube Embed (Hidden by default, shown when play is clicked) */}
              {isPlaying && (
                <div className="absolute inset-0">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9tcTp3X3DV4?autoplay=1"
                    title="RK Technical Support Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            {/* Video Caption */}
            <div className="mt-4 text-center">
              <p className="text-slate-700  font-tinos">
                Watch our introduction video to learn more about our services
                and expertise
              </p>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-left">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-red-600 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-tinos font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-700 font-newsreader">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
