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
        <div className="size-16 left-[05px] top-[-19px] absolute rounded-full border border-[#37B478]" />

        {/* Title */}
        <div className={`self-stretch justify-start px-6 text-4xl font-bold font-['Gotham'] ${textColor}`}>
          ACCELERATION
        </div>

        {/* Content */}
        <div className="self-stretch px-12 inline-flex justify-center items-center gap-2.5">
          <div className="flex-1 justify-start">
            <span className={`text-lg font-light font-['Gotham'] ${textColor}`}>
              High tech enterprises and AI-native organizations face
              accelerating infrastructure complexity, fragmented innovation
              systems, and continuous platform disruption. Advancing enterprise
              modernization requires intelligent digital architectures,
              AI-enabled operations, and scalable technology governance across
              distributed ecosystems.
              <br />
              <br />
              Maximize technology resilience through enterprise consulting for
              AI firms, cloud platforms, software ecosystems, semiconductor
              operators, and intelligent infrastructure providers. Our
              specialized frameworks deploy predictive technology analytics,
              digital transformation systems, and innovation intelligence to
              accelerate scalable high-tech modernization.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
