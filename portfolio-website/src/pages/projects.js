import styles from "./styles/projects.module.css";
import Footer from "../components/footer";

function Projects() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.content}>
        <h1 className={styles.pagetitle}>Projects</h1>
      </div>
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
