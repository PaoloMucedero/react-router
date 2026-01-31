import axios from "axios"
import NavBar from "../components/NavBar"
const endpoint = "https://fakestoreapi.com/products"


function ProductsList() {

  // funzione che chiama endpoint API
  function fetchProducts() {
        axios.get(endpoint)
            .then((res) => console.log(res.data))
            .catch(err => console.error("errore richiesta"))
  }
  fetchProducts()

  return (
    <>
      <NavBar />
      <h2>ciao sei su LISTA PRODOTTI</h2>
      <div className="row-flex">
        <div className="card">
          <div className="top">
            <img src="null" alt="Maglietta-rel-fit-tee" />
          </div>
          <div className="bottom">
            <figcaption className="brand">Levi's</figcaption>
            <p className="article-name">RELAXED FIT TEE UNISEX</p>
            <div className="prezzi"></div>
          </div>
        </div>
      </div>


    </>
  )
}

export default ProductsList