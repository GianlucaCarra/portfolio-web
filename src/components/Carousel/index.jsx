import { useState } from "react";

import { Container, Section } from "./style";

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
  
  const html = (
    <Container>
      <h1>Projects</h1>

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
                        onClick={() => showInfo(element)}
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
              <div key={idx} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></div>
            )
          })
        }
      </span>
    </Container>
  );

  const [project, setProject] = useState(html);

  const showInfo = (data) => {
    const infoData = "";

    const showInfos = (
      <Section>
        <h1>{data.title}</h1>
      </Section>
    );
    
    setProject(showInfos);
  }

  return project;
}