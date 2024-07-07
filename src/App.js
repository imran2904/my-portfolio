import "./App.css";
import About from "./components/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero";
import Mywork from "./components/mywork/Mywork";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="main">
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Mywork></Mywork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
