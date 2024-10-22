import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Send } from 'lucide-react'
import Layout from "../../Layout";

// Datos de ejemplo 
const blogPosts = [
  {
    id: 1,
    title: 'Proceso de tejido de las Molas',
    content: 'En este video, mostramos el proceso tradicional de tejido de las Molas, una artesanía textil característica de la cultura Guna. Las Molas son paneles decorativos hechos con la técnica de aplicado inverso, donde se cosen varias capas de telas de diferentes colores para crear diseños intrincados y coloridos. Este arte se transmite de generación en generación y cada Mola cuenta una historia única sobre la naturaleza, la cosmología o la vida cotidiana de los Guna. En el video, podrán observar cómo nuestras artesanas expertas seleccionan cuidadosamente los colores, cortan las telas con precisión y cosen cada capa con habilidad y paciencia. El proceso puede llevar varios días o incluso semanas para completar una sola Mola, dependiendo de la complejidad del diseño. Esperamos que este vistazo a nuestro proceso artesanal les ayude a apreciar aún más el valor y la belleza de cada Mola que creamos.',
    author: 'María Gómez',
    date: '2024-03-15',
    comments: [
      { id: 1, author: 'Juan Pérez', content: 'Increíble trabajo, ¡gracias por compartir!', date: '2024-03-16' },
      { id: 2, author: 'Ana López', content: 'Me encantaría aprender esta técnica. ¿Ofrecen talleres?', date: '2024-03-17' }
    ]
  },
  {
    id: 2,
    title: 'Nuevos diseños de sombreros pintados',
    content: 'Estamos emocionados de presentar nuestra nueva colección de sombreros pintados a mano. Cada sombrero es una obra de arte única que combina la tradición del tejido de sombreros con diseños contemporáneos inspirados en la rica flora y fauna de Panamá. Nuestros artesanos han trabajado arduamente para crear patrones que van desde coloridas aves tropicales hasta intrincados diseños geométricos, todos pintados a mano con pigmentos naturales. Esta colección no solo representa la habilidad de nuestros artesanos, sino también nuestro compromiso con la sostenibilidad y la preservación de las técnicas artesanales tradicionales. Cada sombrero viene con una tarjeta que cuenta la historia del artesano que lo creó y el significado detrás del diseño. Esperamos que estos sombreros no solo sean una adición elegante a su guardarropa, sino también una pieza de conversación que ayude a difundir la apreciación por la artesanía panameña en todo el mundo.',
    author: 'Juan Pérez',
    date: '2024-03-10',
    comments: [
      { id: 1, author: 'María Gómez', content: '¡Los diseños son hermosos! No puedo esperar para ver más.', date: '2024-03-11' },
      { id: 2, author: 'Carlos Rodríguez', content: '¿Estos sombreros estarán disponibles en la tienda física?', date: '2024-03-12' }
    ]
  }
]

export function BlogPost() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [newComment, setNewComment] = useState({ author: '', content: '' })

  useEffect(() => {
    // En una aplicación real, aquí harías una llamada a la API
    const fetchedPost = blogPosts.find(post => post.id === parseInt(id))
    setPost(fetchedPost)
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewComment(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (post) {
      const commentToAdd = {
        id: post.comments.length + 1,
        ...newComment,
        date: new Date().toISOString().split('T')[0]
      }
      setPost(prev => ({
        ...prev,
        comments: [...prev.comments, commentToAdd]
      }))
      setNewComment({ author: '', content: '' })
    }
  }

  if (!post) return <div>Cargando...</div>

  return (
    <Layout>
    <div className="container mx-auto px-4 py-8">
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <span>Por: {post.author}</span>
            <span>{post.date}</span>
          </div>
          <div className="prose max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comentarios</h2>
        <div className="space-y-4">
          {post.comments.map(comment => (
            <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{comment.author}</span>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmitComment} className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Agregar un comentario</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                id="author"
                name="author"
                value={newComment.author}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">Comentario</label>
              <textarea
                id="content"
                name="content"
                value={newComment.content}
                onChange={handleInputChange}
                required
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Send className="mr-2" size={20} />
              Enviar comentario
            </button>
          </div>
        </form>
      </div>
    </div>
    </Layout>
  )
}