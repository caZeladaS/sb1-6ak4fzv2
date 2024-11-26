import { Menu, X, Monitor, Clock, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Monitor className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Soporte Express</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#agendar" className="text-gray-600 hover:text-blue-600">Agendar</a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600">Contacto</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Servicios</a>
            <a href="#agendar" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Agendar</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}