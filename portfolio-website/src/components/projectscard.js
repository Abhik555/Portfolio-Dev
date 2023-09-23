import styles from "./styles/projcard.module.css";

function ProjectCard(props) {
    return(
        <div className={styles.container}>
            <div>
                <img src={props.img} alt="project" className={styles.logo} />
            </div>
            <div className={styles.textcontainer}>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.discription}>{props.text}</p>
            </div>
        </div>
    );
}

export default ProjectCard;