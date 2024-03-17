import { useState } from "react";

import { Container } from "./style";

import { GaleryItem } from "../GaleryItem";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  return (
    <Container>
      <div className="slider">
        <IoIosArrowBack size={40} onClick={prevSlide} />
        {
          data.map((item, idx) => {
            return (
              <div className={slide === idx ? "slide" : "slide slide-hidden"} key={idx}>
                {
                  item.projects.map((element, idx) => {
                    return (
                      <GaleryItem 
                        key={idx} 
                        img={element.img} 
                        className={element.className && " notSelectable"} 
                        title={element.title} 
                        desc={element.desc}
                      />
                    )
                  })
                }
              </div>
            )
          })
        }
        <IoIosArrowForward size={40} onClick={nextSlide} />
      </div>

      <span className="indicators">
        {
          data.map((dot, idx) => {
            return (
              <div key={idx} className={slide === idx ? "indicator" : "indicator indicator-inactive"}>

              </div>
            )
          })
        }
      </span>
    </Container>
  );
}