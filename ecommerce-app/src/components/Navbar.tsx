import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const Navbar = () => {
    const cartCount = useCartStore((state) => state.cartItems.length);
    return(
    <div className="flex justify-between p-4 bg-blue-600 text-white">
        <Link to="/">Amazon Clone App</Link>
        <Link to="/cart" className="relative">
            🛒
            {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full">
                    {cartCount}
                </span>
                )}
        </Link>
    </div>);
}

export default Navbar;