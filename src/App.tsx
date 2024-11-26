import React from 'react';
import { Monitor, Wifi, Shield, Terminal, Clock, Phone, Mail, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import AppointmentForm from './components/AppointmentForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Soporte Técnico Profesional a tu Alcance</h1>
            <p className="text-xl mb-8">Soluciones informáticas rápidas y confiables para tu negocio o hogar</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#agendar" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Agendar Servicio
              </a>
              <a 
                href="https://wa.me/56942692899" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              Icon={Monitor}
              title="Mantenimiento de Computadoras"
              description="Servicio completo de mantenimiento preventivo y correctivo para tu equipo."
            />
            <ServiceCard
              Icon={Wifi}
              title="Redes y Conectividad"
              description="Instalación y configuración de redes empresariales y domésticas."
            />
            <ServiceCard
              Icon={Terminal}
              title="Instalación de Software"
              description="Instalación y actualización de sistemas operativos y programas."
            />
            <ServiceCard
              Icon={Shield}
              title="Seguridad Informática"
              description="Protección contra virus y amenazas para tus dispositivos."
            />
          </div>
        </div>
      </section>

      {/* WhatsApp Contact Banner */}
      <section className="bg-green-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-white mb-4 sm:mb-0">
              <h3 className="text-2xl font-bold mb-2">¿Necesitas ayuda inmediata?</h3>
              <p className="text-lg">Contáctanos por WhatsApp para una respuesta rápida</p>
            </div>
            <a 
              href="https://wa.me/56942692899" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              Chatear ahora
            </a>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="agendar" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Agenda tu Servicio</h2>
          <AppointmentForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-gray-600">+56942692899</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">cazelada@live.cl</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Horario</h3>
              <p className="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
              <p className="text-gray-600">Sáb: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2">© 2024 Soporte Fácil. Todos los derechos reservados.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-400">Términos y Condiciones</a>
              <a href="#" className="hover:text-blue-400">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;