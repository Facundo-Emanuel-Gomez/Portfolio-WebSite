import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./Context";

const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#0c0c0c" : "#eaeaea", color: darkMode && "#eaeaea"}}>
      <Toggle/>
      <Intro />
      <About></About>
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
