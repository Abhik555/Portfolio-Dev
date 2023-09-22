import { MdOutlineMail} from "react-icons/md";
import {AiOutlineGithub} from 'react-icons/ai'
import { IconContext } from "react-icons";
import styles from "./styles/contactme.module.css";

function ContactMe() {
  return (
    <div className={styles.bod}>
      <h1 className={styles.title}>Contact Me</h1>
      <IconContext.Provider value={{ className: styles.icon , size: '50px', style: { display: 'flex' , textAlign: 'center' , padding: '10px' } }}>
        <div className={styles.iconbox}>
          <MdOutlineMail className={styles.icon} />
          <AiOutlineGithub />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default ContactMe;
