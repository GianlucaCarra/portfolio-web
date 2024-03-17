import { Container } from "./style";

export function GaleryItem({ img, title, className, desc, href, onClick }) {
  return (
    <Container className={className} href={href} onClick={onClick}>
      <img src={img} alt={title} />

      <div className="info">
        <h3>{title}</h3>

        <p>{desc}</p>
      </div>
    </Container>
  );
}