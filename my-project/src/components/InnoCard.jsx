import InceptionIcon from "../assets/Inception-Icon 1.svg";
import InfinityIcon from "../assets/Subtract.svg";
import InsightIcon from "../assets/Subtract2.svg";
import InlearnIcon from "../assets/Subtract3.svg";

function InnoCard({title, subtitle, items = []}) {
  const iconMap = {
    INCEPTION: InceptionIcon,
    INFINITY: InfinityIcon,
    INSIGHT: InsightIcon,
    INLEARN: InlearnIcon,
  };

  const CurrentIcon = iconMap[title];

  return (
    <div
      className="
        relative -mt-13 
        w-65 h-95 
        px-8 py-6 
        rounded-[50px]
        bg-green-500/5 
        border border-green-500/10
        shadow-[inset_1px_-1px_2px_0px_rgba(29,95,63,1.00)]
        
        shadow-[0_0_35px_-5px_rgba(55,180,120,0.35),
                0_0_60px_-10px_rgba(55,180,120,0.25)]

        inline-flex flex-col justify-start items-center gap-4 
        overflow-hidden flex-shrink-0 cursor-pointer
        transition-all duration-500 ease-out

        hover:bg-green-500/10
        hover:-translate-y-2
        hover:translate-x-1
        
        hover:border-emerald-400/40
        hover:ring-1 hover:ring-emerald-400/20
        hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.45),
                     0_0_50px_-12px_rgba(52,211,153,0.25),
                     inset_1px_-1px_2px_0px_rgba(29,95,63,1.00)]

        before:absolute before:inset-0 
        before:bg-gradient-to-br 
        before:from-emerald-400/8 
        before:via-transparent 
        before:to-transparent
        before:opacity-0 hover:before:opacity-100 
        before:transition-opacity before:duration-500
        before:rounded-[50px] before:-z-10
      "
    >
      {/* HEADER */}
      <div className="flex flex-col justify-start items-center gap-4">
        <div className="inline-flex justify-start items-center gap-3">
          {/* ICON */}
          <div className="size-9 relative overflow-hidden shrink-0">
            <img
              src={CurrentIcon}
              alt={`${title} Icon`}
              className="size-9 object-contain"
            />
          </div>

          {/* TITLE */}
          <div className="flex flex-col justify-start items-start">
            <div className="text-white text-base font-normal font-['Gotham'] leading-none">
              {title}
            </div>

            <div className="text-white text-xs font-['Gotham'] mt-1">
              {subtitle}
            </div>
          </div>
        </div>

        {/* GREEN LINE */}
        <div className="w-44 h-0 rounded-[50px] outline-2 -outline-offset-1 outline-[#37B478] blur-[2px]" />
      </div>

      {/* CONTENT */}
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="self-stretch flex flex-col justify-start items-start gap-1"
          >
            <div className="self-stretch inline-flex justify-start items-start gap-1">
              <div className="w-4 self-stretch flex justify-center items-center gap-2.5">
                <div className="w-2 h-2 rounded-full border-[0.50px] border-[#37B478]" />
              </div>

              <div className="flex-1 justify-start text-white text-sm font-['Gotham'] whitespace-pre-line">
                {item.label}
              </div>
            </div>

            <div className="self-stretch text-left text-white text-xs font-light font-['Gotham'] leading-tight whitespace-pre-line">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InnoCard;
