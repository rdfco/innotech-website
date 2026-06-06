import {useState} from "react";

import {useTheme} from "../../../../context/useTheme";

function ActionCard({item, isDarkMode}) {
  const [glow, setGlow] = useState({x: 0, y: 0, active: false});

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setGlow({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    });
  };

  return (
    <div
      className="relative isolate h-full min-w-0 overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGlow((current) => ({...current, active: false}))}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-[25px] transition-opacity duration-300"
        style={{
          opacity: glow.active ? 1 : 0,
          background: `radial-gradient(600px circle at ${glow.x}px ${glow.y}px, rgba(55, 180, 120, 0.7), transparent 75%)`,
          filter: "blur(28px)",
        }}
      />

      <article
        className={`relative z-10 flex h-full min-w-0 flex-col gap-6 overflow-hidden rounded-[25px] border border-[#37B478] p-7 shadow-[inset_1px_-1px_2px_0px_#1d5f3f] md:p-9 ${
          isDarkMode ? "bg-[#050505] text-white" : "bg-white text-black"
        }`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[25px] bg-[#37B478]/5" />

        <header className="relative z-10 min-w-0">
          <h3 className="font-['Gotham'] text-2xl font-bold leading-tight">
            {item.title}
          </h3>
          <p className="font-['Gotham'] text-base font-normal leading-tight">
            {item.subtitle}
          </p>
        </header>

        <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center gap-3 px-0 font-['Gotham'] text-base font-normal leading-[1.35] md:px-4 xl:px-8">
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph} className="min-w-0 break-words text-left">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}

function ServiceActionSection({title, items}) {
  const {isDarkMode} = useTheme();

  return (
    <section className={`w-full px-6 py-24 md:px-16 xl:px-[120px] ${isDarkMode ? "bg-[#050505]" : "bg-white"}`}>
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-8">
        <div className="relative flex w-full items-center">
          <div className="absolute left-[-14px] top-[-19px] size-16 rounded-full border border-[#37B478]" />
          <h2 className={`relative z-10 font-['Gotham'] text-4xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
            {title}
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {items.map((item) => (
            <ActionCard key={item.title} item={item} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceActionSection;
