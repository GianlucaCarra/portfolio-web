import { Container } from "./style";

import { GaleryItem } from "../GaleryItem";

export function Carousel({ data }) {
  return (
    <Container>
      {
        data.map((item, index) => {
          return (
            <div className="slide" id={item.id}>
              {
                item.projects.map(element => {
                  return (
                    <GaleryItem 
                      key={element.key} 
                      img={element.img} 
                      className={element.className} 
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
    </Container>
  );
}