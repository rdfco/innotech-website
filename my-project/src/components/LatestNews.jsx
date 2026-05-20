import LatestNewsImage from "../assets/LatestNews.jpg";

function LatestNews() {
  return (
    <section className="relative w-full bg-black py-[60px] px-[120px] sm:px-7 lg:px-35">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="flex h-[570px] flex-col overflow-hidden rounded-[50px] bg-white lg:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex-1 self-stretch px-[68px] py-[68px] flex flex-col">
            {/* TITLE section */}
            <div className="relative inline-flex items-center">
              <div className="absolute left-[-14px] top-[-19px] size-16 rounded-full border border-[#37B478]" />

              <div className="relative z-10 text-black text-4xl font-bold font-['Gotham'] leading-none">
                Our latest news
              </div>
            </div>

            {/* 32px spacer */}
            <div className="h-8" />

            {/* HEADLINE text */}
            <div className="max-w-[690px] text-black text-3xl font-medium font-['Gotham'] leading-[1.28]">
              InnotechCo launches INCEPTION — an AI-powered innovation
              management system
            </div>

            {/* 32px spacer */}
            <div className="h-8" />

            {/* META info (date + read time) */}
            <div className="flex items-center gap-8">
              <div className="text-black text-base font-light font-['Gotham']">
                November 15, 2025
              </div>

              <div className="text-[#37B478] text-base font-['Gotham']">
                2 minutes read
              </div>
            </div>

            {/* DESCRIPTION text */}
            <div className="mt-10 max-w-[690px] text-black text-base font-medium font-['Gotham'] leading-[1.35]">
              InnotechCo introduced INCEPTION, a modular innovation management
              system that helps R&amp;D and strategy teams map their innovation
              processes, run maturity assessments, and connect AI agents to real
              business workflows.
            </div>

            {/* Exact spacing like Figma */}
            <div className="h-8" />

            {/* READ MORE button */}
            <button
              type="button"
              onClick={() => {}}
              className="group flex w-fit flex-col items-start cursor-pointer transition-all duration-300"
            >
              <div className="text-black text-base font-['Gotham'] transition-colors duration-300 group-hover:text-[#37B478] mt-8">
                Read more
              </div>

              <div className="mt-[2px] h-[2px] w-20 rounded-full bg-[#37B478] opacity-75 blur-[0.5px] transition-all duration-300 group-hover:w-24" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[496px] shrink-0 self-stretch overflow-hidden">
            <img
              src={LatestNewsImage}
              alt="Latest news"
              className="h-full w-full object-cover lg:min-h-[640px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
