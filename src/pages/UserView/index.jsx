import { Container, Header, Home, Card, About, Projects } from './style';

import { NavItem } from "../../components/NavItem";
import { AboutText } from "../../components/AboutText";
import { GaleryItem } from "../../components/GaleryItem";

import Logo from "../../assets/logo.svg";
import ProfileImage from "../../assets/image-personal.png";

export function UserView() {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo from giancarra.com" />

        <nav>
          <NavItem title="home" />
          <NavItem title="about" />
          <NavItem title="projects" />
          <NavItem title="contact" />
        </nav>
      </Header>

      <Home id='home'>
        <div className='intro'>
          <h2>Hello, welcome to my <span>portfolio</span>.</h2>

          <p>
            I'm Gianluca Carra, a seasoned freelance web 
            developer with over three years of experience. 
            I specialize in crafting tailored digital solutions 
            to address your unique challenges. From website 
            development to problem-solving, I'm dedicated 
            to delivering the highest quality results. Join me on 
            this journey as we transform your digital 
            aspirations into reality!
          </p>
          
          <Card>
            <span>
              <strong>
                3+
              </strong>
              experience
            </span>

            <div className='separator'></div>

            <span>
              <strong>
                6+
              </strong>
              certification
            </span>

            <div className='separator'></div>

            <span>
              <strong>
                8+
              </strong>
              technologies
            </span>
          </Card>
        </div>

        <img src={ProfileImage} alt="Image of Gianluca Carra" />
      </Home>

      <About id='about'>
        <AboutText number={"1"} title={<h2>Crafting Memorable <span>Digital Experiences</span></h2>} 
          text={<p>I'm passionate about crafting engaging 
            digital experiences that leave a lasting impact.
             With over three years of experience in web development, 
             I specialize in creating user-friendly interfaces and 
             robust backend solutions. My goal is to go above and 
             beyond to exceed client expectations, delivering innovative 
             solutions that elevate their digital presence. 
            Let's collaborate and turn your vision into a reality!</p>} 
        />

        <AboutText number={"2"} title={<h2>A Journey in <span>Web Development</span></h2>} 
          text={<p>Over the past three years, 
            I've dedicated myself to web development, 
            engaging in diverse freelance projects. I've crafted intuitive 
            e-commerce interfaces, developed robust content management systems, 
            and tailored solutions to enhance user experiences. Proficient in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>NodeJS</strong>, <strong>ReactJS</strong>, <strong>SQLite</strong> and <strong>SQL</strong>, I'm committed to delivering high-quality results.
             Eager to continue pushing boundaries in the dynamic field of web development.</p>} 
        />

        <AboutText number={"3"} title={<h2>Tailored Solutions for <span>Seamless</span> Experiences</h2>} 
          text={<p>Offering a comprehensive 
            suite of web development services, I 
            specialize in crafting custom websites and dynamic web applications tailored to clients'
             needs. Leveraging technologies like NodeJS and ReactJS, I ensure seamless user experiences
             
              while expertly managing databases using SQLite and SQL for efficient data integration. With 
              proficiency in both front-end and back-end development, I create cohesive solutions that 
            prioritize responsive design, guaranteeing optimal performance across devices and platforms.</p>} 
        />
      </About>

      <Projects id='projects'>
        <h1>Projects</h1>

        <ul>
          <li><button>ALL</button></li>
          <li><button>FRONT-END</button></li>
          <li><button>BACK-END</button></li>
        </ul>

        <div className="slider">
        </div>
        

      </Projects>
    </Container>
  );
}