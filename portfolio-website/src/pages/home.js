import styles from "./styles/home.module.css";

function Home() {
    return(
        <div>
            <div className={styles.quotediv}>
                <br />
                <br />
                <h1 className={styles.quote}>"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie</h1>
                <br />
                <br />
            </div>
        </div>
    );
}

export default Home;