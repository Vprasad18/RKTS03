"use client";

import { useState } from "react";
import { Card, CardContent } from "./Card";
import Modal from "./Modal";
import { ExternalLink, Calendar, MapPin, Award } from "lucide-react";

export default function CompanyCard({ company }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Enhanced Company Card */}
      <div className="group relative">
        <Card
          className="cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white via-gray-50 to-blue-50 animate-fade-in-up"
          onClick={openModal}
        >
          <CardContent className="p-0">
            {/* Image Container with Overlay */}
            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={company.image || "/placeholder.svg"}
                alt={company.name}
                className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay with Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <ExternalLink className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {company.status || "Completed"}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-tinos font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {company.name}
              </h3>

              {/* Quick Info */}
              <div className="space-y-2 mb-4">
                {company.location && (
                  <div className="flex items-center font-newsreader text-sm text-slate-700">
                    <MapPin className="w-4 h-4 mr-2 -mt-1 text-blue-500" />
                    <span>{company.location}</span>
                  </div>
                )}
                {company.year && (
                  <div className="flex items-center font-newsreader text-sm text-slate-700">
                    <Calendar className="w-4 h-4 mr-2 -mt-1 text-green-500" />
                    <span>{company.year}</span>
                  </div>
                )}
                {company.value && (
                  <div className="flex items-center font-newsreader text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-2 -mt-1 text-purple-500" />
                    <span>{company.value}</span>
                  </div>
                )}
              </div>

              {/* Description Preview */}
              <p className="text-gray-600 font-serif text-sm line-clamp-2 mb-4">
                {company.description}
              </p>

              {/* Action Button */}
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-semibold font-tinos text-sm group-hover:text-blue-700 transition-colors duration-300">
                  View Details
                </span>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Enhanced Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Project Details">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
            <div className="inline-block p-4 bg-white rounded-2xl shadow-lg mb-6">
              <img
                src={company.image || "/placeholder.svg"}
                alt={company.name}
                className="w-32 h-20 object-contain mx-auto"
              />
            </div>
            <h2 className="text-3xl font-bold font-tinos text-red-600 mb-2">
              {company.name}
            </h2>
            <div className="flex items-center font-serif justify-center space-x-4 text-sm text-slate-700">
              {company.location && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{company.location}</span>
                </div>
              )}
              {company.year && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-green-500" />
                  <span>{company.year}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold font-newsreader text-gray-900 mb-4 flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 -mt-1"></div>
              Project Overview
            </h3>
            <p className="text-gray-700 text-lg font-serif leading-relaxed mb-6">
              {company.description}
            </p>

            {/* Project Details */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold font-newsreader text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 -mt-1"></div>
                Project
              </h4>
              {company.projects.map((project, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-8 h-8 -mt-1 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-700 font-newsreader font-medium">
                      {project}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Grid */}
          {company.additionalInfo && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {company.additionalInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100"
                >
                  <h5 className="font-semibold text-red-800 mb-2 text-sm uppercase tracking-wide">
                    {info.label}
                  </h5>
                  <p className="text-red-600 font-medium">{info.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
            <h4 className="text-lg font-semibold font-tinos text-green-800 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Project Success
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold font-serif text-green-600">
                  100%
                </div>
                <div className="text-sm font-newsreader text-green-700">
                  Completion
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-serif text-blue-600">
                  On Time
                </div>
                <div className="text-sm font-newsreader text-blue-700">
                  Delivery
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-serif text-purple-600">
                  5★
                </div>
                <div className="text-sm font-newsreader text-purple-700">
                  Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
