import { useState, useEffect } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = ()=>{

    const URL = "https://vireak-san.herokuapp.com/";

    const[projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch(URL + 'projects')
        .then(response => response.json())
        .then((data) => setProjects(data))
    },[])

    const loaded = () =>{
        return projects.map((project,idx)=>(
            <div className="project-card" key={idx}>
                <div>
                    <h3>{project.name}</h3>
                    <img className="project-image" src ={project.image} alt={project.name}/>
                    <p>{project.description}</p>
                    <h5>{project.tech}</h5>
                    <li><a href={project.git} target='_blank' rel="noopener noreferrer" className='git'><FaGithub/></a></li>
                    <li><a href={project.live} target='_blank' rel="noopener noreferrer" className='linkedIn'><FaExternalLinkAlt/></a></li>
                </div>
            </div>
        ))
    }

    return projects ? loaded(): <h2>Loading...</h2>
}

export default Project