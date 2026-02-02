import axios from "axios"
import { Link } from "react-router-dom"
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
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="card">
            <img className="card-img-top" src={product.image} alt={product.title} />
            <p>{product.category}</p>
            <p>{product.title}</p>
            <p>{product.price} €</p>
          </div>
        </Link>
      ))}


    </>
  )
}

export default ProductsList

