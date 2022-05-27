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
            <div className='about-skills'>
                <h2>My Skills</h2>
                <p>Through my studies, I've gained a solid understanding of computer science and web development concepts, and have dedicated a lot of my free time to apply these concepts to real-world scenarios and applications.</p>
            </div>

            <div className='list-skills'>
              <ul>
                <li>Javascript</li>
                <li>HTML & CSS</li>
                <li>React</li>
                <li>Git</li>
                <li>Python</li>
                <li>Mongo</li>
              </ul>
            </div>
            
            <div className='something'>
              <h2>Something Goes Here</h2>
              <p>Just putting some stuff here for now</p>
              <p>To see Stuff</p>
            </div>

          </div>
      </div>
    )
  }
  
  export default Home;