import { Container, Header, Home, Card, About, Projects, Contact, Footer } from './style';

import { NavItem } from "../../components/NavItem";
import { AboutText } from "../../components/AboutText";
import { GaleryItem } from "../../components/GaleryItem";

import { IoPhonePortraitOutline, IoMail } from "react-icons/io5";
import { RiTwitterXFill, RiInstagramLine, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

import Logo from "../../assets/logo.svg";
import ProfileImage from "../../assets/image-personal.png";

export function UserView() {

  const filter = (event) => {
    event.target.classList.toggle("selected");

    const front = document.getElementById('front');
    const back = document.getElementById('back');
    const all = document.getElementById('all');

    if(front.classList.contains("selected") || back.classList.contains("selected")) {
      all.classList.remove('selected');
    } else {
      all.classList.add('selected');
    }
  }

  const selectAll = event => {
    event.target.classList.add("selected");

    const front = document.getElementById('front');
    const back = document.getElementById('back');

    const showAll = document.getElementsByClassName("front back");

    front.classList.remove('selected');
    back.classList.remove('selected');

    showAll.classList.remove('hide');
  }

  return (
    <Container>
      <Header>
        <img className="notSelectable" src={Logo} alt="Logo from giancarra.com" />

        <nav>
          <NavItem $is_selected title="home" />
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
          
          <Card className='notSelectable'>
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
          <li><button onClick={selectAll} id='all' className='selected'>ALL</button></li>
          <li><button onClick={filter} id='front' className=''>FRONT-END</button></li>
          <li><button onClick={filter} id='back' className=''>BACK-END</button></li>
        </ul>

        <div className="slider">
          <GaleryItem img={ProfileImage} className="back" title="Projeto api" />
          <GaleryItem img={ProfileImage} className="back" title="Projeto api 2" />
          <GaleryItem img={ProfileImage} className="front" title="Projeto web" />
          <GaleryItem img={ProfileImage} className="front" title="Projeto web 2" />
        </div>
      </Projects>

      <Contact id='contact'>
        <h1>Contact</h1>
        
        <div className="wrapper">
          <div className='action'>

          <h2>Let's <span>Build</span> Together!</h2>

          <p>
            I'm here to help bring your ideas 
            to life! Whether it's creating a 
            new website, revamping your online presence, 
            or tackling web development challenges, I'm ready 
            to collaborate. Get in touch now and let's kickstart
            the process of turning your visions into reality.
          </p>

          <div className='contact-info'>
            <div className="email">
              <IoMail />

              <div>
                <span>MAIL ME</span>
                <a href="mailto:contact@giancarra.com">contact@giancarra.com</a>
              </div>
            </div>

            <div className="phone">
              <IoPhonePortraitOutline />

              <div>
                <span>CALL ME (OR WHATSAPP)</span>
                <a href="sms:+5595981083378?body=I%27m%20interested%20in%20your%service.%20Please%20contact%20me.">+55 (95) 98108-3378</a>
              </div>
            </div>
          </div>

          <ul>
            <li><a href='https://linkedin.com/in/gianlucacarra' target='blank'><RiLinkedinBoxFill /></a></li>
            <li><a href='https://github.com/gianlucacarra' target='blank'><RiGithubFill /></a></li>
            <li><a href='https://twitter.com/giancarradev' target='blank'><RiTwitterXFill /></a></li>
            <li><a href='https://instagram.com/giancarra_' target='blank'><RiInstagramLine /></a></li>
          </ul>
          </div>

          <form action="">
            <div className="input-wrapper">
              <input type="text" placeholder='First name' />
              <input type="text" placeholder='Second name' />
            </div>

            <input type="email" placeholder='E-mail or Phone number' />

            <div className='textarea'>
              <textarea placeholder='Share your idea with me...'/>
            </div>
            
            <button>
              Send message
            </button>
          </form>
        </div>
      </Contact>

      <Footer>
        <div className='help'>
          <h1> Need <span>Assistance?</span></h1>

          <p>
            Reached the bottom of the page and still have questions
            or need assistance? We're here to help! Feel free to 
            contact us if you have any inquiries or need further 
            information. We're ready to assist you in achieving your goals.
          </p>
          
          <a href='mailto:help@giancarra.com'>Get Help</a>
        </div>

        <div className="sep"></div>

        <div className='info'>
            <span>
            Designed and made 
              by<br/>
              <strong>Gianluca Carra</strong>
            </span>
        </div>
      </Footer>
    </Container>
  );
}