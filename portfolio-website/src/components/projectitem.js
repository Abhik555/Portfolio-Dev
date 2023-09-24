import styles from "./styles/projectitem.module.css";

function ProjectItem(props) {
  return (
    <a href={props.link} style={{textDecoration:"none" , color:"white"}}>
      <div className={styles.container}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.contentdiv}>
          <p className={styles.disc}>{props.disc}</p>
          <img className={styles.logo} src={props.img} alt="projectimage" />
        </div>
      </div>
    </a>
  );
}

export default ProjectItem;
