import { Container } from "./style";

export function InfoSection({ img, text, className }) {
  return (
    <Container className={className}>
      <p>{text}</p>
      <img src={img} />
    </Container>
  );
}