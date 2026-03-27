import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
    <div className="flex justify-between p-4 bg-blue-600 text-white">
        <Link to="/">Amazon Clone App</Link>
        <Link to="/cart">Cart</Link>
    </div>);
}

export default Navbar;