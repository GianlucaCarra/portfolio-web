import { Container } from './style';

export function AboutText({number, title, text}) {
  return (
    <Container>
      <div className='number notSelectable'>
        <span>0{number}</span>
        
        <div className='line'></div>
      </div>

      <div className='text'>
        {title}
        {text}
      </div>
    </Container>
  );
}