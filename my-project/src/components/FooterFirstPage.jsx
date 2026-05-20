import FooterSVG from "../assets/FooterFirstPage.svg";
import FooterInnoTech from "../assets/FooterInnoTech.svg";
import Instagram from "../assets/Instagram.svg";
import LinkedIn from "../assets/Linkdin.svg";
import WhatsApp from "../assets/WhatsApp.svg";

const FooterFirstPage = () => {
  return (
    <section className="relative w-full overflow-hidden -mt-30 md:-mt-40 lg:-mt-24 z-20">
      <div className="relative w-full">
        <img
          src={FooterSVG}
          alt="Footer Background"
          className="w-full h-auto block"
        />

        {/* InnoTech logo + Contact Us button */}
        <div className="absolute inset-0 flex items-center justify-between px-[150px] mb-35">
          <div>
            <img
              src={FooterInnoTech}
              alt="InnoTech Logo"
              className="w-[125px] h-auto"
            />
          </div>

          <button
            className="px-4 py-2 
             bg-[#22C55E] hover:bg-[#16A34A] 
             text-white text-2xl font-bold 
             font-['Gotham'] 
             rounded-[50px] 
             inline-flex items-center justify-center
             shadow-lg hover:shadow-xl
             transition-all duration-200 active:scale-95"
          >
            contact us
          </button>
        </div>

        {/* Footer bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 lg:pb-12 lg:px-[145px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="self-stretch inline-flex justify-between items-center w-full">
              {/* Left side - links */}
              <div className="flex justify-start items-center gap-6 md:gap-8 lg:gap-5 text-black">
                {["Legal Notice", "Legal Notice", "GDPR", "Cookie Policy"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="
                      relative cursor-pointer px-4 py-1 rounded-full
                      transition-all duration-300 group
                      hover:-translate-y-0.5 active:scale-95 overflow-hidden
                    "
                    >
                      {/* hover + click pill effect */}
                      <div
                        className="
                        absolute inset-0 bg-green-500 rounded-full
                        scale-75 opacity-0
                        transition-all duration-300
                        group-hover:scale-100 group-hover:opacity-100
                        active:scale-110 active:opacity-70
                      "
                      />

                      <span className="relative z-10 font-['Gotham'] text-base transition-colors duration-300 group-hover:text-white">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>

              {/* Right side - social media logos */}
              <div className="flex justify-end items-center gap-5">
                <div className="size-8 relative cursor-pointer hover:scale-110 transition-transform">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="size-8 relative cursor-pointer hover:scale-110 transition-transform">
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="size-8 relative cursor-pointer hover:scale-110 transition-transform">
                  <img
                    src={WhatsApp}
                    alt="WhatsApp"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterFirstPage;
