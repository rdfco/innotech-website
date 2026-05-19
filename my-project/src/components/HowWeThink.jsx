import {useState} from "react";
import HowWeThinkImage from "../assets/HowWeThink.jpg";

function HowWeThink() {
  const [pos, setPos] = useState({x: 0, y: 0, active: false});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setPos((p) => ({...p, active: false}));
  };

  return (
    <section
      className="w-full bg-black px-28 py-14 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 🌟 BACKGROUND NEON GLOW (پشت همه چیز) */}
      <div
        className="pointer-events-auto absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: pos.active ? 1 : 0,
          background: `
            radial-gradient(
              650px circle at ${pos.x}px ${pos.y}px,
              rgba(55, 180, 120, 0.22),
              transparent 60%
            )
          `,
        }}
      />

      <div className="flex flex-col gap-8 relative z-10">
        {/* TITLE */}
        <div className="relative inline-flex items-center gap-3.5">
          <div className="absolute left-[-14px] top-[-19px] size-16 rounded-full border border-[#37B478]" />

          <div className="relative z-10 text-white text-4xl font-normal font-['Gotham']">
            How we think in
          </div>
        </div>

        {/* CONTENT (هیچ تغییری نکرده) */}
        <div className="flex items-start gap-11">
          {/* LEFT BIG CARD */}
          <div className="w-[542px] h-[702px] rounded-[50px] border border-[#37B478] overflow-hidden flex flex-col bg-black">
            <img
              src={HowWeThinkImage}
              alt="How We Think"
              className="w-full h-96 object-cover"
            />

            <div className="w-[500px] h-60 px-10 pt-8 flex flex-col gap-4">
              <div className="text-white text-2xl font-['Gotham'] leading-[1.25]">
                InnotechCo launches INCEPTION — an AI-powered innovation
                management system
              </div>

              <div className="inline-flex items-center gap-8">
                <div className="text-white text-base font-light font-['Gotham']">
                  November 15, 2025
                </div>

                <div className="text-[#37B478] text-base font-['Gotham']">
                  2 minutes read
                </div>
              </div>

              <div className="text-white text-base font-['Gotham'] leading-[1.45]">
                InnotechCo introduced INCEPTION, a modular innovation management
                system that helps R&D and strategy teams map their innovation
                processes, run maturity assessments, and connect AI agents to
                real business workflows.
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 h-[702px] flex flex-col justify-center gap-8">
            {/* CARD 1 */}
            <div className="flex-1 rounded-[50px] border border-[#37B478] overflow-hidden flex items-center bg-black">
              <img
                src={HowWeThinkImage}
                className="w-[55%] h-full object-cover"
              />

              <div className="w-80 h-60 px-6 flex flex-col gap-4">
                <div className="text-white text-2xl font-['Gotham'] leading-[1.2]">
                  InnotechCo launches INCEPTION
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-white text-base font-light font-['Gotham']">
                    November 15, 2025
                  </div>

                  <div className="text-[#37B478] text-base font-['Gotham']">
                    2 minutes read
                  </div>
                </div>

                <div className="text-white text-base font-['Gotham'] leading-[1.45]">
                  InnotechCo introduced INCEPTION, a modular innovation
                  management system that helps R&D and strategy
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex-1 rounded-[50px] border border-[#37B478] overflow-hidden flex items-center bg-black">
              <img
                src={HowWeThinkImage}
                className="w-[55%] h-full object-cover"
              />

              <div className="w-80 h-60 px-6 flex flex-col gap-4">
                <div className="text-white text-2xl font-['Gotham'] leading-[1.2]">
                  InnotechCo launches INCEPTION
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-white text-base font-light font-['Gotham']">
                    November 15, 2025
                  </div>

                  <div className="text-[#37B478] text-base font-['Gotham']">
                    2 minutes read
                  </div>
                </div>

                <div className="text-white text-base font-['Gotham'] leading-[1.45]">
                  InnotechCo introduced INCEPTION, processes, run maturity
                  assessments, and connect AI agents to real business workflows.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <button className="group flex flex-col items-end transition-all duration-900">
            <div className="text-white group-hover:text-[#37B478] transition-colors duration-300">
              Read all insights
            </div>

            <div className="mt-1 h-[2px] w-0 bg-[#37B478] rounded-full transition-all duration-300 group-hover:w-full" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HowWeThink;
