import Cards from "../cards/Card";
import styles from "../home/Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.welcomeDiv}>
        <h1 className={styles.welcome_text}>Ανακάλυψε live events στα καλύτερα μαγαζιά της πόλης σου!</h1>
        <p className={styles.welcome_text}>Εδώ μπορείς να κάνεις κράτηση στα καλύτερα ουζερί της πόλης σου!</p>
      </div>
      <Cards />
    </div>
  );
};

export default Home;
