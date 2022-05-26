import { Typewriter,Cursor } from 'react-simple-typewriter'


function Home(props) {

    return(
      <div>
        <div className='title'>
          <h1>Hello there,</h1> 
          <h1>I'm Jonny! I am a {''}
            <Typewriter
                    words={['Developer', 'Student', 'Enthusiast', 'Hardworker']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
            />
            <Cursor/>
          </h1>
        </div>
        <div className='about'>
            <h2>About Me</h2>
            <div class="skill-row">
              <img class="computer" src="https://i.imgur.com/Ru0cEcrt.png" alt="computer"/>
              <h3><em>Design and Web Development</em></h3>
              <p>Motivated Front End Developer eager to build and maintain beautiful websites. 
                Proficient in HTML, CSS, Javascript, plus modern libraries and frameworks. 
                Diverse work history with prior experience in working within teams and customer service. 
                Effective multi-tasker and valued team member who thrives in busy, fast-paced environments. 
              </p>
             
              </div>
            <div class="skill-row">
                <img class="pc" src="https://i.imgur.com/rypMXqPm.jpg" alt="pc"/>
                <h3><em>PC Building</em></h3>
                <p>Intel or Amd, I can build any system using modern tech. I love working with full size cases as I have more room to manage cables and making the overall build look as neat as possible.</p>
            </div>
          </div>
          <div className='mySkills'>
            <h2>My Skills</h2>
            <div className='about-skills'>
                About Section Here
            </div>
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
      </div>
    )
  }
  
  export default Home;