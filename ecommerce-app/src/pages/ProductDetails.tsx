import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartStore, type Product } from "../store/useCartStore";
import { getProduct } from "../api/productApi";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    const addToCart = useCartStore((state)=>state.addToCart);

    useEffect(() => {
        if(productId){
            getProduct(productId).then((data) => {
                setProduct(data);
            }).catch((error) => {
                console.error('Error fetching product:', error);
            });
        }
    },[productId]);
    

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 md:flex gap-6">
        <div className="md:w-1/2 flex justify-center">
            <img 
            src={product.image} 
            alt={product.title} 
            className="w-full md:w-1/2 h-auto object-contain" />

        </div>
        <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

            <p className="text-gray-600 mt-2">{product.category}</p>
            <p className="text-green-600 text-xl font-bold mb-4">₹{product.price}</p>
            <p className="mb-4">{product.description}</p>
            <button
                onClick={() => addToCart(product)}
                className="bg-yellow-400 px-6 py-3 mt-6 rounded w-full md:w-auto">
                Add to Cart
            </button>
        </div>
    </div>
  );
};

export default ProductDetails;