import {useEffect, useRef, useState} from "react";

import excludeLeft from "../../../../../assets/images/excludes/Excludeleftservices.webp";
import excludeLeftWhite from "../../../../../assets/images/excludes/Excludeleftserviceswhite.webp";
import excludeMiddle from "../../../../../assets/images/excludes/Excludemiddleservices.webp";
import excludeMiddleWhite from "../../../../../assets/images/excludes/Excludemiddleserviceswhite.webp";
import excludeRight from "../../../../../assets/images/excludes/ExcludeRightservices.webp";
import excludeRightWhite from "../../../../../assets/images/excludes/ExcludeRightserviceswhite.webp";
import union from "../../../../../assets/images/excludes/Union.webp";
import unionBlack from "../../../../../assets/images/excludes/UnionBlack.webp";
import {useTheme} from "../../../../../context/useTheme";

const countDuration = 2000;

function useCountUp(target, isActive) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return undefined;

    let frameId;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / countDuration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setCount(Math.round(target * easedProgress));

      if (progress < 1) frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [isActive, target]);

  return count;
}

function Stat({item, isVisible, textColor, delay}) {
  const count = useCountUp(item.value, isVisible);

  return (
    <div
      className={`flex min-w-0 flex-1 flex-col items-center justify-start text-center transition-all duration-700 ease-out hover:scale-110 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{transitionDelay: `${delay}ms`}}
    >
      <div
        className={`font-['Gotham'] text-4xl leading-none md:text-5xl ${
          item.valueWeight === "normal" ? "font-normal" : "font-bold"
        } ${textColor}`}
      >
        {item.prefix}
        {count}
      </div>
      <div
        className={`mt-1 max-w-48 whitespace-pre-line font-['Gotham'] text-lg leading-none md:text-2xl ${
          item.labelWeight === "normal" ? "font-normal" : "font-medium"
        } ${textColor}`}
      >
        {item.label}
      </div>
    </div>
  );
}

function ServiceStats({stats}) {
  const {isDarkMode} = useTheme();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const pageBg = isDarkMode ? "bg-[#050505]" : "bg-white";
  const unionImage = isDarkMode ? union : unionBlack;
  const textColor = isDarkMode ? "text-black" : "text-white";
  const leftImage = isDarkMode ? excludeLeft : excludeLeftWhite;
  const middleImage = isDarkMode ? excludeMiddle : excludeMiddleWhite;
  const rightImage = isDarkMode ? excludeRight : excludeRightWhite;

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
      className={`relative h-[517px] w-full overflow-hidden ${pageBg}`}
    >
      <img loading="lazy"
        src={unionImage}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[513px] w-[134%] max-w-none -translate-x-1/2 select-none"
      />

      <img loading="lazy"
        src={leftImage}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[-100px] top-[-40px] z-20 h-[637px] w-auto max-w-none rotate-[20deg] select-none"
      />
      <img loading="lazy"
        src={middleImage}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[750px] top-[-580px] z-20 h-[1275px] w-auto max-w-none rotate-[9deg] select-none"
      />
      <img loading="lazy"
        src={rightImage}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-78 top-[-120px] z-20 h-[650px] w-[2900px] object-contain object-center select-none"
      />

      <div className="absolute left-1/2 top-[184px] z-30 flex w-full max-w-[1440px] -translate-x-1/2 items-start justify-between gap-80 px-6 md:px-16 xl:px-[120px]">
        {stats.map((item, index) => (
          <Stat
            key={item.label}
            item={item}
            isVisible={isVisible}
            textColor={textColor}
            delay={index * 120}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceStats;
