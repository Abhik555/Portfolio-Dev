import error from ".././resources/404.svg";
import styles from "./styles/nopage.module.css";

function NoPage() {
    return(
        <div>
            <img src={error} alt="Error" className={styles.img} ></img>
            <h1 className={styles.text}>404 Not Found</h1>
        </div>
    );
}

export default NoPage;