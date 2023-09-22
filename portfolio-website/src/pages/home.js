import styles from "./styles/home.module.css";
import hi from ".././resources/hello.svg.svg";

function Home() {
  return (
    <div>
      <div className={styles.introdiv}>
        <div className={styles.introtext}>
          <h1 className={styles.textbig}>Abhik Ghosh</h1>
          <h3 className={styles.textsmall}>A Programer.</h3>
        </div>
        <img src={hi} alt="hi" className={styles.hiimg} />
      </div>
    </div>
  );
}

export default Home;
