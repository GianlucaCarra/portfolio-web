import { Container } from "./style";

export function GaleryItem({ img, title, className, desc }) {
  return (
    <Container className={className} >
      <img src={img} alt={title} />

      <div className="info">
        <h3>title</h3>

        <p>Lorem ipsum dolor sit amet
           consectetur adipisicing elit. 
           At laborum laudantium soluta. 
           Consequuntur, sunt esse recusandae 
           autem nam quisquam magni et nemo 
           pariatur officia repellat obcaecati 
           soluta ipsa eos alias?</p>
      </div>
    </Container>
  );
}