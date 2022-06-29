import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Works from "./components/works/works";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      
      <Header />
      <Navbar />
      <Home />
      <About />
      <Works />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
