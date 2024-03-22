import { useState } from "react";

import { Container, Section } from "./style";

import { GaleryItem } from "../GaleryItem";
import { InfoSection } from "../InfoSection";

import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundBack} from "react-icons/io";

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
                        className={element.type && " notSelectable"} 
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
    const infoData = data.info;

    const showCarousel = () => {
      setProject(html)
    }

    const showInfos = (
      <Section>
        <IoIosArrowRoundBack size={50} onClick={showCarousel} />
        <h1>{data.title}</h1>
        {
          infoData.text.map((item, idx) => {
            return (
              <InfoSection key={idx} className={"reverse"} img={item.img} text={item.parag}/>
            )
          })
        }
      </Section>
    );
    
    setProject(showInfos);
  }

  return project;
}