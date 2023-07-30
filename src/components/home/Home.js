import Cards from "../cards/Card";
import Footer from "../footer/Footer";

const Home = () => {
    return(
        <div>
            <div className="welcome_div">
                <p>Καλώς ήρθατε στη σελίδα μας!</p>
            </div>
            <Cards />
            <Footer />
        </div>
    )
}

export default Home;