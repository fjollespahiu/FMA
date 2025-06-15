import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

function About() {
    return (
        <>
            <Header 
                title="About our company"
                desc="This is about our amazing company"
            />
            <Nav />
            <main>
                <h2>About</h2>
                <p>This is the about page. Welcome to our simple website built with HTML and CSS only.</p>
            </main>
            <Footer />
        </>
    );
}

export default About;