import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { PlusCircle } from 'lucide-react'
import Layout from "../../Layout";

// Datos de ejemplo (en una aplicación real, estos vendrían de una API o base de datos)
const initialBlogs = [
  { id: 1, title: 'Proceso de tejido de las Molas', content: 'En este video, mostramos el proceso tradicional...', author: 'María Gómez', date: '2024-03-15', comments: 5 },
  { id: 2, title: 'Nuevos diseños de sombreros pintados', content: 'Estamos emocionados de presentar nuestra nueva colección...', author: 'Juan Pérez', date: '2024-03-10', comments: 3 },
]

export  function BlogList() {
  const [blogs, setBlogs] = useState(initialBlogs)
  const [newBlog, setNewBlog] = useState({ title: '', content: '', author: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewBlog(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const blogToAdd = {
      ...newBlog,
      id: blogs.length + 1,
      date: new Date().toISOString().split('T')[0],
      comments: 0
    }
    setBlogs(prev => [blogToAdd, ...prev])
    setNewBlog({ title: '', content: '', author: '' })
  }

  return (
    <Layout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog de Artesanos</h1>

      {/* Formulario para agregar nuevo blog */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Agregar Nueva Publicación</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBlog.title}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Contenido</label>
            <textarea
              id="content"
              name="content"
              value={newBlog.content}
              onChange={handleInputChange}
              required
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">Autor</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBlog.author}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusCircle className="mr-2" size={20} />
            Publicar
          </button>
        </form>
      </div>

      {/* Lista de blogs */}
      <div className="space-y-6">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.content.substring(0, 150)}...</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Por: {blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Link to={`/blog/${blog.id}`} className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Leer más
                </Link>
                <span className="text-gray-500">{blog.comments} comentarios</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  )
}