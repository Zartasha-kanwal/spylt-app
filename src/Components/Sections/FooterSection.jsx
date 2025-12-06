import { useMediaQuery } from "react-responsive";
import footer_dip from "../Assets/images/footer-dip.png";
import footer_drink from "../Assets/images/footer-drink.png";
import splash from "../Assets/videos/splash.mp4";
import YT_svg from "../Assets/images/yt.svg";
import insta_svg from "../Assets/images/insta.svg";
import Tiktok_svg from "../Assets/images/tiktok.svg";
import arrow from "../Assets/images/arrow.svg";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src={footer_dip}
        alt="FOOTER-DIP"
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5 lg:text-6xl 2xl:8xl">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src={footer_drink}
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src={splash}
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src={YT_svg} alt="Youtube-svg" />
          </div>
          <div className="social-btn">
            <img src={insta_svg} alt="Insta-svg" />
          </div>
          <div className="social-btn">
            <img src={Tiktok_svg} alt="tiktok.svg" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-5 md:flex-row flex-col justify-between text-milk font-paragraph 2xl:text-lg font-medium">
          <div className="flex items-center md:gap-5 2xl:gap-16 gap-5">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-[35%]">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center  border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999] bg-transparent"
              />
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          {/* The final row with copyright and legal links. */}
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;