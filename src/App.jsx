import "./App.css";
import { useState } from "react";

import Spinner from "./components/Spinner";
// import ProductList from "./components/ProductList";
import ImprovedProductList from "./components/ImprovedProductList";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        <ImprovedProductList />
      </div>
    );
  }
}

export default App;
