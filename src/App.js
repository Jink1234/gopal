import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Intro from "./Components/Intro/Intro";
import ProductList from "./Components/ProductsList/ProductList";


function App() {
  return (
    <div className="App">
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </div>
  );
}

export default App;
