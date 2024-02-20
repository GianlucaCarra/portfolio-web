import { Container } from "./style";

import foto from "../../assets/image-personal.png"

export function GaleryItem({ image, text }) {
  return (
    <Container>
      <img src={foto} alt={text} />

      <span>Projetonncncncnnc</span>
    </Container>
  );
}