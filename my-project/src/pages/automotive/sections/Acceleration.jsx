import {useTheme} from "../../../context/useTheme";

const Introduction = () => {
  const {isDarkMode} = useTheme();
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <div
      className={`self-stretch px-28 py-14 inline-flex flex-col justify-start items-start gap-2.5 ${
        isDarkMode ? "bg-[#050505]" : "bg-white"
      }`}
    >
      <div className="self-stretch relative flex flex-col justify-center items-start gap-4">
        {/* Green Circle */}
        <div className="size-16 left-[10px] top-[-19px] absolute rounded-full border border-[#37B478]" />

        {/* Title */}
        <div className={`self-stretch justify-start px-6 text-4xl font-bold font-['Gotham'] ${textColor}`}>
          ACCELERATION
        </div>

        {/* Content */}
        <div className="self-stretch px-12 inline-flex justify-center items-center gap-2.5">
          <div className="flex-1 justify-start">
            <span className={`text-lg font-light font-['Gotham'] ${textColor}`}>
              Automotive manufacturers and mobility ecosystems face accelerating
              platform disruption, fragmented operational infrastructures, and
              rising intelligent systems complexity. Advancing automotive
              modernization requires connected mobility architectures,
              AI-enabled operations, and scalable digital engineering
              ecosystems.
              <br />
              <br />
              Maximize mobility resilience through enterprise consulting for
              OEMs, smart mobility operators, automotive suppliers, and
              intelligent transportation ecosystems. Our specialized frameworks
              deploy predictive automotive analytics, digital mobility
              infrastructures, and AI-enabled transformation systems to
              accelerate scalable operational modernization.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
