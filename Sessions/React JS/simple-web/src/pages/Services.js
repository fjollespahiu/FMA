import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Services() {
    return (
        <>
            <Header
                title="Services"
                desc="Our latest and the greatest services"
            />
            <Nav />
            <main>
                <h2>Services</h2>
                <p>This is the services page. Welcome to our simple website built with HTML and CSS only.</p>
            </main>
            <Footer />
        </>
    );
}

export default Services;