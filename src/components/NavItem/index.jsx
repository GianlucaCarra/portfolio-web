import { Container } from "./style";

export function NavItem({title}) {
  return (
    <Container>
      <span>{title}</span>

      <div></div>
    </Container>
  );
}