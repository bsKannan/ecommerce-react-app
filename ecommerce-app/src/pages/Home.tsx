import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const [products ,setProducts] = useState([]);

    useEffect(()=> {
        getAllProducts().then((data) => {
            setProducts(data);
        }).catch((error) => {
            console.error('Error fetching products:', error);
        });
    }, [])

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {products.map((product:any) => (
                <ProductCard key={product.id} product={product} />  
            ))}
        </div>
    )
};

export default Home;