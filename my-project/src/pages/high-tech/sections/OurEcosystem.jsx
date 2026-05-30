import {useState} from "react";

import IDC from "../../../assets/images/industries/IDC.png";
import itonicsImage from "../../../assets/images/experts/itonics.png";
import BrightIdea from "../../../assets/images/industries/BrightIdea.png";
import excludeShape from "../../../assets/icons/Exclude.svg";
import excludeBlackShape from "../../../assets/icons/ExcludeBlack.svg";
import {useTheme} from "../../../context/useTheme";

const expertCards = [
  {
    id: "IDC",
    image: IDC,
    title: "AI Enabled Engineering",
    subtitle: "Deliverables, review and standards assurance & compliance",
  },
  {
    id: "itonics",
    image: itonicsImage,
    title: "The Workshop Wizard ",
    subtitle: "Plan your workshops with AI assistant",
  },
  {
    id: "BrightIdea",
    image: BrightIdea,
    title: "Cisco case report",
    subtitle: "How Cisco Is Achieving Millions In Innovation Outcomes",
  },
];

function ExpertCard({image, title, subtitle, isDarkMode}) {
  const [pos, setPos] = useState({x: 0, y: 0, active: false});

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setPos((previousPos) => ({...previousPos, active: false}));
  };

  return (
    <div
      className="relative isolate min-w-0 flex-1 h-full overflow-visible" // ← h-full اضافه شد
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: pos.active ? 1 : 0,
          background: `
            radial-gradient(
              600px circle at ${pos.x}px ${pos.y}px,
              rgba(55, 180, 120, 0.7),
              transparent 75%
            )
          `,
          filter: "blur(28px)",
          borderRadius: "25px",
        }}
      />

      <article
        className={`relative z-10 flex h-[250px] min-w-0 flex-col overflow-hidden rounded-[25px] border border-[#37B478] p-6 sm:p-9 ${
          isDarkMode ? "bg-[#050505]" : "bg-white"
        }`}
      >
        {" "}
        {/* ← h-full + flex-col */}
        <img
          className="pointer-events-none absolute left-[-34px] top-[-72px] h-[242px] w-[234px] rotate-[10deg] opacity-100"
          src={isDarkMode ? excludeShape : excludeBlackShape}
          alt=""
          aria-hidden="true"
        />
        <div className="relative z-10 flex w-full items-end justify-between gap-4">
          <div className="relative size-[94px] shrink-0 overflow-hidden rounded-bl-[25px] rounded-br-[100px] rounded-tl-[25px] rounded-tr-[100px]">
            <img className="block size-full" src={image} alt="" />
          </div>

          <button
            className="shrink-0 rounded-bl-[30px] rounded-br-[20px] rounded-tr-[20px] bg-[#22C55E] px-4 py-2 font-['Gotham'] text-base font-bold leading-none text-black shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-[#16A34A] hover:shadow-xl active:scale-95"
            type="button"
          >
            Exclusive content
          </button>
        </div>
        {/* بخش متن - با mt-auto برای چسباندن به پایین */}
        <div
          className={`relative z-10 mt-auto flex w-full flex-col ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <h3 className="font-['Gotham'] text-2xl font-bold leading-none">
            {title}
          </h3>
          <p className="mt-1 font-['Gotham'] text-base font-normal leading-none">
            {subtitle}
          </p>
        </div>
      </article>
    </div>
  );
}

function OurExpert() {
  const {isDarkMode} = useTheme();

  return (
    <section
      className={`self-stretch px-6 py-14 md:px-16 xl:px-[120px] xl:py-[60px] ${
        isDarkMode ? "bg-[#050505]" : "bg-white"
      }`}
    >
      <div className="flex w-full flex-col items-start gap-8">
        <div className="relative flex w-full items-center gap-[15px]">
          <div className="absolute left-[-14px] top-[-19px] size-[62px] rounded-full border border-[#37B478]" />
          <h2
            className={`relative z-10 font-['Gotham'] text-4xl font-bold leading-normal ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            LATEST IN OUR ECOSYTEM OF CHANGE
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 overflow-visible lg:grid-cols-3 items-stretch">
          {" "}
          {/* ← items-stretch اضافه شد */}
          {expertCards.map((card) => (
            <ExpertCard key={card.id} {...card} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurExpert;
