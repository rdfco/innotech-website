import {useRef, useState} from "react";

import {useTheme} from "../../context/useTheme";
import CareersImage from "../../assets/images/home/Careers.png";
import CubeIcon from "../../assets/images/home/CubeIcon.png";
import DealHandshake from "../../assets/images/home/DealHandshake.png";
import EmployeesIcon from "../../assets/images/home/EmployeesIcon.png";
import FactoryIcon from "../../assets/images/home/FactoryIcon.png";
import HistoryCurve from "../../assets/images/home/HistoryCurve.png";
import OurExpertPerson from "../../assets/images/home/OurExpertPerson.png";
import WhiteHistoryCurve from "../../assets/images/home/WhiteHistoryCurve.png";
import WindTurbines from "../../assets/images/home/WindTurbines.png";
import excludeShape from "../../assets/icons/Exclude.svg";
import excludeBlackShape from "../../assets/icons/ExcludeBlack.svg";

const stats = [
  EmployeesIcon,
  FactoryIcon,
  DealHandshake,
  CubeIcon,
];

const experts = Array.from({length: 6}, (_, index) => ({
  id: index,
  name: "Golam reza Jamshidi",
  role: "CEO of Nouri Petrochemical Company",
}));

function SectionTitle({children, textColor, weight = "font-normal"}) {
  return (
    <div className="relative inline-flex w-full items-center gap-3.5">
      <div className="absolute left-[-14px] top-[-19px] size-16 rounded-full border border-[#37B478]" />
      <h2 className={`relative z-10 flex-1 font-['Gotham'] text-4xl ${weight} ${textColor}`}>
        {children}
      </h2>
    </div>
  );
}

function ExpertCard({image, title, subtitle, isDarkMode}) {
  const [position, setPosition] = useState({x: 0, y: 0, active: false});

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setPosition((current) => ({...current, active: false}));
  };

  return (
    <div
      className="relative isolate h-full min-w-0 flex-1 overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: position.active ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(55, 180, 120, 0.7), transparent 75%)`,
          filter: "blur(28px)",
          borderRadius: "25px",
        }}
      />

      <article
        className={`relative z-10 flex h-[250px] min-w-0 flex-col overflow-hidden rounded-[25px] border border-[#37B478] p-6 sm:p-9 ${
          isDarkMode ? "bg-[#050505]" : "bg-white"
        }`}
      >
        <img
          className="pointer-events-none absolute left-[-34px] top-[-72px] h-[242px] w-[234px] rotate-[10deg] opacity-100"
          src={isDarkMode ? excludeShape : excludeBlackShape}
          alt=""
          aria-hidden
        />
        <div className="relative z-10 flex w-full items-end justify-between gap-4">
          <div className="relative size-[94px] shrink-0 overflow-hidden rounded-bl-[25px] rounded-br-[100px] rounded-tl-[25px] rounded-tr-[100px]">
            <img className="block size-full object-cover" src={image} alt="" />
          </div>

          <button
            className="shrink-0 rounded-bl-[30px] rounded-br-[20px] rounded-tr-[20px] bg-[#22C55E] px-4 py-2 font-['Gotham'] text-base font-bold leading-none text-black shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-[#16A34A] hover:shadow-xl active:scale-95"
            type="button"
          >
            Exclusive content
          </button>
        </div>

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

