import FooterSVG from "../assets/FooterFirstPage.svg";

const FooterFirstPage = () => {
  return (
    <div className="relative w-full h-[650px] md:h-[820px] -mt-48 md:-mt-72 overflow-visible z-20">
      {/* منحنی سفید */}
      <div
        className="w-[1324.89px] h-[384.57px] 
                   absolute left-1/2 -translate-x-1/2 
                   top-[-160px] md:top-[150px]
                   origin-top-right 
                   rotate-[5.25deg] 
                   bg-white rounded-full 
                   shadow-2xl"
      >
        <img
          src={FooterSVG}
          alt="Footer"
          className="w-full h-full object-contain p-8 md:p-12"
        />
      </div>
    </div>
  );
};

export default FooterFirstPage;
