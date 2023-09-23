import styles from "./styles/projects.module.css";
import ProjectCard  from "../components/projectscard";
import testimg from ".././resources/me.jpg"

function Projects() {
    return(
        <div className={styles.maincontainer}>
            <h1>Projects</h1>
            <ProjectCard img={testimg} text="This is test para" title="this is a test title" />
        </div>
    );
}

export default Projects;