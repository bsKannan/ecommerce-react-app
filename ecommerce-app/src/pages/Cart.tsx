import { useCartStore } from "../store/useCartStore";


const Cart = ()=> {
    const { cartItems, removeFromCart } = useCartStore();

    const total = cartItems.reduce((sum, item)=> sum + item.price,0);
    const discount = total *0.1;
    const finalPrice = total - discount;

    return (
        <div className="p-4 md:flex gap-6">
            <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <div 
                        key={item.id}
                        className="flex gap-4 border p-4 mb-4 rounded-lg shadow-sm">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-204 h-24 object-contain"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-xl font-bold">₹{item.price.toFixed(2)}</p>
                            </div>
                            <button 
                            onClick={()=> removeFromCart(item.id)}
                            className="text-red-500 mt-2"
                            >
                                Remove
                            </button>
                        </div>
                    ))

                )}
            </div>
            
            <div className="md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md h-fit">
                <h2 className="txt-xl font-bold mb-4">Order Summary</h2>

                <div className="flex justify-between mb-2">
                    <span>Price ({cartItems.length} items):</span>
                    <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2 text-green-600">
                    <span>Discount (10%):</span>
                    <span>₹{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Delivery Charges</span>
                    <span className="text-green-600">FREE</span>
                </div>
                <hr className="my-3" />

                <div className="flex justify-between font-bold text-lg">
                    <span>Total Amount:</span>
                    <span>₹{finalPrice.toFixed(2)}</span>
                </div>

                <button className="bg-yellow-400 w-full mt-4 py-2 rounded font-semibold hover:bg-yellow-500 transition">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart;