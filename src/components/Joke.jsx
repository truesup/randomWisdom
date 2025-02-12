import styles from './Joke.module.css';

function Joke({ children }) {
  return <p className={styles.jokeParagraph}>{children}</p>;
}

export default Joke;
