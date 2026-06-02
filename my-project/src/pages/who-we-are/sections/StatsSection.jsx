import {useEffect, useRef, useState} from "react";

const countDuration = 500;

function useCountUp(target, isActive) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    let frameId;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / countDuration, 1);
      setCount(Math.round(target * progress));

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    };

    frameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frameId);
  }, [isActive, target]);

  return count;
}

function StatCard({stat, isVisible, isDarkMode}) {
  const count = useCountUp(stat.value, isVisible);
  const labelColor = isDarkMode ? "text-white" : "text-black";

  return (
    <div
      className={`group relative flex h-44 min-w-[220px] flex-col items-center justify-center rounded-[32px] p-5 transition-all duration-500 ease-out hover:-translate-y-2 ${
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-7 opacity-0 blur-sm"
      }`}
    >
      <img
        src={stat.icon}
        alt=""
        aria-hidden
        className="pointer-events-none absolute h-36 w-auto object-contain opacity-90 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="relative z-10 mt-8 font-['Gotham'] text-3xl font-bold leading-none text-[#37B478]">
        +{count}
      </div>
      <div className={`relative z-10 mt-1 font-['Gotham'] text-sm font-bold ${labelColor}`}>
        {stat.label}
      </div>
    </div>
  );
}

function StatsSection({stats, isDarkMode}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.35},
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 py-24 md:px-16 xl:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            stat={stat}
            isVisible={isVisible}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
