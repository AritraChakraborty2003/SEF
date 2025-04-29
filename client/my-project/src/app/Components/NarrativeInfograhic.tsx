import { FaLeaf } from "react-icons/fa";

const CAUSES = [
  {
    number: 1,
    title: "Food for education (primary cause)",
    color: "text-yellow-500",
    border: "border-yellow-400",
    items: [
      {
        bold: "Core Mid Day Meal program",
        text: "including kitchen facilities (vehicles, salaries, trainings etc.)",
      },
      {
        bold: "Other supporting programs",
        text: "",
      },
      {
        bold: "ICDS:",
        text: "Anganwadi feeding program (children in formative age group 3-6Y)",
      },
      {
        bold: "Other meal programs:",
        text: "Milk distribution (in association with Govt. of Karnataka), breakfast feeding",
      },
      {
        bold: "Infrastructure:",
        text: "Minimal upgrades supplementing core MDM program (seating areas with roof, infrastructure to serve (trolleys), utensils)",
      },
    ],
  },
  {
    number: 2,
    title: "Sustainability (ancillary cause)",
    color: "text-green-600",
    border: "border-green-400",
    items: [
      {
        bold: "Energy:",
        text: "Shift to renewable sources of energy",
      },
      {
        bold: "Water:",
        text: "Minimize non-cooking freshwater usage",
      },
      {
        bold: "Waste:",
        text: "Effective waste management",
      },
    ],
  },
  {
    number: 3,
    title: "Education beyond MDM (ancillary cause)",
    color: "text-orange-500",
    border: "border-orange-400",
    items: [
      {
        bold: "Scholarship program:",
        text: "Financial aid for government school children and MDM beneficiaries seeking higher education / specialized skills training",
      },
    ],
  },
];

export default function NarrativeInfographic() {
  return (
    <section className="bg-yellow-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">
          Our Narrative
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8 rounded" />
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left: Causes */}
          <div className="md:w-1/3">
            {CAUSES.map((cause) => (
              <div key={cause.number} className="mb-6">
                <div className="flex items-center mb-2">
                  <span className={`text-lg font-bold ${cause.color} mr-2`}>
                    {cause.number}
                  </span>
                  <span className={`font-semibold underline ${cause.color}`}>
                    {cause.title}
                  </span>
                </div>
                <ul className="list-disc ml-7 text-black text-sm md:text-base">
                  {cause.items.map((item, index) => (
                    <li key={index}>
                      <span className="font-bold">{item.bold}</span> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Center: Circular Infographic */}
          <div className="md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
            <div className="relative flex items-center justify-center">
              {/* Circular Progress (SVG) */}
              <svg width="220" height="220" viewBox="0 0 220 220">
                {/* Blue arc */}
                <path
                  d="M40 110a70 70 0 0 1 70-70"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Green arc */}
                <path
                  d="M110 40a70 70 0 0 1 70 70"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Orange arc */}
                <path
                  d="M180 110a70 70 0 0 1 -70 70"
                  fill="none"
                  stroke="#f59e42"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Grey background circle */}
                <circle
                  cx="110"
                  cy="110"
                  r="70"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="14"
                />
              </svg>
              {/* Center icon and text */}
              <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full">
                <FaLeaf className="text-yellow-400 text-4xl mb-2" />
                <div className="text-green-600 text-center font-bold text-lg">
                  SEF Logo
                </div>
              </div>
            </div>
            <div className="mt-4">
              <span className="bg-black text-white text-xs px-3 py-1 rounded-full font-semibold">
                Primary cause
              </span>
            </div>
          </div>

          {/* Right: Ancillary Causes */}
          <div className="md:w-1/3 flex flex-col gap-6">
            {/* Sustainability */}
            <div>
              <div className="flex items-center mb-2">
                <span className="text-lg font-bold text-green-600 mr-2">②</span>
                <span className="font-semibold text-green-600 underline">
                  Sustainability (ancillary cause)
                </span>
              </div>
              <ul className="list-disc ml-7 text-black text-sm md:text-base">
                <li>
                  <span className="font-bold">Energy:</span> Shift to renewable
                  sources of energy
                </li>
                <li>
                  <span className="font-bold">Water:</span> Minimize non-cooking
                  freshwater usage
                </li>
                <li>
                  <span className="font-bold">Waste:</span> Effective waste
                  management
                </li>
              </ul>
            </div>
            {/* Education beyond MDM */}
            <div>
              <div className="flex items-center mb-2">
                <span className="text-lg font-bold text-orange-500 mr-2">
                  ③
                </span>
                <span className="font-semibold text-orange-500 underline">
                  Education beyond MDM (ancillary cause)
                </span>
              </div>
              <ul className="list-disc ml-7 text-black text-sm md:text-base">
                <li>
                  <span className="font-bold">Scholarship program:</span>{" "}
                  Financial aid for government school children and MDM
                  beneficiaries seeking higher education / specialized skills
                  training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
