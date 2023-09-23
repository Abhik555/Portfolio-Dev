import ClickableLinks from "../components/clickablelinks";
import Footer from "../components/footer";
import styles from "./styles/about.module.css";

function About(props) {
  return (
    <div>
      <div className={styles.container}>
        <br></br>
        <br></br>
        <br></br>
        <div></div>
        <div>
          <img src={props.img} alt="Abhik Ghosh" className={styles.logo} />
        </div>
        <div className={styles.textcontainer}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.discription}>{props.text}</p>
          <br></br>
          <div>
            <ClickableLinks />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer className={styles.footer}/>
      </div>
    </div>
  );
}

export default About;
