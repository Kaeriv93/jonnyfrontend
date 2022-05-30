import { Typewriter,Cursor } from 'react-simple-typewriter'
import Skills from '../components/Skills';
import Project from '../components/Project';

function Home(props) {

    return(
      <div>
        <div className='title'>
          <h1>Hello there,</h1> 
          <h1>I'm Jonny! <span className='noun'>I am a {''}
            <Typewriter
                    words={['Developer.', 'Student.', 'Enthusiast.', 'Hardworker.']}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
            />
            <Cursor/>
            </span>
          </h1>
          <div className='about'>
            <h2>A Front End Developer</h2>
            <p>Motivated Front End Developer eager to build and maintain beautiful websites. Proficient in HTML, CSS, Javascript, plus modern libraries and frameworks.</p>
          </div>
          <Skills/>
          <Project/>
        </div>
      </div>
    )
  }
  
  export default Home;