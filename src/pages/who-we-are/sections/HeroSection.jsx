import IntroRevealText from "../../../components/ui/IntroRevealText";

function HeroSection({content, textColor}) {
  return (
    <section className="flex h-[430px] flex-col items-center justify-start gap-2 px-28 -translate-y-15">
      <div className="size-6 rounded-full bg-[#37B478]" />
      <IntroRevealText
        as="h1"
        variant="heading"
        className={`font-['Gotham'] text-7xl font-semibold ${textColor}`}
      >
        {content.title}
      </IntroRevealText>
      <IntroRevealText
        variant="copy"
        className={`w-[700px] text-center font-['Gotham'] text-xl leading-[1.35] ${textColor}`}
      >
        {content.description}
      </IntroRevealText>
    </section>
  );
}

export default HeroSection;
