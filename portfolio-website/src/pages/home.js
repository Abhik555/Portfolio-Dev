import styles from "./styles/home.module.css";
import hi from ".././resources/hello.svg.svg";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import ExperienceCard from "../components/card";

import { FaPython } from "react-icons/fa";

function Home() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  var btsize = "0px";
  var smsize = "0px";
  var pad = "";

  if (isTabletOrMobile) {
    btsize = "28px";
    smsize = "27px";
    pad = "30px 30px 30px 30px";
  } else if (isBigScreen) {
    btsize = "50px";
    smsize = "42px";
    pad = "80px 80px 80px 80px";
  }

  return (
    <div>
      <div className={styles.introdiv}>
        <div className={styles.introtext} style={{ padding: pad }}>
          <h1 className={styles.textbig} style={{ fontSize: btsize }}>
            Abhik Ghosh
          </h1>
          <h1 className={styles.textsmall} style={{ fontSize: smsize }}>
            I'm a passionate and aspiring programmer on an exhilarating journey
            of continuous learning and growth in the world of coding. As I
            navigate through the ever-evolving landscape of technology, I'm
            excited to share my projects, experiences, and the milestones I've
            achieved so far.{" "}
          </h1>
        </div>
        <MediaQuery minWidth={1400}>
          <img src={hi} alt="hi" className={styles.hiimg} />
        </MediaQuery>
      </div>

      <div>
        <div className={styles.introtext} style={{ padding: pad }}>
          <h1 className={styles.textbig} style={{ fontSize: btsize }}>
            Experience
          </h1>
          <br />
          <ExperienceCard icon={<FaPython size={100}/>} text="Python"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
