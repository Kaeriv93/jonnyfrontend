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
      </div>
    )
  }
  
  export default Home;