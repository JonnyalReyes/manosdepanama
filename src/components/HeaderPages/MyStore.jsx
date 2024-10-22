import React, { useState } from "react"; 
import { PlusCircle, Edit, Trash2 } from 'lucide-react'
import Layout from "../../Layout";

import SombreroPintao from "../../assets/sombrero-pintao.webp";
import MolaGuna from "../../assets/Mola-guna.webp";

const initialProducts = [
  { id: 1, name: 'Sombrero Pintado', description: 'Sombrero tradicional panameño', image: SombreroPintao, price: 45, quantity: 10 },
  { id: 2, name: 'Mola Guna', description: 'Textil artesanal Guna', image: MolaGuna, price: 30, quantity: 15 },
]

export function MyStore() {
  const [products, setProducts] = useState(initialProducts)
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    quantity: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewProduct(prev => ({ ...prev, [name]: value }))
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    const productToAdd = {
      ...newProduct,
      id: products.length + 1,
      price: parseFloat(newProduct.price),
      quantity: parseInt(newProduct.quantity)
    }
    setProducts(prev => [...prev, productToAdd])
    setNewProduct({ name: '', description: '', image: '', price: '', quantity: '' })
  }

  return (
    <Layout> 
        <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-6">Mi Tienda</h1>

        {/* Lista de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-indigo-600 font-bold mb-2">${product.price.toFixed(2)}</p>
                <p className="text-gray-500">Cantidad: {product.quantity}</p>
                <div className="mt-4 flex justify-end space-x-2">
                    <button className="p-2 text-blue-500 hover:text-blue-700">
                    <Edit size={20} />
                    </button>
                    <button className="p-2 text-red-500 hover:text-red-700">
                    <Trash2 size={20} />
                    </button>
                </div>
                </div>
            </div>
            ))}
        </div>

        {/* Formulario para agregar producto */}
        <div className="bg-white border-black rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Producto</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">Nombre del Producto</label>
                <input
                type="text"
                id="name"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea
                id="description"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                required
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
            </div>
            <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">URL de la Imagen</label>
                <input
                type="url"
                id="image"
                name="image"
                value={newProduct.image}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                    min="0"
                    step="0.01"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                </div>
                <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Cantidad</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={newProduct.quantity}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                </div>
            </div>
            <div>
                <button
                type="submit"
                className="h-full w-full flex justify-center py-2 px-4 border border-transparent rounded-md bg-gray-600 text-sm font-medium text-white  hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                <PlusCircle className="mr-2" size={20} />
                Agregar Producto
                </button>
            </div>
            </form>
        </div>
        </div>
    </Layout>  
  )
};