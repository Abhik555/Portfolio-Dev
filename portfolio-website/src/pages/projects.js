import styles from "./styles/projects.module.css";
import Footer from "../components/footer";
import ProjectItem from "../components/projectitem";

import placeholderimg from ".././resources/Project Logo Placeholder.png";
import logo from ".././resources/logo.png";
import groceryimg from ".././resources/GroceryStore Management.png"
import inboxinlogo from "..//./resources/InboxIn Logo.png";

function Projects() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.content}>
        <h1 className={styles.pagetitle}>Projects</h1>
      </div>
      <div>
        <ProjectItem
          title="Portfolio Website"
          disc="A website built by me to showcase my skills and experience built entirely in ReactJS."
          img={logo}
          link="Abhik555.github.io"
        />
        <ProjectItem
          title="Grocery Store Mangement Project"
          disc="A School Project to manage a database of a grocery store. Uses the tabulate python library to beautify the table structure."
          img={groceryimg}
          link="https://github.com/Abhik555/Grocery-Store-Mangement-XII-Project"
        />
        <ProjectItem
          title="InboxIn"
          disc="A Email Automation Solution Currently In Progress"
          img={inboxinlogo}
          link="https://github.com/Abhik555/InboxIn"
        />
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
