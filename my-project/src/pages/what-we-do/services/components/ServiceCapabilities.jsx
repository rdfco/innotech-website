import {useState} from "react";

import {useTheme} from "../../../../context/useTheme";

function CapabilityCard({title, description, isDarkMode}) {
  const [glowPosition, setGlowPosition] = useState({x: 0, y: 0, active: false});

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    });
  };

  return (
    <div
      className="relative isolate min-h-[230px] w-full overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={() =>
        setGlowPosition((position) => ({...position, active: false}))
      }
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-[25px] transition-opacity duration-300"
        style={{
          opacity: glowPosition.active ? 1 : 0,
          background: `radial-gradient(600px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(55, 180, 120, 0.7), transparent 75%)`,
          filter: "blur(28px)",
        }}
      />
      <article
        className={`relative z-10 flex min-h-[230px] w-full items-start justify-end gap-3 overflow-hidden rounded-[25px] border border-[#37B478] px-8 py-8 shadow-[inset_1px_-1px_2px_0px_#1d5f3f] md:px-9 ${
          isDarkMode ? "bg-[#050505]" : "bg-white"
        }`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[25px] bg-[#37B478]/5" />
        <div className={`relative z-10 flex min-w-0 flex-1 flex-col items-start gap-3 ${isDarkMode ? "text-white" : "text-black"}`}>
          <h3 className="font-['Gotham'] text-2xl font-bold leading-tight">
            {title}
          </h3>
          <p className="font-['Gotham'] text-base font-normal leading-[1.4]">
            {description}
          </p>
        </div>
        <span aria-hidden className="relative z-10 mt-1 flex size-8 shrink-0 items-center justify-center">
          <span className="h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-[#37B478]" />
        </span>
      </article>
    </div>
  );
}

function ServiceCapabilities({title, items}) {
  const {isDarkMode} = useTheme();

  return (
    <section className={`self-stretch px-6 py-24 md:px-16 xl:px-[120px] ${isDarkMode ? "bg-[#050505]" : "bg-white"}`}>
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-8">
        <div className="relative flex w-full flex-col items-start justify-center gap-2">
          <div className="absolute left-[-14px] top-[-19px] size-16 rounded-full border border-[#37B478]" />
          <h2 className={`relative z-10 font-['Gotham'] text-4xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
            {title}
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-[42px] overflow-visible lg:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={index === items.length - 1 ? "lg:col-span-2" : ""}
            >
              <CapabilityCard {...item} isDarkMode={isDarkMode} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCapabilities;
