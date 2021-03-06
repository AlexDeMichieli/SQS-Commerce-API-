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
    let phones = ['503-544-8937']
  return (
    <div className="App">
    
    {loading ? <p>Fetching data</p> : inventory }
    {phones.map(item=>{
      let tel = 'tel:'+ Object.entries({item})
      return <a href={tel}>{item}</a>
    })}
    </div>
  );
}

export default App;
