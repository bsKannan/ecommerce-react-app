import { useCartStore } from "../store/useCartStore";


const Cart = ()=> {
    const { cartItems, removeFromCart } = useCartStore();

    return (
        <div className="p-4">
            {cartItems.length > 0 ? (
                cartItems.map((item)=>(
                    <div key={item.id} className="flex justify-between border p-2 mb-2">
                        <p>{item.title}</p>
                        <p>${item.price.toFixed(2)}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            )}

        </div>
    )
}

export default Cart;