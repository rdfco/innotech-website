import {useEffect, useMemo, useRef, useState} from "react";
import {useParams} from "react-router-dom";

import {useTheme} from "../../context/useTheme";
import {fetchPartnerPage} from "../../services/contentApi";

function Arrow({direction = "right"}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={`size-6 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5L16 12L9 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({children, isDarkMode}) {
  return (
    <div className="relative flex min-h-16 w-full items-center">
      <span className="absolute left-[-14px] top-1/2 size-[62px] -translate-y-1/2 rounded-full border border-[#37B478]" />
      <h2
        className={`relative z-10 font-['Gotham'] text-3xl font-bold md:text-[36px] md:leading-tight ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {children}
      </h2>
    </div>
  );
}

function HeroSection({assets, content, isDarkMode}) {
  const logoToneClass =
    content.variant === "brightidea"
      ? isDarkMode
        ? "brightness-0 invert"
        : "brightness-0"
      : isDarkMode
      ? ""
      : assets.lightLogoClassName ?? "brightness-0";

  return (
    <section className="px-6 pb-12 pt-36 md:px-16 md:pb-16 md:pt-40 xl:px-[120px]">
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-8 text-center">
        <img
          src={assets.logo}
          alt={content.name}
          className={`h-auto w-[min(406px,78vw)] object-contain ${assets.logoClassName ?? "max-h-[212px]"} ${logoToneClass}`}
        />
        <p
          className={`max-w-[518px] font-['Gotham'] text-xl font-normal md:text-2xl ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {content.hero.tagline}
        </p>
        <button
          type="button"
          className="rounded-[50px] bg-[#37B478] px-5 py-2 font-['Gotham'] text-xl font-bold text-black transition-all duration-200 hover:scale-[1.03] hover:bg-[#22C55E] active:scale-95 md:text-2xl"
        >
          {content.hero.buttonLabel}
        </button>
      </div>
    </section>
  );
}

function IntroSection({assets, content, isDarkMode}) {
  return (
    <section className="px-6 py-8 md:px-16 xl:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 overflow-hidden p-4 lg:flex-row lg:items-start">
        <div className="flex min-w-0 flex-1 flex-col gap-4 p-0 md:p-6">
          <SectionHeading isDarkMode={isDarkMode}>
            {content.intro.title}
          </SectionHeading>
          <p
            className={`font-['Gotham'] text-base font-normal leading-relaxed md:text-lg ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {content.intro.body}
          </p>
        </div>
        <div className="relative h-[260px] w-full shrink-0 overflow-hidden rounded-3xl md:h-[382px] lg:w-[600px] lg:rounded-none">
          <img
            loading="lazy"
            src={assets.heroImage}
            alt=""
            aria-hidden
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({assets, isDarkMode, isVisible, stat}) {
  const textColor = isDarkMode ? "text-white" : "text-black";
  const iconFilter = isDarkMode
    ? "opacity-20 group-hover:opacity-70"
    : "opacity-15 group-hover:opacity-65 [filter:brightness(0)_saturate(100%)_invert(56%)_sepia(51%)_saturate(599%)_hue-rotate(96deg)_brightness(94%)_contrast(88%)]";

  return (
    <article
      className={`group relative flex h-48 min-w-[215px] flex-1 items-center justify-center rounded-[32px] p-5 transition-all duration-1000 ease-out hover:-translate-y-2 hover:bg-[#37B478] hover:shadow-[0_18px_45px_-24px_rgba(55,180,120,0.9)] ${
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-7 opacity-0 blur-sm"
      }`}
    >
      <div className="absolute left-2 top-1/2 size-[130px] -translate-y-1/2 rounded-full bg-neutral-900" />
      <img
        loading="lazy"
        src={assets.circleIcon}
        alt=""
        aria-hidden
        className={`pointer-events-none absolute left-2 top-1/2 size-[130px] -translate-y-1/2 object-contain transition-all duration-300 group-hover:scale-105 group-hover:[filter:none] ${iconFilter}`}
      />
      <span className="absolute bottom-8 left-5 size-2 rounded-full bg-[#37B478] transition-colors duration-300 group-hover:bg-white" />
      <div className="relative z-10 ml-20 flex flex-1 flex-col items-start gap-1">
        <div className="font-['Gotham'] text-3xl font-bold leading-none text-[#37B478] transition-colors duration-300 group-hover:text-white">
          {stat.value}
        </div>
        <p className={`font-['Gotham'] text-base font-medium leading-tight transition-colors duration-300 group-hover:text-white ${textColor}`}>
          {stat.label}
        </p>
      </div>
    </article>
  );
}

function StatsSection({assets, content, isDarkMode}) {
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
      {threshold: 0.3},
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-20 md:px-16 md:py-24 xl:px-[120px]"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-[-520px] h-[900px] w-[1800px] -translate-x-1/2 rounded-[50%] border-[34px] ${
          isDarkMode ? "border-white" : "border-black"
        }`}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-16 top-8 size-9 rounded-full bg-[#37B478] shadow-[0_0_32px_rgba(55,180,120,0.65)] md:left-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[calc(120px+36px)] top-[25px] hidden h-px w-[calc(100%-260px)] bg-[#37B478] md:block"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 pt-24 md:grid-cols-2 xl:grid-cols-4">
        {content.stats.map((stat) => (
          <StatCard
            key={stat.id}
            assets={assets}
            isDarkMode={isDarkMode}
            isVisible={isVisible}
            stat={stat}
          />
        ))}
      </div>
    </section>
  );
}

function ToolsCarousel({assets, content, isDarkMode}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = content.tools.cards;
  const maxIndex = Math.max(cards.length - 1, 0);
  const carouselCards = [...cards, ...cards];
  const textColor = isDarkMode ? "text-white" : "text-black";

  const move = (direction) => {
    setActiveIndex((current) => {
      if (direction === "next") return current >= maxIndex ? 0 : current + 1;
      return current <= 0 ? maxIndex : current - 1;
    });
  };

  return (
    <section className="px-6 py-16 md:px-16 xl:px-[120px]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-12 overflow-hidden">
        <SectionHeading isDarkMode={isDarkMode}>
          {content.tools.title}
        </SectionHeading>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => move("prev")}
            aria-label="Previous partner tool"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#37B478] text-[#37B478] transition-colors hover:bg-[#37B478] hover:text-black"
          >
            <Arrow direction="left" />
          </button>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(${activeIndex} * -1 * (min(360px, calc(100vw - 144px)) + 32px)))`,
              }}
            >
              {carouselCards.map((card, index) => (
                <article
                  key={`${card.id}-${index}`}
                  className="min-h-[300px] w-[min(360px,calc(100vw-144px))] shrink-0 rounded-3xl bg-green-500/5 p-9 shadow-[inset_1px_-1px_2px_0px_rgba(29,95,63,1)]"
                >
                  <img
                    loading="lazy"
                    src={assets.cardIcons[card.icon]}
                    alt=""
                    aria-hidden
                    className="size-24 object-contain [filter:brightness(0)_saturate(100%)_invert(56%)_sepia(51%)_saturate(599%)_hue-rotate(96deg)_brightness(94%)_contrast(88%)]"
                  />
                  <h3 className={`mt-4 font-['Gotham'] text-2xl font-bold ${textColor}`}>
                    {card.title}
                  </h3>
                  <p className={`mt-4 font-['Gotham'] text-base leading-normal ${textColor}`}>
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => move("next")}
            aria-label="Next partner tool"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#37B478] text-[#37B478] transition-colors hover:bg-[#37B478] hover:text-black"
          >
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}

function PartnerPage() {
  const {slug} = useParams();
  const {isDarkMode} = useTheme();
  const [result, setResult] = useState({
    page: null,
    slug: null,
    status: "loading",
  });

  useEffect(() => {
    let isActive = true;

    fetchPartnerPage(slug)
      .then((page) => {
        if (!isActive) return;
        setResult({
          page,
          slug,
          status: page ? "ready" : "not-found",
        });
      })
      .catch(() => {
        if (!isActive) return;
        setResult({page: null, slug, status: "not-found"});
      });

    return () => {
      isActive = false;
    };
  }, [slug]);

  const page = result.slug === slug ? result.page : null;
  const status = result.slug === slug ? result.status : "loading";
  const pageBackground = isDarkMode ? "bg-[#050505]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";

  const content = useMemo(() => page, [page]);

  if (status === "not-found") {
    return (
      <main className={`min-h-screen px-6 py-40 ${pageBackground}`}>
        <h1 className={`font-['Gotham'] text-5xl font-bold ${textColor}`}>
          Partner not found
        </h1>
      </main>
    );
  }

  if (!content) {
    return (
      <main className={`min-h-screen px-6 py-40 ${pageBackground}`}>
        <p className={`font-['Gotham'] text-xl ${textColor}`}>Loading partner...</p>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen overflow-hidden font-['Gotham'] transition-colors duration-500 ${pageBackground}`}
    >
      <HeroSection
        assets={content.assets}
        content={content}
        isDarkMode={isDarkMode}
      />
      <IntroSection
        assets={content.assets}
        content={content}
        isDarkMode={isDarkMode}
      />
      <StatsSection
        assets={content.assets}
        content={content}
        isDarkMode={isDarkMode}
      />
      <ToolsCarousel
        assets={content.assets}
        content={content}
        isDarkMode={isDarkMode}
      />
    </main>
  );
}

export default PartnerPage;
