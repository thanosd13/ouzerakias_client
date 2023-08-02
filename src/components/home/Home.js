import Cards from "../cards/Card";
import Footer from "../footer/Footer";
import styles from "../home/Home.module.css";

const Home = () => {
    return(
        <div>
            <div className={styles.welcomeDiv}>
                <p>Καλώς ήρθες στη σελίδα μας!</p>
                <br/>
                <p>Εδώ μπορείς να κάνεις κράτηση στα καλύτερα ουζερί της πόλης σου!</p>
            </div>
            <Cards />
            <Footer />
        </div>
    )
}

export default Home;