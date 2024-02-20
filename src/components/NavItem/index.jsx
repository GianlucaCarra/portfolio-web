import { Container } from "./style";

export function NavItem({ title }) {
  return (
    <Container href={`#${title}`} >
      <span>{title}</span>

      <div></div>
    </Container>
  );
}