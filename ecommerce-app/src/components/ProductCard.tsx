import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore"


const ProductCard = ({product}:any) => {
    const addToCart = useCartStore((state)=> state.addToCart);
    
    const navigate = useNavigate();
    return (
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <img 
                src={product.image} 
                alt={product.title} 
                className="h-40 mx-auto cursor-pointer"
                onClick={()=> navigate(`/product/${product.id}`)} 
            />
            <h2 className="text-lg font-semibold mt-2  " onClick={()=> navigate(`/product/${product.id}`)} >
                {product.title}
            </h2>
            <p className="text-green-600 font-bold">₹{product.price}</p>

            <button onClick={()=> addToCart(product)}
                className="bg-yellow-400 px-4 py-2 mt-2 w-full rounded"
                >
                    Add to Cart
                </button>
        </div>
    )
};

export default ProductCard;