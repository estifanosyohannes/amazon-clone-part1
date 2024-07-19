import "./App.css";
import Carousels from "./Components/Carousel/Carousels";
import Category from "./Components/Catagory/category/Category";
import Header from "./Components/Heades/Header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product from "./Components/Product/Products/Product";
function App() {
  return (
    <>
      <Header />
      <Carousels/>
      <Category/>
      <Product/>
    </>
  );
}

export default App;
