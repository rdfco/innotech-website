import {useTheme} from "../../context/useTheme";
import {usePointerGlow} from "../../hooks/usePointerGlow";
import AIHumanFace from "../../assets/images/ai-agent/AIHumanFace.png";
import BlackWhatAreAiAgentImage from "../../assets/images/ai-agent/BlackWhatAreAiAgent.png";
import WhatAreAiAgentImage from "../../assets/images/ai-agent/WhatAreAiAgent.png";
import {aiAgentContent, marketingSteps, workSteps} from "./data";

function Bullet() {
  return (
    <div className="flex size-6 shrink-0 items-center justify-center">
      <div className="relative size-3.5">
        <div className="absolute left-[2.5px] top-[2.5px] size-2 rounded-full bg-[#37B478]" />
      </div>
    </div>
  );
}

function StepItem({title, body, textColor}) {
  return (
    <div className="flex flex-1 items-start gap-2">
      <Bullet />
      <div className="flex flex-1 flex-col items-start gap-2">
        <h3 className={`font-['Gotham'] text-2xl font-bold ${textColor}`}>{title}</h3>
        <p className={`font-['Gotham'] text-2xl leading-[1.25] ${textColor}`}>
          {body}
        </p>
      </div>
    </div>
  );
}

function HoverFrame({children, className = ""}) {
  const {position, handlers} = usePointerGlow();

  return (
    <div
      className={`relative ${className}`}
      {...handlers}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[50px] transition-opacity duration-300"
        style={{
          opacity: position.active ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(55, 180, 120, 0.7), transparent 75%)`,
          filter: "blur(20px)",
        }}
      />
      <div className="relative z-10 size-full overflow-hidden rounded-[50px]">
        {children}
      </div>
    </div>
  );
}

function AiAgent() {
  const {isDarkMode} = useTheme();
  const pageBackground = isDarkMode ? "bg-[#050505]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const whatAreAiAgentImage = isDarkMode
    ? WhatAreAiAgentImage
    : BlackWhatAreAiAgentImage;

  return (
    <main
      className={`w-full overflow-hidden px-28 pb-16 pt-36 transition-colors duration-500 ease-in-out ${pageBackground}`}
    >
      <div className="flex w-full flex-col items-start justify-center gap-8">
        <section className="flex w-full flex-col items-start gap-2">
          <h1 className={`font-['Gotham'] text-5xl font-normal ${textColor}`}>
            {aiAgentContent.title}
          </h1>
          <p className={`w-full font-['Gotham'] text-2xl ${textColor}`}>
            {aiAgentContent.subtitle}
          </p>
        </section>

        <section className="relative flex h-96 w-full flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[50px] bg-white">
          <img
            src={AIHumanFace}
            alt=""
            aria-hidden
            className="absolute inset-0 size-full object-cover object-center"
          />
        </section>

        <p className={`w-full font-['Gotham'] text-2xl leading-[1.25] ${textColor}`}>
          {aiAgentContent.introduction}
        </p>

        <section className="flex w-full flex-col items-start gap-4">
          <h2 className={`w-full font-['Gotham'] text-5xl ${textColor}`}>
            {aiAgentContent.definitionTitle}
          </h2>
          <p className={`w-full whitespace-pre-line font-['Gotham'] text-2xl leading-[1.25] ${textColor}`}>
            {aiAgentContent.definition}
          </p>
        </section>

        <section className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-start gap-8">
            {marketingSteps.slice(0, 2).map((step, index) => (
              <StepItem
                key={`${step.title}-${index}`}
                title={step.title}
                body={step.body}
                textColor={textColor}
              />
            ))}
          </div>
          <div className="flex w-full items-start gap-8">
            {marketingSteps.slice(2).map((step) => (
              <StepItem
                key={step.title}
                title={step.title}
                body={step.body}
                textColor={textColor}
              />
            ))}
          </div>
        </section>

        <HoverFrame className="w-full">
          <section className="flex w-full flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[50px] bg-white">
          <img
            src={whatAreAiAgentImage}
            alt=""
            aria-hidden
            className="h-[287px] w-full object-cover object-center"
          />
          </section>
        </HoverFrame>

        <section className="flex w-full flex-col items-start gap-4">
          <h2 className={`w-full font-['Gotham'] text-5xl ${textColor}`}>
            {aiAgentContent.workTitle}
          </h2>
          <p className={`w-full font-['Gotham'] text-2xl leading-[1.25] ${textColor}`}>
            {aiAgentContent.workIntroduction}
          </p>

          {workSteps.map((step) => (
            <StepItem
              key={step.title}
              title={step.title}
              body={step.body}
              textColor={textColor}
            />
          ))}

          <p className={`w-full font-['Gotham'] text-2xl leading-[1.25] ${textColor}`}>
            {aiAgentContent.workConclusion}
          </p>
        </section>
      </div>
    </main>
  );
}

export default AiAgent;
