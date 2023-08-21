import Img1 from "../img/slideshowImgs/1-Tale-of-a-shining-sword-2ND-COVER.png";
import Img2 from "../img/slideshowImgs/2-YOUR_HIGHNESS_U_CANT_DO_THISCOVER.webp";
import Img3 from "../img/slideshowImgs/3-RBT1983TBAM.webp";
import Img4 from "../img/slideshowImgs/4-EVO-FROM-A-TREE-cover.webp";
import Img5 from "../img/slideshowImgs/5-astral-pet-store-thumbnail-webp-smaller.webp";
import Img6 from "../img/slideshowImgs/6-invincible_after_a_100_years_of.webp";
import Img7 from "../img/slideshowImgs/7-One_Coin_Clear_COVER_result.webp";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-slideshow-image";

function Slideshow() {
  const [selectedSpan, setSelectedSpan] = useState(0);
  const [slideDirection, setSlideDirection] = useState("slide-right");
  const [paused, setPaused] = useState(false);
  const sliderImages = [
    {
      url: "https://nightscans.org/series/tales-of-a-shining-sword/",
      src: Img1,
    },
    {
      url: "https://nightscans.org/series/dont-do-this-your-majesty/",
      src: Img2,
    },
    {
      url: "https://nightscans.org/series/rebirth-back-to-1983-to-be-a-millionaire/",
      src: Img3,
    },
    {
      url: "https://nightscans.org/series/cong-da-shu-kaishi-de-jinhua__trashed/",
      src: Img4,
    },
    {
      url: "https://nightscans.org/series/astral-pet-store/",
      src: Img5,
    },
    {
      url: "https://nightscans.org/series/invincible-after-100-years-of-seclusion/",
      src: Img6,
    },
    {
      url: "https://nightscans.org/series/shincons-one-coin-clear/",
      src: Img7,
    },
  ];
  const handleSlideChange = (newIndex) => {
    if (newIndex > selectedSpan) {
      setSlideDirection("slide-left");
    } else {
      setSlideDirection("slide-right");
    }
    setSelectedSpan(newIndex);
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

  const leftClick = () => {
    if (selectedSpan === 0) {
      setSelectedSpan(sliderImages.length-1)
    } else {
      setSelectedSpan(selectedSpan-1)
    }
  }
  const rightClick = () => {
    if (selectedSpan === sliderImages.length-1) {
      setSelectedSpan(0)
    } else {
      setSelectedSpan(selectedSpan+1)
    }
  }

  return (
    <section className="w-screen relative max-h-[500px]">
      <div className="max-h-[500px] relative cursor-pointer">
        <div className="w-full h-[500px] flex items-center justify-center slider" style={{backgroundImage: `url(${sliderImages[selectedSpan].src})`,
        backgroundSize: 'cover'}}>
          <a
            href={sliderImages[selectedSpan].url}
            className="w-full max-h-[500px]"
          >
            {/* <img
              src={sliderImages[selectedSpan].src}
              className="w-full max-h-[500px] object-cover"
              alt=""
            /> */}
          </a>
          <div
            className="absolute top-[250px] text-white w-[88px] h-[104px] cursor-pointer left-0"
            onClick={leftClick}
          >
            <IoIosArrowBack className="w-[68px] h-[84px]" />
          </div>
          <div
            className="absolute top-[250px] text-white w-[88px] h-[104px] cursor-pointer right-0"
            onClick={rightClick}
          >
            <IoIosArrowForward className="w-[68px] h-[84px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slideshow;
