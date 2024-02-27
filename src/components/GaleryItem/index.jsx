import { Container } from "./style";

export function GaleryItem({ img, title, className }) {
  return (
    <Container className={className} >
      <img src={img} alt={title} />

      <span>{title}</span>
    </Container>
  );
}