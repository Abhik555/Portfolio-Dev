import { MdOutlineMail } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { IconContext } from "react-icons";
import {FaLinkedin} from 'react-icons/fa6';
import styles from "./styles/contactme.module.css";
import img from ".././resources/contact.svg";

function ContactMe() {
  return (
    <div className={styles.bod}>
      <h1 className={styles.title}>Contact Me</h1>
      <IconContext.Provider
        value={{
          className: styles.icon,
          size: "50px",
          style: { display: "flex", textAlign: "center", padding: "10px" },
        }}
      >
        <div className={styles.iconbox}>
          <div>
            <div className={styles.link}>
              <MdOutlineMail className={styles.icon} />
              <h1 className={styles.text}>abhik555@hotmail.com</h1>
            </div>
            <div className={styles.link}>
              <AiOutlineGithub className={styles.icon} />
              <h1 className={styles.text}>github.com/Abhik555</h1>
            </div>
            <div className={styles.link}>
              <FaLinkedin className={styles.icon} />
              <h1 className={styles.text} style={{fontSize:"15px" , overflow:"ellipsis"}}>https://www.linkedin.com/in/abhik-ghosh-995228281/</h1>
            </div>
          </div>
          <div className={styles.imgcontainer}>
            <img src={img} alt="Contact" className={styles.img}></img>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default ContactMe;
