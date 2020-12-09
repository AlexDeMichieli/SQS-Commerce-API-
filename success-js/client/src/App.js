import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/inventory");
        console.log(res);
        setProducts(res.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    getProducts();
  }, []);

  console.log(products);

  let inventory =
    products &&
    products.map((item) => {
      return <p>Item Quantity ===> {item.quantity}</p>;
    });

  return (
    <div className="App">{loading ? <p>Fetching data</p> : inventory }</div>
  );
}

export default App;
