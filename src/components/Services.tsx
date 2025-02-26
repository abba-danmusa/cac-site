'use client';
import React, { useState, ComponentType } from 'react';
import { FileCheck2, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Service {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  steps: {
    title: string;
    description: string;
    steps: string[];
  };
}

const services: Service[] = [
  {
    id: 'business',
    icon: FileCheck2,
    title: 'Business Registration',
    description: 'Register your Company, Business name, and incorporated Trustees.',
    steps: {
      title: 'Registration Steps',
      description:
        'Registration on the COMPANY REGISTRATION PORTAL (CRP) is now end-to-end, with electronic certificates and certified extracts available.',
      steps: [
        'Check for availability of the Business Name on the CRP',
        'Complete pre-registration form',
        'Pay filing fee',
        'Submit application',
        'Print certificate',
      ],
    },
  },
  {
    id: 'trustee',
    icon: FileSpreadsheet,
    title: 'Incorporated Trustee Registration',
    description:
      'Register your NGO, Association, or Religious Organization as Incorporated Trustees.',
    steps: {
      title: 'Trustee Registration Steps',
      description:
        'Complete registration process for Incorporated Trustees with the Corporate Affairs Commission of Nigeria.',
      steps: [
        'Check for availability of proposed Incorporated Trustee name',
        'Complete pre-registration form and upload relevant registration documents– CAC-IT01',
        'Pay filing fee',
      ],
    },
  },
];

function ServicesSection() {
  const [activeService, setActiveService] = useState<string>(services[0].id);
  const currentService: Service =
    services.find((service) => service.id === activeService) || services[0];
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div className="h-fit bg-white">
      <div className="bg-gradient-to-b bg-white">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Our <span className="text-green-600">Services</span>
          </h2>
          {/* <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto mb-16">
            Streamlined registration services for businesses and organizations in Nigeria.
            Start your journey with CAC today.
          </p> */}

          <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-50 p-6">
                <nav className="space-y-4">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                          activeService === service.id
                            ? 'bg-green-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-green-50'
                        } ${index === 1 && 'md:hover:shadow-lg md:hover:scale-105 md:transition-transform md:duration-300'}`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-2 rounded-lg ${
                              activeService === service.id
                                ? 'bg-green-500'
                                : 'bg-green-50'
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                activeService === service.id
                                  ? 'text-white'
                                  : 'text-green-600'
                              }`}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{service.title}</h3>
                            <p
                              className={`text-sm mt-1 ${
                                activeService === service.id
                                  ? 'text-green-100'
                                  : 'text-gray-500'
                              }`}
                            >
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="md:w-2/3 p-8">
                <div
                  className={`animate-fade-in ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10 transition-all duration-500'
                  }`}
                  ref={ref}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <currentService.icon className="w-8 h-8 text-green-600 mr-3" />
                    {currentService.title}
                  </h3>

                  <div className="bg-green-50 rounded-xl p-6 mb-8">
                    <h4 className="font-bold text-xl text-gray-900 mb-3 flex items-center">
                      <ArrowRight className="w-5 h-5 text-green-600 mr-2" />
                      {currentService.steps.title}
                    </h4>
                    <p className="text-gray-600 mb-6">{currentService.steps.description}</p>
                  </div>

                  <div className="space-y-4">
                    {currentService.steps.steps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-semibold">{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;