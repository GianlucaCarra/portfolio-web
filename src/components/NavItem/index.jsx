import { Container } from "./style";

export function NavItem({ title }) {
  return (
    <Container className={title} href={`#${title}`} >
      <span className="notSelectable">{title}</span>

      <div></div>
    </Container>
  );
}