import Img1 from "../img/slideshowImgs/1-Tale-of-a-shining-sword-2ND-COVER.png";
import Img2 from "../img/slideshowImgs/2-YOUR_HIGHNESS_U_CANT_DO_THISCOVER.webp";
import Img3 from "../img/slideshowImgs/3-RBT1983TBAM.webp";
import Img4 from "../img/slideshowImgs/4-EVO-FROM-A-TREE-cover.webp";
import Img5 from "../img/slideshowImgs/5-astral-pet-store-thumbnail-webp-smaller.webp";
import Img6 from "../img/slideshowImgs/6-invincible_after_a_100_years_of.webp";
import Img7 from "../img/slideshowImgs/7-One_Coin_Clear_COVER_result.webp";
import { useState, useEffect } from "react";

function Slideshow() {
  const [selectedSpan, setSelectedSpan] = useState(0);
  const [paused, setPaused] = useState(false);
  const handleClick = (index) => {
    setSelectedSpan(index);
    setPaused(true);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setSelectedSpan((prevIndex) => (prevIndex + 1) % 7);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    const resetInterval = () => {
      setPaused(false);
    };

    const spanInterval = setInterval(resetInterval, 5000);

    return () => clearInterval(spanInterval);
  }, []);
  return (
    <section className="w-full relative max-h-[600px]">
      <div className="max-h-[600px] relative cursor-pointer">
        {selectedSpan === 0 ? (
          <a href="https://nightscans.org/series/tales-of-a-shining-sword/">
            <img src={Img1} className="w-full max-h-[600px] object-cover" alt="" />
          </a>
        ) : selectedSpan === 1 ? (
          <a href="https://nightscans.org/series/dont-do-this-your-majesty/">
            <img src={Img2} className="w-full max-h-[600px] object-cover" alt="" />
          </a>
        ) : selectedSpan === 2 ? (
          <a href="https://nightscans.org/series/rebirth-back-to-1983-to-be-a-millionaire/">
            <img src={Img3} className="w-full max-h-[600px] object-cover" alt="" />
          </a>
        ) : selectedSpan === 3 ? (
          <a href="https://nightscans.org/series/cong-da-shu-kaishi-de-jinhua__trashed/">
            <img src={Img4} className="w-full max-h-[600px] object-cover" alt="" />
          </a>
        ) : selectedSpan === 4 ? (
          <a href="https://nightscans.org/series/astral-pet-store/">
            <img src={Img5} className="w-full max-h-[600px] object-cover" alt="" />
          </a>
        ) : selectedSpan === 5 ? (
          <a href="https://nightscans.org/series/invincible-after-100-years-of-seclusion/">
            <img src={Img6} className="w-full max-h-[600px] object-cover" alt="" />
          </a>
        ) : selectedSpan === 6 ? (
          <a href="https://nightscans.org/series/shincons-one-coin-clear/">
            <img src={Img7} className="w-full max-h-[600px] object-cover" alt="" />
          </a>
        ) : null}
      </div>
      <div className="min-w-full h-[10px] flex justify-end px-[20px] gap-[20px] absolute bottom-5">
        {[...Array(7)].map((_, index) => (
          <span
            key={index}
            className={`w-[10px] h-[10px] bg-white ${
              selectedSpan === index ? "bg-[#01d9b9]" : "bg-opacity-30 bg-white"
            } rounded-[50%] cursor-pointer`}
            onClick={() => handleClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Slideshow;