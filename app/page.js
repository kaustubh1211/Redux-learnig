'use client'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart , removeFromCart } from './lib/features/cartSlic'

export default function Home() {
  // 1. Get the cart from the store
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  // Fake product data
  const products = [
    { id: 1, name: 'Redux Hoodie', price: 50 },
    { id: 2, name: 'Next.js Cap', price: 25 },
  ]

  return (
    <main className="p-10">
      {/* CART SUMMARY (Top Right) */}
      <div className="fixed top-5 right-5 bg-black text-white p-4 rounded-lg">
        <h2 className="font-bold">Cart: {cartItems.length} items</h2>
        <div className="text-sm mt-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between gap-4">
              <span>{item.name}</span>
              <button 
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-400 hover:text-red-200"
              >
                (x)
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCT LIST */}
      <h1 className="text-4xl font-bold mb-8">Shop</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            
            <button
              onClick={() => dispatch(addToCart(product))} // <--- Passing the payload!
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}