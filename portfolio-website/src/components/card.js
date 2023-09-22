import styles from './styles/card.module.css';

function ExperienceCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {props.icon}
      </div>
      <div className={styles.text}>
        <h1>
            {props.text}
        </h1>
      </div>
    </div>
  );
}

export default ExperienceCard;
