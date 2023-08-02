import Cards from "../cards/Card";
import Footer from "../footer/Footer";

const Home = () => {
    return(
        <div>
            <div className="welcome_div">
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