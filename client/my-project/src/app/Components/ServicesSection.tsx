/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
import {
  FaChalkboardTeacher,
  FaHandsHelping,
  FaBookOpen,
  FaGlobe,
} from "react-icons/fa";
import ScrollAnimate from "./General/Animate";

const servicesData = [
  {
    id: 1,
    icon: <FaChalkboardTeacher className="text-yellow-400 w-12 h-12" />,
    title: "Teacher Training",
    description:
      "Comprehensive programs to enhance teaching methodologies and modern pedagogical approaches.",
  },
  {
    id: 2,
    icon: <FaHandsHelping className="text-yellow-400 w-12 h-12" />,
    title: "Community Outreach",
    description:
      "Building educational bridges with local communities for sustainable development.",
  },
  {
    id: 3,
    icon: <FaBookOpen className="text-yellow-400 w-12 h-12" />,
    title: "Curriculum Design & Development",
    description:
      "Developing inclusive curricula tailored to diverse learning needs and environments.",
  },
  {
    id: 4,
    icon: <FaGlobe className="text-yellow-400 w-12 h-12" />,
    title: "Global Partnerships",
    description:
      "Collaborating with international organizations to expand educational opportunities.",
  },
];

const delay = [0.8, 0.6, 0.4, 0.2];

export default function ServicesSection() {
  return (
    <section className="bg-white pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          Our Services
        </h2>

        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {servicesData.map((service, index) => (
              <ScrollAnimate delay={delay[index % 4]} direction="left">
                <ServiceCard key={service.id} service={service} />
              </ScrollAnimate>
            ))}
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {servicesData.map((service, index) => (
              <ScrollAnimate direction="left">
                <ServiceCard key={service.id} service={service} />
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof servicesData)[number] }) {
  return (
    <div className="flex flex-col items-center text-center p-8 border-2 border-yellow-400 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="mb-6">{service.icon}</div>
      <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
      <p className="text-gray-700 leading-relaxed">{service.description}</p>
    </div>
  );
}