function WhoWeAre() {
  const {isDarkMode} = useTheme();
  const pageBackground = isDarkMode ? "bg-[#050505]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const invertedTextColor = isDarkMode ? "text-black" : "text-white";
  const inverseCardBackground = isDarkMode ? "bg-white" : "bg-black";
  const historyImage = isDarkMode ? HistoryCurve : WhiteHistoryCurve;
  const historyScrollRef = useRef(null);
  const historyDragRef = useRef({active: false, startX: 0, scrollLeft: 0});
  const [historyScrollProgress, setHistoryScrollProgress] = useState(0);
  const [isHistoryDragging, setIsHistoryDragging] = useState(false);

  const updateHistoryScrollProgress = () => {
    const element = historyScrollRef.current;

    if (!element) return;

    const scrollableWidth = element.scrollWidth - element.clientWidth;
    const progress = scrollableWidth
      ? (element.scrollLeft / scrollableWidth) * 100
      : 0;

    setHistoryScrollProgress(progress);
  };

  const handleHistoryRangeChange = (event) => {
    const element = historyScrollRef.current;
    const progress = Number(event.target.value);

    setHistoryScrollProgress(progress);

    if (!element) return;

    const scrollableWidth = element.scrollWidth - element.clientWidth;
    element.scrollLeft = (scrollableWidth * progress) / 100;
  };

  const handleHistoryPointerDown = (event) => {
    const element = historyScrollRef.current;

    if (!element) return;

    historyDragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: element.scrollLeft,
    };

    setIsHistoryDragging(true);
    element.setPointerCapture?.(event.pointerId);
  };

  const handleHistoryPointerMove = (event) => {
    const element = historyScrollRef.current;

    if (!element || !historyDragRef.current.active) return;

    element.scrollLeft =
      historyDragRef.current.scrollLeft -
      (event.clientX - historyDragRef.current.startX);
    updateHistoryScrollProgress();
  };

  const stopHistoryDrag = (event) => {
    const element = historyScrollRef.current;

    historyDragRef.current.active = false;
    setIsHistoryDragging(false);

    if (element?.hasPointerCapture?.(event.pointerId)) {
      element.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <main className={`w-full overflow-hidden pt-36 font-['Gotham'] transition-colors duration-500 ${pageBackground}`}>
      <style>
        {`
          .history-scroll-area::-webkit-scrollbar {
            display: none;
          }

          .history-scroll-area {
            scrollbar-width: none;
          }

          .history-range::-webkit-slider-runnable-track {
            height: 2px;
            border-radius: 999px;
            background: #37B478;
          }

          .history-range::-webkit-slider-thumb {
            appearance: none;
            width: 28px;
            height: 8px;
            margin-top: -3px;
            border-radius: 999px;
            background: #37B478;
            box-shadow: 0 0 16px rgba(55, 180, 120, 0.45);
            cursor: grab;
          }

          .history-range:active::-webkit-slider-thumb {
            cursor: grabbing;
          }

          .history-range::-moz-range-track {
            height: 2px;
            border-radius: 999px;
            background: #37B478;
          }

          .history-range::-moz-range-thumb {
            width: 28px;
            height: 8px;
            border: 0;
            border-radius: 999px;
            background: #37B478;
            box-shadow: 0 0 16px rgba(55, 180, 120, 0.45);
            cursor: grab;
          }
        `}
      </style>
      <section className="flex h-[430px] flex-col items-center justify-start gap-2 px-28 py-14">
        <div className="size-6 rounded-full bg-[#37B478]" />
        <h1 className={`font-['Gotham'] text-7xl font-semibold ${textColor}`}>
          Who we are
        </h1>
        <p className={`w-[700px] text-center font-['Gotham'] text-xl leading-[1.35] ${textColor}`}>
          Energy is life. It powers industries, empowers communities, and
          builds societies. As the traditional boundaries of the industry
          continue to blur, BCG&rsquo;s energy consultants light the way to the
          future of energy for our clients.
        </p>
      </section>

      <section className="flex items-center justify-center px-28 py-14">
        <div className="relative flex min-w-px flex-1 flex-col items-start justify-center gap-4 p-9">
          <div className="absolute left-[17px] top-[20px] size-16 rounded-full border border-[#37B478]" />
          <h2 className={`w-full font-['Gotham'] text-4xl font-bold ${textColor}`}>
            INNOTECH IS IN
          </h2>
          <div className="flex w-full items-center justify-center px-6">
            <p className={`min-w-px flex-1 whitespace-pre-wrap font-['Gotham'] text-lg font-light leading-normal ${textColor}`}>
              The world needs energy&mdash;affordable, reliable, and sustainable
              energy. But meeting the world&rsquo;s energy requirements with
              net-zero climate impact is one of today&rsquo;s most complex
              challenges.
              <br />
              <br />
              Energy companies need to leverage the latest technologies,
              re-engineer processes, and rethink business models to drive
              change. BCG works with clients to build{" "}
              <span className="underline">sustainable</span>, competitive
              energy solutions to achieve a net-zero energy world for all.
            </p>
          </div>
        </div>

        <div className="relative size-96 shrink-0 overflow-hidden rounded-[50px] px-32 py-36">
          <img
            src={WindTurbines}
            alt=""
            aria-hidden
            className="absolute left-[-168px] top-[-17px] h-96 w-[706px] max-w-none object-cover"
          />
        </div>
      </section>

      <section className="relative flex flex-col items-start gap-8 py-14">
        <div className="flex w-full flex-col items-center gap-2 px-28">
          <div className="size-6 rounded-full bg-[#37B478]" />
          <h2 className={`font-['Gotham'] text-4xl font-bold ${textColor}`}>
            History
          </h2>
        </div>

        <div
          ref={historyScrollRef}
          onScroll={updateHistoryScrollProgress}
          onPointerDown={handleHistoryPointerDown}
          onPointerMove={handleHistoryPointerMove}
          onPointerUp={stopHistoryDrag}
          onPointerCancel={stopHistoryDrag}
          onPointerLeave={stopHistoryDrag}
          className={`history-scroll-area relative h-[770px] w-screen select-none overflow-x-auto overflow-y-hidden ${
            isHistoryDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <img
            src={historyImage}
            alt=""
            aria-hidden
            draggable={false}
            className="h-[770px] w-[2200px] max-w-none object-fill"
          />
        </div>

        <div className="flex w-full justify-center px-28">
          <input
            aria-label="Scroll history timeline"
            type="range"
            min="0"
            max="100"
            value={historyScrollProgress}
            onChange={handleHistoryRangeChange}
            className="history-range h-4 w-full cursor-grab appearance-none bg-transparent active:cursor-grabbing"
          />
        </div>
      </section>

      <section className="flex items-center justify-between px-28 py-14">
        {stats.map((icon) => (
          <div
            key={icon}
            className="flex h-44 min-w-[220px] items-center justify-center rounded-[32px] p-5 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-emerald-500"
          >
            <img
              src={icon}
              alt=""
              aria-hidden
              className="h-36 w-auto object-contain"
            />
          </div>
        ))}
      </section>

      <section className="flex h-[677px] flex-col items-start gap-2.5 overflow-hidden px-28 py-14">
        <div
          className={`flex h-[557px] w-full items-center justify-center overflow-hidden rounded-[50px] ${
            isDarkMode ? "bg-white" : "bg-black"
          }`}
        >
          <button
            type="button"
            aria-label="Play video"
            className="transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <div className="size-24 relative overflow-hidden">
              <div className="size-20 left-[7.83px] top-[7.83px] absolute bg-zinc-300/30 rounded-[3px]" />
              <div className="w-6 h-8 left-[39.17px] top-[31.33px] absolute bg-zinc-300/70 rounded-[3px]" />
            </div>
          </button>
        </div>
      </section>

      <section className="flex flex-col items-start gap-8 overflow-visible px-28 py-14">
        <SectionTitle textColor={textColor} weight="font-bold">
          Our Expert in inception
        </SectionTitle>
        <div className="grid w-full grid-cols-3 items-stretch gap-8 overflow-visible">
          {experts.map((expert) => (
            <ExpertCard
              key={expert.id}
              image={OurExpertPerson}
              title={expert.name}
              subtitle={expert.role}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </section>

      <section className="flex h-[640px] flex-col items-start gap-2.5 overflow-hidden px-28 py-14">
        <div className={`flex flex-1 items-start justify-center gap-8 overflow-hidden rounded-[50px] transition-colors duration-500 ${inverseCardBackground}`}>
          <div className="flex flex-1 flex-col items-start justify-start gap-8 self-stretch p-16">
            <SectionTitle textColor={invertedTextColor} weight="font-bold">
              Careers
            </SectionTitle>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full items-start gap-3">
                <span className="mt-3 size-2.5 shrink-0 rounded-full bg-[#37B478]" />
                <h3 className={`w-full font-['Gotham'] text-3xl font-normal leading-[1.2] ${invertedTextColor}`}>
                  InnotechCo launches INCEPTION &mdash; an AI-powered innovation
                  management system
                </h3>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[50px] bg-[#22C55E] px-4 py-2 font-['Gotham'] text-2xl font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#16A34A] hover:shadow-xl active:scale-95"
            >
              Go to store
            </button>
          </div>
          <div className="flex w-[496px] items-end justify-end self-stretch overflow-hidden">
            <img
              src={CareersImage}
              alt=""
              aria-hidden
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhoWeAre;
