import {useTheme} from "./ThemeContext";
import ellipseBlack from "../assets/EllipseBlack.png";
import ellipseWhite from "../assets/EllipseWhite.png";

function Ellipse() {
  const {isDarkMode} = useTheme();

  return (
    <section className="-mt-20 relative z-20 w-full overflow-x-hidden">
      <img
        src={isDarkMode ? ellipseBlack : ellipseWhite}
        alt="Ellipse Background"
        className="w-full block"
      />
    </section>
  );
}

export default Ellipse;
