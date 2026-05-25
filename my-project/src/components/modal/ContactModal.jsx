import {useEffect, useState} from "react";
import {useTheme} from "../../context/ThemeContext";

function ContactModal({isOpen, onClose}) {
  const {isDarkMode} = useTheme();
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (isOpen) {
      setShouldRender(true);

      timer = setTimeout(() => {
        setVisible(true);
      }, 10);
    } else {
      setVisible(false);

      timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  // رنگ‌های داینامیک برای مودال
  const modalBg = isDarkMode ? "bg-black" : "bg-white";
  const modalOutline = isDarkMode ? "outline-white/25" : "outline-black/25";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const placeholderColor = isDarkMode
    ? "placeholder:text-white"
    : "placeholder:text-black/50";
  const inputBg = isDarkMode ? "bg-black" : "bg-white";
  const inputOutline = isDarkMode ? "outline-white/25" : "outline-black/50";
  const closeIconColor = isDarkMode ? "text-white" : "text-black";
  const overlayBg = isDarkMode ? "bg-black/70" : "bg-white/70";
  const submitBtnBg = isDarkMode ? "bg-[#37B478]" : "bg-[#37B478]";
  const submitTextColor = isDarkMode ? "text-black" : "text-white";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      {/* Overlay */}
      <div
        className={`absolute inset-0 ${overlayBg} backdrop-blur-sm transition-opacity duration-1000 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-[929px] p-11 ${modalBg} rounded-[40px] outline outline-1 outline-offset-[-1px] ${modalOutline} inline-flex flex-col justify-end items-end gap-5 overflow-hidden shadow-2xl transform transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
        }`}
      >
        {/* Header */}
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="w-[787px] px-4 relative flex justify-between items-end">
            {/* Decorative circle */}
            <div className="size-11 left-0 top-[-15px] absolute rounded-full border border-[#37B478]" />
            <div
              className={`w-[725px] justify-start ${textColor} text-2xl font-normal font-['Gotham']`}
            >
              Contact Us
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="size-6 relative overflow-hidden flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              className={`size-5 ${closeIconColor}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Name */}
        <div
          className={`self-stretch px-4 py-3 ${inputBg} rounded-[50px] outline outline-1 outline-offset-[-1px] ${inputOutline} inline-flex justify-start items-start gap-2.5`}
        >
          <input
            type="text"
            className={`flex-1 bg-transparent outline-none ${textColor} ${placeholderColor} text-sm font-['Gotham']`}
            placeholder="Name"
          />
        </div>

        {/* Email */}
        <div
          className={`self-stretch px-4 py-3 ${inputBg} rounded-[50px] outline outline-1 outline-offset-[-1px] ${inputOutline} inline-flex justify-start items-start gap-2.5`}
        >
          <input
            type="email"
            className={`flex-1 bg-transparent outline-none ${textColor} ${placeholderColor} text-sm font-['Gotham']`}
            placeholder="Email"
          />
        </div>

        {/* Title + Company */}
        <div className="self-stretch inline-flex justify-start items-start gap-5">
          <div
            className={`flex-1 px-4 py-3 ${inputBg} rounded-[50px] outline outline-1 outline-offset-[-1px] ${inputOutline}`}
          >
            <input
              type="text"
              className={`w-full bg-transparent outline-none ${textColor} ${placeholderColor} text-sm font-['Gotham']`}
              placeholder="Title"
            />
          </div>

          <div
            className={`flex-1 px-4 py-3 ${inputBg} rounded-[50px] outline outline-1 outline-offset-[-1px] ${inputOutline}`}
          >
            <input
              type="text"
              className={`w-full bg-transparent outline-none ${textColor} ${placeholderColor} text-sm font-['Gotham']`}
              placeholder="Company"
            />
          </div>
        </div>

        {/* Region */}
        <div
          className={`self-stretch px-4 py-3 ${inputBg} rounded-[50px] outline outline-1 outline-offset-[-1px] ${inputOutline} inline-flex justify-between items-center`}
        >
          <input
            type="text"
            className={`flex-1 bg-transparent outline-none ${textColor} ${placeholderColor} text-sm font-['Gotham']`}
            placeholder="Select your region"
            readOnly
          />

          <svg
            viewBox="0 0 24 24"
            className={`size-4 ${closeIconColor} shrink-0`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Industry */}
        <div
          className={`self-stretch px-4 py-3 ${inputBg} rounded-[50px] outline outline-1 outline-offset-[-1px] ${inputOutline} inline-flex justify-between items-center`}
        >
          <input
            type="text"
            className={`flex-1 bg-transparent outline-none ${textColor} ${placeholderColor} text-sm font-['Gotham']`}
            placeholder="Select industry"
            readOnly
          />

          <svg
            viewBox="0 0 24 24"
            className={`size-4 ${closeIconColor} shrink-0`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>

        {/* Message */}
        <div
          className={`self-stretch h-36 p-4 ${inputBg} rounded-3xl outline outline-1 outline-offset-[-1px] ${inputOutline} inline-flex justify-start items-start`}
        >
          <textarea
            className={`flex-1 bg-transparent outline-none ${textColor} ${placeholderColor} text-sm font-['Gotham'] resize-none h-full`}
            placeholder="Message"
          />
        </div>

        {/* Submit Button */}
        <div className="self-end">
          <button
            type="submit"
            className={`px-8 py-3 ${submitBtnBg} hover:bg-[#22C55E] active:scale-95 transition-all duration-200 rounded-[50px] flex items-center gap-2.5`}
          >
            <span
              className={`${submitTextColor} text-2xl font-normal font-['Gotham']`}
            >
              Submit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
