import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams(); // leggiamo l'id dalla URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Prodotto non trovato"));
  }, [id]);

  if (!product) {
    return <p>Caricamento...</p>;
  }

  return (
    <div className="container">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <p>{product.description}</p>
      <p><strong>Categoria:</strong> {product.category}</p>
      <p><strong>Prezzo:</strong> {product.price} €</p>
    </div>
  );
}

export default ProductDetail;