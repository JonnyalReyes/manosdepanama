import React from 'react';
import Layout from "../../Layout";

const developers = [
  {
    name: "Jonathan Reyes",
    role: "Frontend Developer",
    bio: "Apasionado por crear experiencias de usuario intuitivas y atractivas. Especializado en React y diseño responsivo.",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "José Rodriguéz",
    role: "Backend Developer",
    bio: "Experto en arquitectura de sistemas y bases de datos. Enfocado en crear APIs robustas y escalables.",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "Gabriel Ruiz",
    role: "Full Stack Developer",
    bio: "Desarrollador versátil con habilidades tanto en frontend como en backend. Apasionado por las nuevas tecnologías y la innovación.",
    image: "/placeholder.svg?height=300&width=300"
  }
];

export function AboutUs() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Nuestro Equipo</h1>
          <p className="text-center text-xl mb-16 max-w-3xl mx-auto">
            Somos un equipo apasionado de desarrolladores dedicados a crear una plataforma que conecte a los talentosos artesanos de Panamá con el mundo. Nuestra misión es preservar y promover la rica herencia cultural de Panamá a través de la tecnología.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {developers.map((dev, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={dev.image} alt={dev.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{dev.name}</h2>
                  <h3 className="text-lg text-gray-600 mb-4">{dev.role}</h3>
                  <p className="text-gray-700 mb-6">{dev.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
