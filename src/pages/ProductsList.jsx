import axios from "axios"
import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"



const endpoint = "https://fakestoreapi.com/products"


function ProductsList() {
  // variabile stato prodotti
  const [products, setProducts] = useState([]);


  // funzione che chiama endpoint API
  function fetchProducts() {
    axios.get(endpoint)
      .then((res) => setProducts(res.data))
      .catch(err => console.error("errore richiesta"))
  }


  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <>
      <NavBar />
      <h2>ciao sei su LISTA PRODOTTI</h2>
      <div className="row-flex">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img className="card-img-top" src={product.image} alt="" />
            <p>{product.category}</p>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price} €</p>
            <p>Voto: {product.rating?.rate}</p>
            <p>Recensioni: {product.rating?.count}</p>
          </div>
        ))}
      </div>


    </>
  )
}

export default ProductsList