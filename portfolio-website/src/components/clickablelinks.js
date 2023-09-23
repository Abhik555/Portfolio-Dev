// eslint-disable-next-line
import styles from "./styles/clicklink.module.css";
import {FaGithub  , FaLinkedin} from 'react-icons/fa6';

function ClickableLinks() {
    return(
        <div>
            <div style={{display:"flex" , alignContent:"center" , justifyContent:"center"}}>
                <a href="https://github.com/Abhik555" style={{paddingRight:"25px"}}><FaGithub size={70} color="white"/></a>
                <a href="https://www.linkedin.com/in/abhik-ghosh-995228281/" style={{paddingLeft:"25px"}}><FaLinkedin size={70} color="white"/></a>
            </div>
        </div>
    );
}

export default ClickableLinks;