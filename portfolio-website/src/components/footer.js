import styles from "./styles/footer.module.css";

function Footer() {
    return(
        <div className={styles.container}>
            <p>A website with ReactJS by Abhik Ghosh</p>
            <p>&copy; 2023 Abhik Ghosh. All rights reserved.</p>
        </div>
    );
}

export default Footer;